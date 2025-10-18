import PastSessionCard from "@/cards/PastSessionCard";
import { memo, useMemo } from "react";

const sessions = Object.freeze([
  {
    time: "12:00 AM",
    doctor: "Dr. Ramesh Naik",
    prev: "Tuesday, March 25, 2023",
  },
  {
    time: "10:30 AM",
    doctor: "Dr. Suresh Sawant",
    prev: "Tuesday, March 15, 2023",
  },
  {
    time: "09:30 AM",
    doctor: "Dr. Neeta Singh",
    prev: "Tuesday, Feb 25, 2023",
  },
]);

const PastSession = () => {
  const sessionCards = useMemo(
    () =>
      sessions.map((data, idx) => <PastSessionCard data={data} key={idx} />),
    []
  );
  return (
    <div
      className="container px-4 rounded-4 pt-2"
      style={{ paddingBottom: "90px" }}
    >
      <div className="fw-600 fs-14 mb-2">Past Sessions</div>
      <div>{sessionCards}</div>
    </div>
  );
};

export default memo(PastSession);
