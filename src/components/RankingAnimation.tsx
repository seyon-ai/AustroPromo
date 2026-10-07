import type {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {COLORS, DISPLAY_FONT} from '../config/theme';
import {KineticTypography} from './KineticTypography';

const podium = [
  {label: '03', height: 270, color: 'rgba(180,190,196,0.38)'},
  {label: '02', height: 390, color: 'rgba(199,208,213,0.58)'},
  {label: '01', height: 540, color: COLORS.orange},
];

type RankingAnimationProps = {
  durationInFrames: number;
};

export const RankingAnimation: FC<RankingAnimationProps> = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const growth = interpolate(frame, [8, durationInFrames - 34], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{position: 'absolute', left: 86, top: 380, width: 580}}>
        <KineticTypography
          align="left"
          width="100%"
          fontSize={108}
          staggerFrames={26}
          lines={[
            {text: 'RANK', tone: 'silver', fontSize: 94},
            {text: 'REPUTATION', tone: 'white', fontSize: 85},
            {text: 'WIN', tone: 'white', fontSize: 100},
            {text: 'KING', tone: 'orange', fontSize: 126},
          ]}
        />
      </div>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 78,
          bottom: 420,
          width: 490,
          height: 700,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: 12,
          transform: 'perspective(900px) rotateY(-9deg)',
        }}
      >
        {podium.map((column, index) => {
          const height = column.height * growth;
          return (
            <div key={column.label} style={{position: 'relative', width: 142, height, transition: 'none'}}>
              <div
                style={{
                  position: 'absolute',
                  inset: '0 0 0 0',
                  border: `1px solid ${index === 2 ? 'rgba(242,107,44,0.72)' : 'rgba(196,206,211,0.28)'}`,
                  background: `linear-gradient(180deg, ${column.color}, rgba(10,13,15,0.2))`,
                  boxShadow: index === 2 ? '0 0 52px rgba(242,107,44,0.12)' : 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 18,
                  color: index === 2 ? COLORS.white : COLORS.silver,
                  fontFamily: DISPLAY_FONT,
                  fontSize: 38,
                  fontWeight: 700,
                  textAlign: 'center',
                  letterSpacing: 3,
                }}
              >
                {column.label}
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: 'absolute',
          right: 118,
          bottom: 1110,
          color: COLORS.orange,
          fontFamily: DISPLAY_FONT,
          fontSize: 25,
          fontWeight: 700,
          letterSpacing: 6,
          opacity: growth,
        }}
      >
        THE CLIMB
      </div>
    </div>
  );
};
