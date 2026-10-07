import type {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLORS} from '../config/theme';

type CinematicTransitionProps = {
  durationInFrames: number;
};

/** A restrained frame-driven light sweep and fade for scene entrances/exits. */
export const CinematicTransition: FC<CinematicTransitionProps> = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const opening = interpolate(frame, [0, 15], [0.78, 0], {extrapolateRight: 'clamp'});
  const closing = interpolate(
    frame,
    [Math.max(0, durationInFrames - 13), durationInFrames - 1],
    [0, 0.9],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );
  const fade = Math.max(opening, closing);
  const sweepProgress = interpolate(frame, [0, 22], [-80, 120], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const sweepOpacity = interpolate(frame, [0, 3, 9, 20, 22], [0, 0.45, 0.32, 0.08, 0], {extrapolateRight: 'clamp'});

  return (
    <div aria-hidden="true" style={{position: 'absolute', inset: 0, zIndex: 50, pointerEvents: 'none'}}>
      <div style={{position: 'absolute', inset: 0, backgroundColor: '#000', opacity: fade}} />
      <div
        style={{
          position: 'absolute',
          top: `${sweepProgress}%`,
          left: '-25%',
          width: '150%',
          height: 4,
          transform: 'rotate(-17deg)',
          background: `linear-gradient(90deg, transparent, ${COLORS.orange}, ${COLORS.white}, transparent)`,
          filter: 'blur(2px)',
          opacity: sweepOpacity,
          boxShadow: `0 0 28px ${COLORS.orange}`,
        }}
      />
    </div>
  );
};
