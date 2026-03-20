import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const ProbateBadge = () => {
  return (
    <Link
      to="/inherited-properties"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Probate & Inherited Property Specialists"
    >
      <div className="relative flex items-center justify-center w-28 h-28 md:w-32 md:h-32">
        {/* Star background */}
        <Star
          className="absolute inset-0 w-full h-full text-gold drop-shadow-lg transition-transform group-hover:scale-110"
          fill="hsl(var(--gold))"
          strokeWidth={1}
          stroke="hsl(var(--gold))"
        />
        {/* Text overlay */}
        <span className="relative z-10 text-primary font-bold text-[10px] md:text-xs leading-tight text-center px-4">
          Probate / Inherited Property Specialists
        </span>
      </div>
    </Link>
  );
};

export default ProbateBadge;
