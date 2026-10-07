import type {FC} from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS} from '../config/theme';
import {seededUnit} from '../utils/deterministic';

type ParticleFieldProps = {
  seed: number;
  count?: number;
  opacity?: number;
};

/** Frame-driven dust motes with stable positions on every render. */
export const ParticleField: FC<ParticleFieldProps> = ({seed, count = 34, opacity = 0.6}) => {
  const frame = useCurrentFrame();

  return (
    <div aria-hidden="true" style={{position: 'absolute', inset: 0, overflow: 'hidden', opacity}}>
      {Array.from({length: count}, (_, index) => {
        const x = seededUnit(seed, index * 4 + 1) * 100;
        const y = seededUnit(seed, index * 4 + 2) * 100;
        const speed = 0.012 + seededUnit(seed, index * 4 + 3) * 0.035;
        const drift = (frame * speed + y) % 108 - 4;
        const sway = Math.sin(frame * 0.018 + index * 2.4) * 0.8;
        const size = 1 + Math.round(seededUnit(seed, index * 4 + 4) * 2);
        const pulse = 0.25 + 0.55 * (0.5 + Math.sin(frame * 0.035 + index) * 0.5);
        const isWarm = index % 7 === 0;

        return (
          <span
            key={index}
            style={{
              position: 'absolute',
              left: `${x + sway}%`,
              top: `${drift}%`,
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: isWarm ? COLORS.orangeBright : COLORS.silver,
              opacity: pulse,
              boxShadow: isWarm ? `0 0 8px ${COLORS.orange}` : '0 0 7px rgba(210, 220, 226, 0.5)',
            }}
          />
        );
      })}
    </div>
  );
};
