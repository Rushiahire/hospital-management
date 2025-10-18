import React from "react";
import styles from "@/styles/dashboard/pastSessionCard.module.css";

const PastSessionCard = ({ data }: any) => {
  return (
    <div
      className={`d-flex flex-row align-items-start justify-content-start rounded-3 mb-2 py-2 px-3 ${styles.pastSessionCard}`}
    >
      <div className={`fs-13 fw-600 ${styles.timeCol}`}>{data.time}</div>
      <div className={styles.doctorCol}>
        <div className={styles.doctorName}>{data.doctor}</div>
        <div className={`${styles.prevSession} fs-12`}>
          Previous Session:
          <br />
          {data.prev}
        </div>
      </div>
    </div>
  );
};

export default PastSessionCard;
