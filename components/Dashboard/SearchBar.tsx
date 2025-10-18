import { CiFilter, CiSearch } from "react-icons/ci";
import styles from "@/styles/dashboard/searchbar.module.css";
import { memo } from "react";

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.inputGroupCustom}>
        <input
          type="text"
          className={`${styles.inputField} py-2`}
          placeholder="Search Psychologists..."
        />
        <button className={styles.searchBtn} aria-label="Search">
          <CiSearch size={22} color="#868686" />
        </button>
      </div>
      <button className={styles.filterBtn} aria-label="filter">
        <CiFilter size={22} color="#868686" />
      </button>
    </div>
  );
};

export default memo(SearchBar);
