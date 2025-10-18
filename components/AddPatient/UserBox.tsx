import styles from "@/styles/addPatient/addPatient.module.css";
import Image from "next/image";

const UserBox = ({ avatar, name, phone }: any) => (
  <div className={`${styles.sectionBox} ps-3`}>
    <Image
      className={styles.avatar}
      src={avatar}
      alt={name}
      width={38}
      height={38}
    />
    <div className={styles.info}>
      <div className="fs-14 fw-600 mb-0">{name}</div>
      <div className={`fs-11 ${styles.infoPhone}`}>{phone}</div>
    </div>
  </div>
);

export default UserBox;
