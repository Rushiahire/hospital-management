import styles from "@/styles/addPatient/addPatient.module.css";
import { memo, useState, useCallback, useMemo } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import Button from "../common/Button";
import SessionModeRadio from "./SessionModeRadio";
import SessionTypeSelect from "./SessionTypeSelect";
import UserBox from "./UserBox";
import { useRouter } from "next/navigation";
import DateTimeInput from "../common/DateTimeInput";

// Memoize patient and practitioner objects; these don't need to change
const PATIENT = Object.freeze({
  name: "Shubham Naik",
  phone: "+91 9876543210",
  avatar: "/assets/images/img.png",
});
const PRACTITIONER = Object.freeze({
  name: "Saria Dilon",
  phone: "+91 9876543210",
  avatar: "/assets/images/img.png",
});

const INITIAL_FORM = Object.freeze({
  type: "Counselling ( 1 hour )",
  mode: "In-Person",
  date: "",
  time: "",
  details: "",
  onlineLink: "",
});

const AddPatientMaster = () => {
  const router = useRouter();
  // Memoize today string so it doesn't recalculate
  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);

  const [form, setForm] = useState<any>(INITIAL_FORM);

  // All event handlers useCallback for referential stability
  const handleFormChange = useCallback((e: any) => {
    const { name, value } = e.target;
    setForm((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleModeChange = useCallback((mode: any) => {
    setForm((prev: any) => ({
      ...prev,
      mode,
    }));
  }, []);

  const handleFormSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      const data = {
        patient: PATIENT,
        practitioner: PRACTITIONER,
        sessionType: form.type,
        sessionMode: form.mode,
        sessionDate: form.date,
        sessionTime: form.time,
        details: form.details,
        onlineLink: form.mode === "Online" ? form.onlineLink : "",
      };
      toast.success("Session Booked and Data Submitted!");
    },
    [form]
  );

  const handleBackBtn = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={`${styles.scheduleContainer} rounded-3`}>
      <div className={`px-3 pt-4 pb-2 fs-14 fw-600 text-dark ${styles.header}`}>
        <IoIosArrowBack
          size={25}
          onClick={handleBackBtn}
          className="cursor-pointer"
        />{" "}
        <span className="ps-1">Schedule Session</span>
      </div>
      <form style={{ padding: "0 16px 18px 16px" }} onSubmit={handleFormSubmit}>
        <div className={styles.sectionLabel}>Patient</div>
        <UserBox {...PATIENT} />

        <div className={`${styles.sectionLabel} pt-2`}>Assign Practitioner</div>
        <UserBox {...PRACTITIONER} />

        <div className={styles.sectionLabel}>Session Type</div>
        <SessionTypeSelect
          value={form.type}
          onChange={(e: any) =>
            handleFormChange({
              target: { name: "type", value: e.target.value },
            })
          }
        />

        <SessionModeRadio
          value={form.mode}
          onChange={handleModeChange}
          styles={styles}
        />

        <div className="row pt-2">
          <div className="col-6">
            <label
              htmlFor="sessionDate"
              className={`mb-2 fs-14`}
              style={{ color: "#807f8b" }}
            >
              Session Date
            </label>
            <DateTimeInput
              type="date"
              name="date"
              value={form.date}
              min={todayStr}
              onChange={handleFormChange}
              className="w-100"
            />
          </div>
          <div className="col-6">
            <label
              htmlFor="sessionTime"
              className={`mb-2 fs-14`}
              style={{ color: "#807f8b" }}
            >
              Session Time Slot
            </label>
            <DateTimeInput
              type="time"
              name="time"
              value={form.time}
              onChange={handleFormChange}
              className="w-100"
            />
          </div>
        </div>

        {form.mode === "Online" && (
          <>
            <div className={`${styles.sectionLabel} mt-2`}>
              Online Session Link
            </div>
            <input
              type="text"
              name="onlineLink"
              className={`form-control ${styles.session_input}`}
              placeholder="Add Online Session Link or WhatsApp Number"
              value={form.onlineLink}
              onChange={handleFormChange}
            />
          </>
        )}

        <div
          className={styles.sectionLabel}
          style={{ marginTop: 17, marginBottom: 8 }}
        >
          Session Details (Optional)
        </div>
        <textarea
          className={styles.textArea}
          name="details"
          rows={form.mode === "Online" ? 3 : 5}
          placeholder="Enter session details here"
          value={form.details}
          onChange={handleFormChange}
        />

        <div
          style={{ display: "flex", gap: "18px", marginTop: "12px" }}
          className={`${styles.scheduleButtonWrapper} px-4`}
        >
          <Button
            text="Cancel"
            classes={styles.btnCancelCustom}
            type="button"
            onClick={() => {}}
          />
          <Button
            text="Confirm"
            classes={styles.btnConfirmCustom}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default memo(AddPatientMaster);
