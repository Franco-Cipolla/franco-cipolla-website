import React from "react";
import HeroSection from "../components/landing/HeroSection";
import ProblemSolutionSection from "../components/landing/ProblemSolutionSection";
import USPSection from "../components/landing/USPSection";
import FinalCTASection from "../components/landing/FinalCTASection";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans overflow-x-hidden">
      <HeroSection />
      <ProblemSolutionSection />
      <USPSection />
      <FinalCTASection />
    </div>
  );
};

export default LandingPage;
