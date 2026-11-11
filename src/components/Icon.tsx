import type { SVGProps } from 'react';

export type IconName =
  | 'arrow'
  | 'arrow-left'
  | 'arrow-up-right'
  | 'clock'
  | 'users'
  | 'chef'
  | 'trigo'
  | 'leite'
  | 'proteina'
  | 'folha'
  | 'estrela'
  | 'check'
  | 'print'
  | 'search'
  | 'close'
  | 'sparkle'
  | 'heart'
  | 'leaf-branch'
  | 'book';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const paths: Record<IconName, JSX.Element> = {
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  'arrow-left': (
    <>
      <path d="M20 12H5" />
      <path d="m11 18-6-6 6-6" />
    </>
  ),
  'arrow-up-right': (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M3.5 19.5c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" />
      <path d="M16 5.2a3.4 3.4 0 0 1 0 6.6" />
      <path d="M17.5 14.7c1.9.6 3.2 2.4 3.2 4.8" />
    </>
  ),
  chef: (
    <>
      <path d="M6 12.5a4 4 0 1 1 1.4-7.7 4.2 4.2 0 0 1 7.9-.6 4 4 0 1 1 2.7 8.3v4.3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4.3Z" />
      <path d="M9.5 21h5" />
    </>
  ),
  trigo: (
    <>
      <path d="M12 21.5V7.5" />
      <path d="M12 12.5c-3.1 0-5.1-1.9-5.1-5 3.1 0 5.1 1.9 5.1 5Z" />
      <path d="M12 12.5c3.1 0 5.1-1.9 5.1-5-3.1 0-5.1 1.9-5.1 5Z" />
      <path d="M12 17.5c-3.1 0-5.1-1.9-5.1-5 3.1 0 5.1 1.9 5.1 5Z" />
      <path d="M12 17.5c3.1 0 5.1-1.9 5.1-5-3.1 0-5.1 1.9-5.1 5Z" />
      <path d="M12 8c-1.5 0-2.5-1-2.5-2.5C11 5.5 12 6.5 12 8Z" />
      <path d="M12 8c1.5 0 2.5-1 2.5-2.5C13 5.5 12 6.5 12 8Z" />
    </>
  ),
  leite: (
    <>
      <path d="M9.2 3h5.6v2.3l2.1 3.6c.3.4.4.9.4 1.4V20a1 1 0 0 1-1 1H7.7a1 1 0 0 1-1-1V10.3c0-.5.1-1 .4-1.4l2.1-3.6V3Z" />
      <path d="M8.4 12.2h7.2" />
      <path d="M12 15.2c.9 1 1.4 1.7 1.4 2.3a1.4 1.4 0 1 1-2.8 0c0-.6.5-1.3 1.4-2.3Z" opacity=".7" />
    </>
  ),
  proteina: (
    <>
      <path d="M6.5 8.5v7M3.5 10v4M17.5 8.5v7M20.5 10v4" />
      <path d="M6.5 12h11" />
    </>
  ),
  folha: (
    <>
      <path d="M20 4c0 9-4.8 14-11 14-3 0-5-1.6-5-4 0-6 7-10 16-10Z" />
      <path d="M4 21c1-6 5-10 12-12" />
    </>
  ),
  estrela: (
    <path d="m12 3.6 2.6 5.3 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.7l5.9-.8L12 3.6Z" />
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  print: (
    <>
      <path d="M7 8V3.5h10V8" />
      <path d="M7 17H5.5A1.5 1.5 0 0 1 4 15.5v-5A1.5 1.5 0 0 1 5.5 9h13a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 18.5 17H17" />
      <path d="M7 14h10v6.5H7z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5c.8 4.3 2.2 5.7 6.5 6.5-4.3.8-5.7 2.2-6.5 6.5-.8-4.3-2.2-5.7-6.5-6.5 4.3-.8 5.7-2.2 6.5-6.5Z" />
      <path d="M18.5 15.5c.4 1.9 1 2.5 2.9 2.9-1.9.4-2.5 1-2.9 2.9-.4-1.9-1-2.5-2.9-2.9 1.9-.4 2.5-1 2.9-2.9Z" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.4-7.5-9.3A4.2 4.2 0 0 1 12 8a4.2 4.2 0 0 1 7.5 2.7C19.5 15.6 12 20 12 20Z" />
  ),
  'leaf-branch': (
    <>
      <path d="M12 21V6" />
      <path d="M12 12c-4 0-6-2-6-6 4 0 6 2 6 6Z" />
      <path d="M12 17c4 0 6-2 6-6-4 0-6 2-6 6Z" />
      <path d="M12 8c-2.5 0-4-1.4-4-4 2.5 0 4 1.4 4 4Z" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4V5.5Z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6V5.5Z" />
    </>
  ),
};

export function Icon({ name, size = 20, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
