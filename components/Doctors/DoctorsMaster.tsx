import styles from "@/styles/doctors/doctors.module.css";
import dynamic from "next/dynamic";
import DoctorSearchBar from "./DoctorSearchBar";
import { IoIosArrowBack } from "react-icons/io";
import { memo, useCallback } from "react";
import { useRouter } from "next/navigation";

const DoctorCard = dynamic(() => import("./DoctorCard"), { ssr: false });

const DoctorsMaster = () => {
  const router = useRouter();
  const handleBackBtn = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <div className={`px-3 pt-4 pb-2 fs-14 fw-600 text-dark ${styles.header}`}>
        <IoIosArrowBack
          size={25}
          onClick={handleBackBtn}
          className="cursor-pointer"
        />{" "}
        <span className="ps-1">Available Doctors</span>
      </div>
      <div
        style={{
          background: "linear-gradient(180deg, #ede4fa 0%, #f9d1ca 100%)",
        }}
      >
        <DoctorSearchBar />
        <DoctorCard />
      </div>
    </div>
  );
};

export default memo(DoctorsMaster);
