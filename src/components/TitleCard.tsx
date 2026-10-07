import type {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLORS, DISPLAY_FONT} from '../config/theme';
import {KineticTypography, type KineticLine} from './KineticTypography';

type TitleCardProps = {
  lines: KineticLine[];
  eyebrow?: string;
  subline?: string;
  top?: string;
  fontSize?: number;
  gap?: number;
};

export const TitleCard: FC<TitleCardProps> = ({
  lines,
  eyebrow,
  subline,
  top = '44%',
  fontSize = 112,
  gap = 30,
}) => {
  const frame = useCurrentFrame();
  const sublineOpacity = interpolate(frame, [52, 70], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top,
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap,
      }}
    >
      {eyebrow ? (
        <div
          style={{
            color: COLORS.silver,
            fontFamily: DISPLAY_FONT,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 7,
            opacity: 0.78,
            textTransform: 'uppercase',
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <KineticTypography lines={lines} fontSize={fontSize} />
      {subline ? (
        <div
          style={{
            color: COLORS.silver,
            fontFamily: DISPLAY_FONT,
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: 4,
            opacity: sublineOpacity,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          {subline}
        </div>
      ) : null}
    </div>
  );
};
