# 🍃 GreenTeam - Quản Trị Dự Án Phần Mềm 

![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)

Chào mừng đến với hệ thống quản lý và giới thiệu dự án của **CHEVE-Team** thuộc học phần **Quản lý Dự án Phần mềm**. Website này được thiết kế nhằm mục đích trình bày đầy đủ các thông tin nội bộ của nhóm, hồ sơ các thành viên, hợp đồng làm việc, biên bản các cuộc họp và quá trình thực hiện đồ án (WBS, SOW, Timeline).

---

## 👥 Đội Ngũ Thành Viên

| Thành viên           | MSSV       | Vai trò       | Trách nhiệm chính                                                           |
| :------------------- | :--------- | :------------ | :-------------------------------------------------------------------------- |
| **Tạ Duy Phúc**      | `22521140` | Trưởng nhóm   | Điều phối dự án, quản lý phạm vi và tiến độ tuần.                           |
| **Huỳnh Bảo Hân**    | `24520446` | Thư ký        | Tổng hợp biên bản họp, quản lý tài liệu và hỗ trợ truyền thông nội bộ.      |
| **Phạm Nhật Khoa**   | `23520753` | Thành viên    | Xây dụng SOW, hỗ trợ quản lý tiến độ và rủi ro.                             |
| **Trịnh Hoài An**    | `24520079` | Thành viên    | Phát triển website giới thiệu nhóm và hỗ trợ xây dựng nội dung truyền thông.|
| **Nguyễn Nhật Tân**  | `24521580` | Thành viên    | Kiểm thử sản phẩm và thực hiện video, nội dung quảng bá.                    |

---

## 🚀 Tính Năng Chính Của Hệ Thống

Dự án không chỉ là một landing page thông thường mà đóng vai trò như một **dashboard quản trị nội bộ** thu nhỏ của nhóm:

- 📅 **Quản lý Tiến độ (Timeline):** Xây dựng cấu trúc phân rã công việc (WBS). Theo dõi tiến độ từng tuần qua các mốc thời gian (Khởi động dự án, báo cáo, điều chỉnh).
- 🤝 **Hợp đồng nhóm (Team Contract):** Hệ thống hóa các nguyên tắc, thưởng phạt nội bộ cùng quyền lợi cụ thể của mỗi cá nhân.
- 📝 **Biên Bản Họp (Meeting Minutes):** Lưu trữ và nhúng trực tiếp API/iframe các biên bản họp hàng tuần (Google Docs).
- 🔄 **Notion Integration:** Ứng dụng tự động hóa việc kéo dữ liệu backlog/task từ hệ thống điều phối Notion để hiển thị lên Website.
- 🌓 **Dark Mode & Responsive:** Tích hợp giao diện sáng/tối tự động nhờ `next-themes` và tối ưu tương thích mọi thiết bị.

---

## 📊 Các Giai Đoạn Dự Án

Dự án được thiết kế xoay quanh 4 giai đoạn chính yếu:

1. **Giai đoạn 1: Khởi tạo**
   Thực hiện thu thập yêu cầu, xác định chức năng/phi chức năng, phân tích tài chính và giao nhiệm vụ.
2. **Giai đoạn 2: Lập kế hoạch**
   Ước lượng chi phí, chuẩn bị phương án thực thi quản lý và hoàn thành mô hình thiết kế.
3. **Giai đoạn 3: Thực thi**
   Lựa chọn kiến trúc, thiết kế cơ sở dữ liệu, giao diện (UI/UX), Backend và quy trình kiểm thử.
4. **Giai đoạn 4: Đóng dự án**
   Hoàn thành bàn giao, thuyết trình nội dung và đánh giá hiệu suất khi đưa vào thực tế.

---

## 🛠 Công Nghệ Trang Bị

- **Framework:** Next.js 15+ (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4 + PostCSS
- **Icons:** Lucide React
- **Data Fetching:** SWR, Fetch API, Notion API
- **Language:** TypeScript
- **State/Theme:** `next-themes`

---

## 💻 Hướng Dẫn Cài Đặt & Khởi Chạy

### Yêu cầu hệ thống
- Node.js (phiên bản `>= 18.x`)
- npm hoặc yarn

### Các bước cài đặt

1. **Clone repository:**
   ```bash
   git clone https://github.com/user-name/green-team-web.git
   cd green-team-web
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Cấu hình kết nối Notion API (`.env.local`):**
   Tạo file `.env.local` ở thư mục gốc và thêm các Key:
   ```env
   NOTION_API_KEY=your_notion_api_key_here
   DATABASE_ID=your_notion_database_id_here
   ```

4. **Đồng bộ dữ liệu Task từ Workspace Notion:**
   Chạy script quản trị dữ liệu ở thư mục scripts để lấy các dữ liệu JSON về cục bộ:
   ```bash
   npm run fetch-tasks
   ```

5. **Chạy server phát hành nội bộ:**
   ```bash
   npm run dev
   ```
   *Truy cập [http://localhost:3000](http://localhost:3000) để tải toàn bộ giao diện và kiểm thử website.*
