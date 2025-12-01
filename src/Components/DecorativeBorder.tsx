export function DecorativeBorder() {
  return (
    <svg
      viewBox="0 0 280 340"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 w-full h-full w-100% h-100%"
    >
      <defs>
        <filter id="brush-border">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85 0.22"
            numOctaves={4}
            seed={6}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={6}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <rect
        x={6}
        y={6}
        width={268}
        height={328}
        style={{
          fill: "none",
          stroke: "#1F3D3B",
          strokeWidth: 4,
          strokeLinecap: "round",
          filter: "url(#brush-border)",
        }}
      />
      <rect
        x={6}
        y={6}
        width={268}
        height={328}
        style={{
          fill: "none",
          stroke: "#1F3D3B",
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
    </svg>
  );
}