import type {CSSProperties, FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLORS, DISPLAY_FONT} from '../config/theme';

type Tone = 'white' | 'silver' | 'muted' | 'orange';

export type KineticLine = {
  text: string;
  tone?: Tone;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  delay?: number;
};

type KineticTypographyProps = {
  lines: KineticLine[];
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  lineHeight?: number;
  align?: 'left' | 'center' | 'right';
  staggerFrames?: number;
  delay?: number;
  width?: number | string;
  style?: CSSProperties;
};

const toneColor: Record<Tone, string> = {
  white: COLORS.white,
  silver: COLORS.silver,
  muted: COLORS.muted,
  orange: COLORS.orange,
};

export const KineticTypography: FC<KineticTypographyProps> = ({
  lines,
  fontSize = 112,
  fontWeight = 800,
  letterSpacing = 2,
  lineHeight = 0.94,
  align = 'center',
  staggerFrames = 9,
  delay = 0,
  width = '92%',
  style,
}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width,
        marginInline: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
        textAlign: align,
        fontFamily: DISPLAY_FONT,
        ...style,
      }}
    >
      {lines.map((line, index) => {
        const start = line.delay ?? delay + index * staggerFrames;
        const progress = interpolate(frame, [start, start + 16], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        const y = interpolate(progress, [0, 1], [42, 0]);
        const blur = interpolate(progress, [0, 1], [7, 0]);
        const color = toneColor[line.tone ?? 'white'];

        return (
          <div
            key={`${line.text}-${index}`}
            style={{
              maxWidth: '100%',
              color,
              fontFamily: DISPLAY_FONT,
              fontSize: line.fontSize ?? fontSize,
              fontWeight: line.fontWeight ?? fontWeight,
              letterSpacing: line.letterSpacing ?? letterSpacing,
              lineHeight,
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              opacity: progress,
              filter: `blur(${blur}px)`,
              transform: `translate3d(0, ${y}px, 0) scale(${0.98 + 0.02 * progress})`,
              textShadow: line.tone === 'orange' ? `0 0 34px rgba(242, 107, 44, ${0.12 * progress})` : 'none',
            }}
          >
            {line.text}
          </div>
        );
      })}
    </div>
  );
};
