import React from "react";

const ChecklistSichernCTA = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r cursor-pointer max-w-3xl shadow-2xs px-10 from-[#0066FF] to-[#428EFF] text-white py-6 rounded-[3px] font-bold tracking-wide text-[16px]"
    >
      Kostenlose Checkliste sichern
    </button>
  );
};

export default ChecklistSichernCTA;
