import styles from "@/styles/addPatient/addPatient.module.css";

const DateTimeInput = ({
  label,
  type,
  value,
  min,
  onChange,
  placeholder = "",
  className = "",
  ...props
}: any) => (
  <div>
    {label && <label className={`mb-1 ${styles.sectionLabel}`}>{label}</label>}
    <input
      type={type}
      className={`${styles.inputBox} form-control ${className}`}
      value={value}
      min={min}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  </div>
);

export default DateTimeInput;
