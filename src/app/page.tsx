import GreenTeamClient from "./GreenTeamClient";
import BacklogPage from "./components/backlog/BacklogPage";

export default function Page() {
  return <GreenTeamClient backlogNode={<BacklogPage />} />;
}
