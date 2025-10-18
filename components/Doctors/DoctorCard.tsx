import { doctors } from "@/Datasets/doctorsDataset";
import styles from "@/styles/doctors/doctors.module.css";
import { memo, useCallback, useState, useMemo } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import SessionTimeModal from "./SessionTimeModal";
import Image from "next/image";

// If your doctors dataset is static for the page, you may use useMemo
const DoctorCard = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const [showModal, setShowModal] = useState(false);
  const [availableDoctor, setAvailableDoctor] = useState({});

  const doctorsData = useMemo(() => doctors, []);

  const handleToggle = useCallback((idx: number) => {
    setExpandedIdx((prev) => (prev === idx ? null : idx));
  }, []);

  const handleBookNowBtn = useCallback((data: any) => {
    setAvailableDoctor(data);
    setShowModal(true);
  }, []);

  const handleModalClose = useCallback(() => setShowModal(false), []);

  return (
    <>
      <div className={`container ${styles.wrapper}`}>
        {doctorsData.map((d, idx) => {
          const expanded = expandedIdx === idx;
          return (
            <div
              key={idx}
              className={expanded ? styles.expandedCard : styles.card}
            >
              <div className={styles.doctorRow}>
                <Image className={styles.avatar} src={d.avatar} alt={d.name} />
                <div className={`${styles.namePhone} ps-3`}>
                  <div className={`${styles.name} fs-14 fw-600 mb-0`}>
                    {d.name}
                  </div>
                  <div className={`${styles.phone} fs-12 fw-500`}>
                    {d.phone}
                  </div>
                  <div className={`${styles.expertise} fs-12 fw-500`}>
                    {d.expertise}
                  </div>
                </div>
                <button
                  className={styles.dropBtn}
                  onClick={() => handleToggle(idx)}
                  aria-label="Expand doctor details"
                >
                  {expanded ? (
                    <span className="material-icons">
                      <MdExpandLess size={30} />
                    </span>
                  ) : (
                    <span className="material-icons">
                      <MdExpandMore size={30} />
                    </span>
                  )}
                </button>
              </div>
              {expanded && (
                <>
                  <hr />
                  <div className={styles.infoGrid}>
                    <div className={styles.infoLabel}>Expertise</div>
                    <div
                      className={styles.infoLabel}
                      style={{ textAlign: "right" }}
                    >
                      Gender
                    </div>
                    <div className={styles.infoValue}>{d.expertise}</div>
                    <div
                      className={styles.infoValue}
                      style={{ textAlign: "right" }}
                    >
                      {d.gender}
                    </div>
                    <div className={`pt-3 ${styles.infoLabel}`}>
                      Session mode
                    </div>
                    <div
                      className={`pt-3 ${styles.infoLabel}`}
                      style={{ textAlign: "right" }}
                    >
                      Session Fee
                    </div>
                    <div className={styles.infoValue}>{d.mode}</div>
                    <div
                      className={styles.infoValue}
                      style={{ textAlign: "right" }}
                    >
                      {d.fee}
                    </div>
                  </div>
                  <hr />
                  <button
                    className={styles.bookBtn}
                    onClick={() => handleBookNowBtn(d)}
                  >
                    Book Now
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
      <SessionTimeModal
        show={showModal}
        availableDoctor={availableDoctor}
        onClose={handleModalClose}
        onConfirm={handleModalClose}
      />
    </>
  );
};

export default memo(DoctorCard);
