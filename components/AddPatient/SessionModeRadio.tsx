import React, { memo } from "react";

const SessionModeRadio = memo(({ value, onChange, styles }: any) => (
  <>
    <div className={`mb-2 ${styles.sectionLabel}`} style={{ marginBottom: 4 }}>
      Session Mode
    </div>
    <div className={styles.radioGroup}>
      <label
        className={`${styles.radioLabel} ${
          value === "In-Person" ? styles.boldHighlight : ""
        }`}
      >
        <input
          className={styles.radioInput}
          type="radio"
          name="mode"
          value="In-Person"
          checked={value === "In-Person"}
          onChange={() => onChange("In-Person")}
        />
        In-Person
      </label>
      <label
        className={`${styles.radioLabel} ${
          value === "Online" ? styles.boldHighlight : ""
        }`}
      >
        <input
          className={styles.radioInput}
          type="radio"
          name="mode"
          value="Online"
          checked={value === "Online"}
          onChange={() => onChange("Online")}
        />
        Online
      </label>
    </div>
  </>
));

export default SessionModeRadio;
