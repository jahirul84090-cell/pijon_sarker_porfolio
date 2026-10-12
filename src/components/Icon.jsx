const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

const icons = {
  target: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </g>
  ),
  users: <path {...stroke} d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19M10 10.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM20 19v-1.5a3.5 3.5 0 0 0-2.5-3.35M15.5 4.15a3.25 3.25 0 0 1 0 6.2" />,
  building: <path {...stroke} d="M4 20V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v15M14 9h5a1 1 0 0 1 1 1v10M3 20h18M7.5 8h3M7.5 12h3M7.5 16h3" />,
  table: (
    <g {...stroke}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M3.5 14.5h17M9.5 9.5v10" />
    </g>
  ),
  megaphone: <path {...stroke} d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1ZM17 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11" />,
  layout: (
    <g {...stroke}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9h17M10 9v10.5" />
    </g>
  ),
  code: <path {...stroke} d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  check: <path {...stroke} strokeWidth="2.2" d="m5 12.5 4.5 4.5L19 7.5" />,
  arrow: <path {...stroke} strokeWidth="2" d="M5 12h14M13 6l6 6-6 6" />,
  sun: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
    </g>
  ),
  moon: <path {...stroke} d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />,
  mail: (
    <g {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </g>
  ),
  chat: <path {...stroke} d="M20 12a8 8 0 0 1-11.6 7.15L4 20l.85-4.4A8 8 0 1 1 20 12Z" />,
  clock: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </g>
  ),
  shield: (
    <g {...stroke}>
      <path d="M12 3 5 6v5.5c0 4.3 2.9 8.2 7 9.5 4.1-1.3 7-5.2 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </g>
  ),
  refresh: <path {...stroke} d="M20 11a8 8 0 0 0-14.9-3M4 13a8 8 0 0 0 14.9 3M5 4v4h4M19 20v-4h-4" />,
  star: <path fill="currentColor" d="m12 3.5 2.6 5.3 5.9.9-4.25 4.1 1 5.85L12 16.9l-5.25 2.75 1-5.85L3.5 9.7l5.9-.9L12 3.5Z" />,
  linkedin: (
    <path
      fill="currentColor"
      d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.4c0-3.1-1.65-4.9-4.3-4.9-1.6 0-2.62.88-3.02 1.6V8.5H9.75c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.03 1.88 2.53V20h3.42v-6.6Z"
    />
  ),
  facebook: (
    <path
      fill="currentColor"
      d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.55V4.63A20.8 20.8 0 0 0 14.25 4.5c-2.24 0-3.77 1.37-3.77 3.88v2.18H7.95v2.94h2.53V21h3.02Z"
    />
  ),
  whatsapp: (
    <path
      fill="currentColor"
      d="M12.04 3a8.9 8.9 0 0 0-7.6 13.5L3 21l4.63-1.4A8.9 8.9 0 1 0 12.04 3Zm0 16.2a7.3 7.3 0 0 1-3.72-1.02l-.27-.16-2.75.83.85-2.68-.18-.28a7.3 7.3 0 1 1 6.07 3.31Zm4-5.46c-.22-.11-1.3-.64-1.5-.72-.2-.07-.35-.11-.5.11-.14.22-.57.72-.7.87-.13.15-.26.17-.48.06a6 6 0 0 1-1.76-1.09 6.6 6.6 0 0 1-1.22-1.52c-.13-.22 0-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.05-.11-.5-1.2-.68-1.64-.18-.43-.36-.37-.5-.38h-.42a.8.8 0 0 0-.58.27 2.44 2.44 0 0 0-.76 1.82 4.24 4.24 0 0 0 .89 2.25 9.7 9.7 0 0 0 3.72 3.29c.52.22.93.36 1.25.46.52.17 1 .14 1.38.09.42-.06 1.3-.53 1.48-1.05.18-.51.18-.95.13-1.05-.06-.09-.2-.15-.42-.26Z"
    />
  ),
  // Fiverr "fi" mark (taken from the official wordmark) on a round badge
  fiverr: (
    <g>
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        fill="var(--icon-contrast, #fff)"
        transform="translate(12 12.2) scale(1.55) translate(-2.81 -11.93)"
        d="M.908 15.44H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"
      />
    </g>
  ),
};

const FIVERR_WORDMARK =
  "M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z";

/** Official Fiverr wordmark ("fiverr."), sized by font-size via height: 1em. */
export function FiverrLogo({ className = "" }) {
  return (
    <svg className={`fiverr-logo ${className}`.trim()} viewBox="0 8.3 24.1 7.45" role="img" aria-label="Fiverr">
      <path fill="currentColor" d={FIVERR_WORDMARK} />
    </svg>
  );
}

export default function Icon({ name, className = "", size }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  );
}
