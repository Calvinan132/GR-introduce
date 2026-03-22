// lib/jira.ts
export async function getJiraBacklog() {
  const rawDomain = process.env.JIRA_DOMAIN || "";
  const domain = rawDomain.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const email = process.env.JIRA_EMAIL;
  const token = process.env.JIRA_API_TOKEN;
  const projectKey = process.env.JIRA_PROJECT_KEY;

  if (!projectKey) throw new Error("Missing JIRA_PROJECT_KEY");

  const auth = Buffer.from(`${email}:${token}`).toString("base64");

  // 1. Định nghĩa JQL chặt chẽ để tránh lỗi "Unbounded"
  const jql = `project = "${projectKey}" AND sprint IS EMPTY AND statusCategory != Done ORDER BY created DESC`;

  // 2. Sử dụng GET với các tham số truyền qua Query String (URL)
  // Lưu ý: Endpoint mới là /search/jql
  const params = new URLSearchParams({
    jql: jql,
    maxResults: "20",
    fields: "summary,status,issuetype,priority"
  });

  const url = `https://${domain}/rest/api/3/search/jql?${params.toString()}`;

  console.log("🔗 Đang gọi URL:", url);

  const res = await fetch(url, {
    method: "GET", // Quay lại dùng GET vì /search/jql ưu tiên GET
    headers: {
      Authorization: `Basic ${auth}`,
      Accept: "application/json",
    },
    next: { revalidate: 60 },
  });

  const responseData = await res.json();

  if (!res.ok) {
    console.error("❌ Chi tiết lỗi từ Jira:", responseData);
    throw new Error(`Jira API error: ${res.status} - ${responseData.errorMessages?.[0] || 'Unknown error'}`);
  }

  return responseData;
}