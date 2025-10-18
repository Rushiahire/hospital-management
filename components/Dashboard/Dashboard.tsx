import { memo } from "react";
import dynamic from "next/dynamic";

// Lazy load large or infrequent subcomponents
const Profile = dynamic(() => import("./Profile"), { ssr: false });
const UpcomingSessionCard = dynamic(
  () => import("@/cards/UpcomingSessionCard"),
  { ssr: false }
);
const PastSession = dynamic(() => import("./PastSession"), { ssr: false });
const ScheduleNowButton = dynamic(() => import("./ScheduleNowButton"), {
  ssr: false,
});

const Dashboard = () => (
  <div
    className="dashboard-bg min-vh-100"
    style={{ background: "linear-gradient(160deg,#C7BCF6 0%,#F8C7C3 100%)" }}
  >
    <Profile />
    <UpcomingSessionCard />
    <PastSession />
    <ScheduleNowButton />
  </div>
);

export default memo(Dashboard);
