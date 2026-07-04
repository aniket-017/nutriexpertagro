export default function SoilScene() {
  return (
    <div className="relative flex h-[320px] items-end justify-center lg:h-[460px] lg:order-none order-first">
      <svg className="h-full w-full" viewBox="0 0 420 460" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="230" width="380" height="70" rx="6" fill="#2C7A8C" />
        <rect x="20" y="300" width="380" height="70" fill="#1C5D6E" />
        <rect x="20" y="370" width="380" height="70" rx="6" fill="#0F4C5C" />

        <circle className="granule g1" cx="90" cy="255" r="6" fill="#BFE6F5" />
        <circle className="granule g2" cx="150" cy="325" r="5" fill="#79B62C" />
        <circle className="granule g3" cx="230" cy="260" r="7" fill="#79B62C" />
        <circle className="granule g4" cx="300" cy="330" r="5" fill="#BFE6F5" />
        <circle className="granule g5" cx="340" cy="255" r="6" fill="#4FAFDC" />
        <circle className="granule g3" cx="70" cy="390" r="5" fill="#4FAFDC" />
        <circle className="granule g2" cx="360" cy="395" r="6" fill="#BFE6F5" />

        <g transform="translate(210,230)">
          <g className="sprout-grow">
            <rect x="-3" y="-90" width="6" height="90" rx="3" fill="#8FC93F" />
          </g>
          <g className="leaf-sway" transform="translate(0,-72)">
            <path
              d="M0 0 C -40 -14, -55 -46, -34 -66 C -8 -50, -4 -22, 0 0Z"
              fill="#79B62C"
            />
          </g>
          <g className="leaf-sway" transform="translate(0,-52)">
            <path
              d="M0 0 C 38 -10, 50 -40, 30 -58 C 6 -44, 2 -18, 0 0Z"
              fill="#4FAFDC"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}
