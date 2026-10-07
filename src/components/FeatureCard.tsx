import type {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLORS, DISPLAY_FONT} from '../config/theme';

type FeatureCardProps = {
  index: string;
  title: string;
  delay?: number;
  compact?: boolean;
  emphasis?: boolean;
  width?: number | string;
};

/** Editorial feature strip: a reusable typographic treatment, not a UI screenshot. */
export const FeatureCard: FC<FeatureCardProps> = ({
  index,
  title,
  delay = 0,
  compact = false,
  emphasis = false,
  width = 860,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 18], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const x = interpolate(progress, [0, 1], [-40, 0]);

  return (
    <div
      style={{
        width,
        minHeight: compact ? 104 : 174,
        padding: compact ? '14px 24px' : '25px 34px',
        display: 'flex',
        alignItems: 'center',
        gap: compact ? 22 : 34,
        borderBottom: `1px solid ${emphasis ? COLORS.orangeLine : COLORS.silverLine}`,
        borderTop: compact ? 'none' : '1px solid rgba(205, 214, 219, 0.08)',
        background: compact ? 'transparent' : 'linear-gradient(90deg, rgba(195,205,210,0.045), rgba(8,11,13,0.16) 74%, transparent)',
        opacity: progress,
        transform: `translate3d(${x}px, 0, 0)`,
        fontFamily: DISPLAY_FONT,
      }}
    >
      <span
        style={{
          width: compact ? 48 : 64,
          flexShrink: 0,
          color: emphasis ? COLORS.orange : COLORS.muted,
          fontSize: compact ? 24 : 29,
          fontWeight: 700,
          letterSpacing: 3,
        }}
      >
        {index}
      </span>
      <span
        style={{
          color: emphasis ? COLORS.orange : COLORS.white,
          fontSize: compact ? 40 : title.length > 13 ? 72 : 84,
          fontWeight: 800,
          letterSpacing: compact ? 1.5 : 3,
          lineHeight: 0.95,
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          textShadow: emphasis ? '0 0 28px rgba(242,107,44,0.16)' : 'none',
        }}
      >
        {title}
      </span>
      {!compact ? (
        <div
          style={{
            marginLeft: 'auto',
            width: 72,
            height: 2,
            background: `linear-gradient(90deg, ${emphasis ? COLORS.orange : COLORS.silver}, transparent)`,
          }}
        />
      ) : null}
    </div>
  );
};
