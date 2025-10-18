import { CiSearch, CiFilter } from "react-icons/ci";
import styles from "@/styles/doctors/doctors.module.css";
import { IoAppsOutline } from "react-icons/io5";
import { memo } from "react";

const DoctorSearchBar = () => (
  <div
    className={`container d-flex align-items-center gap-2 px-3  pb-3 ${styles.searchRow}`}
  >
    <input
      className={`form-control ${styles.searchBar}`}
      placeholder="Search psychologists..."
      style={{ background: "#fff", borderRadius: "10px" }}
    />
    <button className={`btn ${styles.searchBtn}`} aria-label="search">
      <CiSearch size={21} />
    </button>
    <button className={`btn ${styles.searchBtn}`} aria-label="apps">
      <IoAppsOutline size={21} />
    </button>
    <button className={`btn ${styles.filterBtn}`} aria-label="filter">
      <CiFilter size={21} />
    </button>
  </div>
);

export default memo(DoctorSearchBar);
