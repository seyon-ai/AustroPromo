import type {CSSProperties, FC} from 'react';

export type GlowProps = {
  color: string;
  size: number;
  x: string;
  y: string;
  opacity?: number;
};

export const Glow: FC<GlowProps> = ({color, size, x, y, opacity = 0.28}) => (
  <div
    aria-hidden="true"
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: size,
      height: size,
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      background: `radial-gradient(circle, ${color} 0%, transparent 69%)`,
      opacity,
      filter: `blur(${Math.round(size * 0.035)}px)`,
      pointerEvents: 'none',
    } satisfies CSSProperties}
  />
);
