import type {FC} from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS} from '../config/theme';
import {seededUnit} from '../utils/deterministic';

type DecisionPulseProps = {
  seed?: number;
  count?: number;
};

/** Abstract synchronized vote/response energy, not a fabricated voting interface. */
export const DecisionPulse: FC<DecisionPulseProps> = ({seed = 31, count = 21}) => {
  const frame = useCurrentFrame();

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '50%',
        top: '70%',
        width: 770,
        height: 310,
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
        opacity: 0.85,
      }}
    >
      {Array.from({length: count}, (_, index) => {
        const seedHeight = 60 + seededUnit(seed, index) * 190;
        const phase = frame * 0.052 + index * 0.72;
        const motion = 0.34 + (0.5 + Math.sin(phase) * 0.5) * 0.66;
        const height = Math.max(18, seedHeight * motion);
        const highlight = index === Math.floor(count / 2) || index === Math.floor(count * 0.77);

        return (
          <div
            key={index}
            style={{
              width: 5,
              height,
              borderRadius: 4,
              background: highlight
                ? `linear-gradient(180deg, ${COLORS.orangeBright}, rgba(242,107,44,0.08))`
                : 'linear-gradient(180deg, rgba(222,229,232,0.55), rgba(122,135,143,0.06))',
              boxShadow: highlight ? '0 0 22px rgba(242,107,44,0.35)' : 'none',
              opacity: highlight ? 0.88 : 0.52,
            }}
          />
        );
      })}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(211,220,224,0.18), rgba(242,107,44,0.35), transparent)',
        }}
      />
    </div>
  );
};
