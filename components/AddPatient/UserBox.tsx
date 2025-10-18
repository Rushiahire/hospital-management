import styles from "@/styles/addPatient/addPatient.module.css";

const UserBox = ({ avatar, name, phone }: any) => (
  <div className={`${styles.sectionBox} ps-3`}>
    <img className={styles.avatar} src={avatar} alt={name} />
    <div className={styles.info}>
      <div className="fs-14 fw-600 mb-0">{name}</div>
      <div className={`fs-11 ${styles.infoPhone}`}>{phone}</div>
    </div>
  </div>
);

export default UserBox;
