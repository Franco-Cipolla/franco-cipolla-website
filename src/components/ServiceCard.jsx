import React from "react";

const ServiceCard = ({ Icon, title, subtitle, benefits, highlight }) => {
  return (
    <div
      className={`relative rounded-3xl p-8 shadow-lg border transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${
        highlight
          ? "bg-gradient-to-br from-[#001D3D] to-[#003566] text-white border-transparent"
          : "bg-white text-[#001D3D] border-[#001D3D]/10"
      }`}
    >
      {/* Icon in Box (außer bei Highlight → Icon direkt) */}
      <div className="flex items-center gap-4 mb-6">
        {Icon && (
          <div
            className={`flex items-center justify-center w-14 h-14 rounded-xl shadow-md ${
              highlight
                ? "bg-white/20 text-white"
                : "bg-[#00A6FB]/10 text-[#001D3D]"
            }`}
          >
            <Icon size={28} />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p
            className={`text-sm ${
              highlight ? "text-white/80" : "text-[#000814]/70"
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Benefits Liste */}
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <span
              className={`flex-none w-2 mt-2 aspect-square rounded-full  ${
                highlight ? "bg-[#00A6FB]" : "bg-[#003566]"
              }`}
            />
            <span
              className={`text-sm leading-relaxed ${
                highlight ? "text-white/90" : "text-[#000814]/80"
              }`}
            >
              {benefit}
            </span>
          </li>


        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
