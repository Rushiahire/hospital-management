import styles from "@/styles/dashboard/scheduleButton.module.css";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";

const ScheduleNowButton = () => {
  const router = useRouter();

  const handleScheduleBtn = useCallback(() => {
    router.push("/doctors");
  }, [router]);

  return (
    <div className={`container ${styles.scheduleButtonWrapper} mt-5`}>
      <button className={styles.scheduleButton} onClick={handleScheduleBtn}>
        Schedule Now
      </button>
    </div>
  );
};

export default memo(ScheduleNowButton);
