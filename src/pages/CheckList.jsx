import React, { useState } from "react";
import Hero from "../components/checklist/Hero";
import ProblemSolution from "../components/checklist/ProblemSolution";
import Value from "../components/checklist/Value";
import FAQ from "../components/checklist/FAQ";
import PopupForm from "../components/checklist/PopupForm";

const CheckList = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <Hero onCTAClick={openPopup} />
      <ProblemSolution onCTAClick={openPopup} />
      <Value onCTAClick={openPopup} />
      <FAQ onCTAClick={openPopup} />
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default CheckList;
