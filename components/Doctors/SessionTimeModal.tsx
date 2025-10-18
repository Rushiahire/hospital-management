import React, { useState, useCallback, useMemo } from "react";
import modalStyles from "@/styles/doctors/sessionTimeModal.module.css";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { sessionSlots } from "@/Datasets/sessionSlotsDataset";
import { toast } from "react-toastify";

const SessionTimeModal = ({
  show,
  availableDoctor,
  onClose,
  onConfirm,
}: any) => {
  const [expandedArr, setExpandedArr] = useState(() =>
    sessionSlots.map(() => true)
  );
  const [selectedSlot, setSelectedSlot] = useState<{
    section: string;
    index: number;
    value: string;
  } | null>(null);

  const handleToggle = useCallback((idx: number) => {
    setExpandedArr((arr) => arr.map((open, i) => (i === idx ? !open : open)));
  }, []);

  const handleSlotSelect = useCallback(
    (section: string, sIdx: number, slot: string) => {
      setSelectedSlot({ section, index: sIdx, value: slot });
    },
    []
  );

  const handleCancel = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleConfirm = useCallback(() => {
    if (selectedSlot) onConfirm(selectedSlot);
    toast.success(
      `Slot Selected ${selectedSlot?.section} at ${selectedSlot?.value} for ${availableDoctor?.name} `
    );
  }, [selectedSlot, onConfirm]);

  // sessionSlots is static; memoize just for habit/consistency
  const sessionSlotsData = useMemo(() => sessionSlots, []);

  const slotSections = useMemo(
    () =>
      sessionSlotsData.map((section: any, idx: number) => (
        <div className={modalStyles.accordionSection} key={section.section}>
          <button
            className={modalStyles.accordionTrigger}
            onClick={() => handleToggle(idx)}
            type="button"
          >
            <span className="fs-16 fw-600">{section.section}</span>
            <span className={modalStyles.chevron}>
              {expandedArr[idx] ? (
                <MdExpandLess size={30} />
              ) : (
                <MdExpandMore size={30} />
              )}
            </span>
          </button>
          {expandedArr[idx] && (
            <div className={modalStyles.slotGrid}>
              {section.slots.map((slot: any, sIdx: number) => (
                <button
                  key={slot}
                  className={`${modalStyles.slotBtn} ${
                    selectedSlot &&
                    selectedSlot.section === section.section &&
                    selectedSlot.index === sIdx
                      ? modalStyles.selectedSlot
                      : ""
                  }`}
                  disabled={section?.disabled?.includes(sIdx)}
                  onClick={() => handleSlotSelect(section.section, sIdx, slot)}
                  type="button"
                >
                  {slot}
                </button>
              ))}
            </div>
          )}
        </div>
      )),
    [
      expandedArr,
      selectedSlot,
      handleToggle,
      handleSlotSelect,
      sessionSlotsData,
      modalStyles,
    ]
  );

  if (!show) return null;

  return (
    <div className={modalStyles.backdrop}>
      <div className={modalStyles.modal}>
        <div className={modalStyles.header}>
          <div className={`fs-16 text-center fw-600 ${modalStyles.title}`}>
            Select Session Time
          </div>
          <button
            className={modalStyles.closeBtn}
            onClick={handleCancel}
            type="button"
          >
            <RxCross2 size={25} className="text-dark" />
          </button>
        </div>
        <div>{slotSections}</div>
        <div className={modalStyles.footer}>
          <button
            className={modalStyles.cancelBtn}
            onClick={handleCancel}
            type="button"
          >
            Cancel
          </button>
          <button
            className={modalStyles.confirmBtn}
            onClick={handleConfirm}
            disabled={!selectedSlot}
            type="button"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SessionTimeModal);
