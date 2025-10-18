import React, { memo, useMemo } from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";
import profilePic from "@/public/assets/images/profile-pic.jpeg";
import styles from "@/styles/dashboard/profile.module.css";

const Profile = () => {
  // Memoize user data if in real code you'd load from state, store, or API
  const userData = useMemo(
    () => ({
      name: "Manjunath Naik",
      greeting: "Good morning,",
    }),
    []
  );

  return (
    <div className={`${styles.main_container} container rounded-2 pt-4 px-4`}>
      <div className={`d-flex align-items-center justify-content-between`}>
        <div>
          <h6 className={`mb-0 text-white ${styles.label}`}>
            {userData.greeting}
          </h6>
          <h5 className={`fw-bold mb-3 text-white pt-2 ${styles.name}`}>
            {userData.name}
          </h5>
        </div>
        <Image
          src={profilePic}
          width={32}
          height={32}
          className="rounded-circle"
          alt="profile pic"
        />
      </div>
      <SearchBar />
    </div>
  );
};

export default memo(Profile);
