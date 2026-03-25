import React from 'react';

type LinkProps = {
  href?: unknown;
  children?: React.ReactNode;
  [key: string]: unknown;
};

export default function NextLink({ href, children, ...rest }: LinkProps) {
  const resolvedHref =
    typeof href === 'string'
      ? href
      : href && typeof href === 'object' && 'pathname' in (href as Record<string, unknown>)
        ? (href as Record<string, unknown>).pathname
        : '';

  return (
    <a href={resolvedHref as string} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  );
}

