import { SVGProps } from 'react';

export function NoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.841 21.4l9.659 2.587a2.75 2.75 0 003.368-1.945l3.236-12.074A2.75 2.75 0 0021.16 6.6L11.5 4.013a2.75 2.75 0 00-3.368 1.944L4.897 18.032A2.75 2.75 0 006.841 21.4zm4.604-13.461a.75.75 0 01.292.019l-.001.002L18.98 9.9a.749.749 0 01-.088 1.478.75.75 0 01-.299-.03l-7.245-1.94a.75.75 0 01.097-1.47zm-1.106 3.245a.75.75 0 01.557-.086l7.244 1.94a.75.75 0 01-.388 1.45l-7.245-1.942a.75.75 0 01-.168-1.362zm-.854 3.128a.75.75 0 00.181 1.374l4.83 1.294a.75.75 0 10.388-1.449l-4.83-1.294a.75.75 0 00-.569.075z"
        fill="currentColor"
      />
    </svg>
  );
} 