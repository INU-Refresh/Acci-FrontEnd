import React from 'react';

type NextImageProps = {
  src?: unknown;
  alt?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  onError?: () => void;
  [key: string]: unknown;
};

export default function NextImage({ src, alt, fill, width, height, onError, ...rest }: NextImageProps) {
  const resolvedSrc =
    typeof src === 'string'
      ? src
      : src && typeof src === 'object'
        ? // Next.js static imports usually look like: { src: '/path', height, width, blurDataURL, ... }
          (src as { src?: unknown }).src ?? ''
        : '';

  // Note: `fill/width/height` are ignored here; we only need a stable DOM node for tests.
  const style =
    fill
      ? ({
          position: 'relative',
        } as React.CSSProperties)
      : undefined;

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={resolvedSrc}
      alt={alt || ''}
      onError={onError}
      style={style}
      width={typeof width === 'number' ? width : undefined}
      height={typeof height === 'number' ? height : undefined}
      {...rest}
    />
  );
}

