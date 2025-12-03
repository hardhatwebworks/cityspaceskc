const KCSkyline = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1200 300"
      className={className}
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Kauffman Center - Left side */}
      <ellipse cx="200" cy="280" rx="120" ry="50" fill="hsl(28, 90%, 55%)" />
      <ellipse cx="200" cy="280" rx="100" ry="40" fill="hsl(28, 90%, 55%)" />
      
      {/* Sky Stations / Bartle Hall */}
      <g fill="hsl(45, 90%, 55%)">
        <rect x="50" y="200" width="8" height="100" />
        <rect x="40" y="190" width="28" height="12" />
        <rect x="36" y="180" width="36" height="12" />
        <line x1="54" y1="180" x2="54" y2="160" stroke="hsl(45, 90%, 55%)" strokeWidth="3" />
        <circle cx="54" cy="155" r="5" />
        
        <rect x="90" y="210" width="8" height="90" />
        <rect x="80" y="200" width="28" height="12" />
        <rect x="76" y="190" width="36" height="12" />
        <line x1="94" y1="190" x2="94" y2="170" stroke="hsl(45, 90%, 55%)" strokeWidth="3" />
        <circle cx="94" cy="165" r="5" />
        
        <rect x="130" y="220" width="8" height="80" />
        <rect x="120" y="210" width="28" height="12" />
        <rect x="116" y="200" width="36" height="12" />
        <line x1="134" y1="200" x2="134" y2="180" stroke="hsl(45, 90%, 55%)" strokeWidth="3" />
        <circle cx="134" cy="175" r="5" />
      </g>
      
      {/* Convention Center / Low buildings - Navy */}
      <rect x="380" y="250" width="180" height="50" fill="hsl(215, 50%, 18%)" />
      <rect x="400" y="230" width="40" height="70" fill="hsl(215, 50%, 18%)" />
      <rect x="500" y="220" width="50" height="80" fill="hsl(215, 50%, 18%)" />
      
      {/* Power & Light building - Deep Red */}
      <rect x="600" y="120" width="60" height="180" fill="hsl(10, 65%, 40%)" />
      <polygon points="600,120 630,80 660,120" fill="hsl(10, 65%, 40%)" />
      
      {/* One Kansas City Place - Tall Gold building */}
      <rect x="680" y="60" width="80" height="240" fill="hsl(45, 90%, 55%)" />
      <rect x="700" y="50" width="40" height="15" fill="hsl(45, 90%, 55%)" />
      <line x1="720" y1="50" x2="720" y2="30" stroke="hsl(45, 90%, 55%)" strokeWidth="4" />
      
      {/* Town Pavilion - Orange building */}
      <rect x="780" y="90" width="70" height="210" fill="hsl(28, 90%, 55%)" />
      
      {/* Commerce Tower */}
      <rect x="870" y="100" width="65" height="200" fill="hsl(35, 85%, 50%)" />
      
      {/* 1201 Walnut */}
      <rect x="950" y="130" width="55" height="170" fill="hsl(20, 75%, 50%)" />
      
      {/* Additional smaller buildings */}
      <rect x="1020" y="180" width="45" height="120" fill="hsl(45, 90%, 55%)" />
      <rect x="1080" y="200" width="50" height="100" fill="hsl(28, 90%, 55%)" />
      
      {/* Ground line */}
      <rect x="0" y="298" width="1200" height="2" fill="hsl(215, 50%, 18%)" />
    </svg>
  );
};

export default KCSkyline;
