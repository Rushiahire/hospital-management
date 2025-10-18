import styles from "@/styles/addPatient/addPatient.module.css";

const SessionTypeSelect = ({ value, onChange }: any) => (
  <select
    className={`fs-12 ${styles.selectInput}`}
    value={value}
    onChange={onChange}
  >
    <option>Counselling ( 1 hour )</option>
    <option>Therapy ( 1 hour )</option>
    {/* <option>Consultation ( 30 min )</option> */}
  </select>
);

export default SessionTypeSelect;
