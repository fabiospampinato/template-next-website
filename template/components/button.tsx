
/* IMPORT */

import * as React from 'react';
import Link from 'next/link';

/* BUTTON */

const Button = ({ className, href, children }: { className?: string, href: string, children: React.ReactNode }) => (
  <Link href={href}>
    <a className={`button ${className || ''}`}>{children}</a>
  </Link>
);

/* EXPORT */

export default Button;
