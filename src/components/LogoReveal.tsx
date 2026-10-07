import type {FC} from 'react';
import {Img, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export type LogoRevealProps = {
  /** Path to an approved, official logo asset (for example, staticFile('logos/austroclash.svg')). */
  src: string;
  width?: number;
  delay?: number;
};

/** Reveals only a supplied approved logo; no text or invented mark is substituted. */
export const LogoReveal: FC<LogoRevealProps> = ({src, width = 520, delay = 0}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const localFrame = Math.max(0, frame - delay);
  const scale = spring({fps, frame: localFrame, config: {damping: 16, stiffness: 85, mass: 0.8}});
  const opacity = interpolate(localFrame, [0, 14], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <Img
      src={src}
      style={{
        width,
        height: 'auto',
        opacity,
        transform: `scale(${0.92 + scale * 0.08})`,
        filter: 'drop-shadow(0 0 26px rgba(242, 107, 44, 0.22))',
      }}
    />
  );
};
