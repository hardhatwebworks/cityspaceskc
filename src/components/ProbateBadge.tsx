import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const ProbateBadge = () => {
  return (
    <Link
      to="/inherited-properties"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Probate & Inherited Property Specialists"
    >
      <div className="relative flex items-center justify-center w-36 h-36 md:w-40 md:h-40">
        {/* Star background */}
        <Star
          className="absolute inset-0 w-full h-full text-gold drop-shadow-lg transition-transform group-hover:scale-110"
          fill="currentColor"
          strokeWidth={1}
          stroke="currentColor"
        />
        {/* Text overlay */}
        <span className="relative z-10 text-primary font-bold text-[9px] md:text-[11px] leading-tight text-center w-16 md:w-20">
          Probate / Inherited Property Specialists
        </span>
      </div>
    </Link>
  );
};

export default ProbateBadge;
