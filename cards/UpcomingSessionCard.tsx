import { memo, useState, useCallback } from "react";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import styles from "@/styles/dashboard/upcomingsessionCard.module.css";
import profilePic from "@/public/assets/images/profile-pic.jpeg";
import Button from "@/components/common/Button";

const sessionData = Object.freeze({
  time: "11:00 AM",
  city: "Bandra",
  doctor: "Dr. Kiran Rathi",
  duration: "01:00 HR",
  mode: "Online",
  prev: "Tuesday, March 5, 2023",
});

const UpcomingSessionCard = () => {
  const [markComplete, setMarkComplete] = useState(false);

  const handleClick = useCallback(() => {
    setMarkComplete(true);
    toast.success("Session marked as completed");
  }, []);

  return (
    <div className="container mt-2 px-4">
      <h6 className="fw-600 fs-14">Upcoming Session</h6>
      <div className={`border bg-white p-3 rounded-4 shadow-sm ${styles.card}`}>
        <div className="d-flex align-items-center gap-3">
          <div className="text-start" style={{ minWidth: "68px" }}>
            <p className={`fs-5 text-dark lh-sm mb-0 ${styles.session_time}`}>
              {sessionData.time}
            </p>
            <p className={`small text-muted mb-0 ${styles.city}`}>
              {sessionData.city}
            </p>
          </div>
          <div className="border border-secondary" style={{ height: "40px" }} />
          <div className="d-flex align-items-center gap-2 flex-grow-1">
            <Image
              src={profilePic}
              alt="Dr. Kiran Rathi profile"
              width={40}
              height={40}
              className="rounded-circle"
              loading="lazy"
            />
          </div>
          <div className="flex-grow-1 ps-2">
            <p className={`fw-semibold text-dark mb-0 ${styles.doctor_name}`}>
              {sessionData.doctor}
            </p>
            <IoCallOutline
              className="rounded-circle p-1 bg-primary text-white"
              size={20}
              aria-label="Call doctor"
            />
          </div>
        </div>
        <div className="mt-3 text-secondary">
          <p className=" mb-0 fs-12 light-grey-color">
            Session Duration{" "}
            <span className="fw-medium fs-12">{sessionData.duration}</span>
          </p>
          <p className="fs-12 mb-0 light-grey-color">
            Session Mode: <span className="fw-medium">{sessionData.mode}</span>
          </p>
        </div>
        <div className="row align=items-center g-2">
          <div className="col-6">
            <Button
              text="Mark as Completed"
              classes={`btn btn-sm w-100 p-2 text-white ${
                markComplete ? "disabled opacity-50" : ""
              }`}
              onClick={handleClick}
              disabled={markComplete}
            />
          </div>
          <div className="col-6 rounded text-secondary bg-light">
            <p className="mb-0 fs-12 light-grey-color">Previous Session</p>
            <p className="fs-12 light-grey-color mb-0">{sessionData.prev}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UpcomingSessionCard);
