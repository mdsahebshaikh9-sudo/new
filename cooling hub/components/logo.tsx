export function Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const sizes = {
    small: { wrapper: "w-8 h-8", inner: "w-4 h-4", text: "text-lg" },
    default: { wrapper: "w-11 h-11", inner: "w-5 h-5", text: "text-xl" },
    large: { wrapper: "w-14 h-14", inner: "w-7 h-7", text: "text-2xl" },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Professional Logo Icon */}
      <div className={`${s.wrapper} relative`}>
        {/* Outer ring with gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent rounded-xl" />
        
        {/* Inner design */}
        <div className="absolute inset-[2px] bg-gradient-to-br from-primary to-primary/90 rounded-[10px] flex items-center justify-center overflow-hidden">
          {/* Snowflake/AC icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={`${s.inner} text-white relative z-10`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Center circle */}
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            {/* Cooling lines */}
            <path d="M12 2v4" />
            <path d="M12 18v4" />
            <path d="M4.93 4.93l2.83 2.83" />
            <path d="M16.24 16.24l2.83 2.83" />
            <path d="M2 12h4" />
            <path d="M18 12h4" />
            <path d="M4.93 19.07l2.83-2.83" />
            <path d="M16.24 7.76l2.83-2.83" />
            {/* Inner details */}
            <path d="M12 8v1.5" strokeWidth="1" />
            <path d="M12 14.5V16" strokeWidth="1" />
            <path d="M8 12h1.5" strokeWidth="1" />
            <path d="M14.5 12H16" strokeWidth="1" />
          </svg>
          
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-60" />
        </div>
        
        {/* Accent corner */}
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary rounded-full border-2 border-white shadow-sm" />
      </div>
      
      {/* Brand name */}
      <div className="flex flex-col leading-none">
        <span className={`${s.text} font-bold tracking-tight`}>
          <span className="text-white">Cooling</span>
          <span className="text-secondary ml-1">Hub</span>
        </span>
      </div>
    </div>
  );
}

export function LogoDark({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const sizes = {
    small: { wrapper: "w-8 h-8", inner: "w-4 h-4", text: "text-lg" },
    default: { wrapper: "w-11 h-11", inner: "w-5 h-5", text: "text-xl" },
    large: { wrapper: "w-14 h-14", inner: "w-7 h-7", text: "text-2xl" },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Professional Logo Icon */}
      <div className={`${s.wrapper} relative`}>
        {/* Outer ring with gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent rounded-xl shadow-lg" />
        
        {/* Inner design */}
        <div className="absolute inset-[2px] bg-gradient-to-br from-primary to-primary/90 rounded-[10px] flex items-center justify-center overflow-hidden">
          {/* Snowflake/AC icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={`${s.inner} text-white relative z-10`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Center circle */}
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            {/* Cooling lines */}
            <path d="M12 2v4" />
            <path d="M12 18v4" />
            <path d="M4.93 4.93l2.83 2.83" />
            <path d="M16.24 16.24l2.83 2.83" />
            <path d="M2 12h4" />
            <path d="M18 12h4" />
            <path d="M4.93 19.07l2.83-2.83" />
            <path d="M16.24 7.76l2.83-2.83" />
            {/* Inner details */}
            <path d="M12 8v1.5" strokeWidth="1" />
            <path d="M12 14.5V16" strokeWidth="1" />
            <path d="M8 12h1.5" strokeWidth="1" />
            <path d="M14.5 12H16" strokeWidth="1" />
          </svg>
          
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-60" />
        </div>
        
        {/* Accent corner */}
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary rounded-full border-2 border-background shadow-sm" />
      </div>
      
      {/* Brand name */}
      <div className="flex flex-col leading-none">
        <span className={`${s.text} font-bold tracking-tight`}>
          <span className="text-primary">Cooling</span>
          <span className="text-secondary ml-1">Hub</span>
        </span>
      </div>
    </div>
  );
}
