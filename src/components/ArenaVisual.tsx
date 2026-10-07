import type {CSSProperties, FC} from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS} from '../config/theme';

type ArenaVisualProps = {
  size?: number;
  opacity?: number;
};

/** Abstract concentric arena geometry; contains no product UI or fabricated logo. */
export const ArenaVisual: FC<ArenaVisualProps> = ({size = 760, opacity = 0.52}) => {
  const frame = useCurrentFrame();
  const rotation = frame * 0.11;
  const pulse = 0.94 + Math.sin(frame * 0.045) * 0.025;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: size,
        height: size,
        transform: `translate(-50%, -50%) scale(${pulse})`,
        opacity,
        pointerEvents: 'none',
      }}
    >
      {[1, 0.79, 0.58, 0.36].map((ratio, index) => (
        <div
          key={ratio}
          style={{
            position: 'absolute',
            left: `${(1 - ratio) * 50}%`,
            top: `${(1 - ratio) * 50}%`,
            width: `${ratio * 100}%`,
            height: `${ratio * 100}%`,
            borderRadius: '50%',
            border: `1px solid ${index === 0 ? 'rgba(193, 203, 208, 0.22)' : index === 2 ? 'rgba(242, 107, 44, 0.27)' : 'rgba(193, 203, 208, 0.13)'}`,
            boxShadow: index === 2 ? `0 0 36px rgba(242, 107, 44, 0.08), inset 0 0 28px rgba(242,107,44,0.035)` : 'none',
            transform: `rotate(${rotation * (index % 2 === 0 ? 1 : -1)}deg)`,
          } satisfies CSSProperties}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          height: '100%',
          width: 1,
          transform: `rotate(${rotation}deg)`,
          background: 'linear-gradient(180deg, transparent, rgba(202,212,216,0.2), transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          width: '100%',
          height: 1,
          transform: `rotate(${-rotation * 0.55}deg)`,
          background: 'linear-gradient(90deg, transparent, rgba(202,212,216,0.16), transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 12,
          height: 12,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: COLORS.orange,
          boxShadow: `0 0 24px ${COLORS.orange}`,
        }}
      />
    </div>
  );
};
