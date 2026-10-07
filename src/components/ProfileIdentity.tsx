import type {FC} from 'react';
import {useCurrentFrame} from 'remotion';
import {COLORS} from '../config/theme';

export const ProfileIdentity: FC = () => {
  const frame = useCurrentFrame();
  const rotation = frame * 0.08;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '50%',
        top: '52%',
        width: 470,
        height: 470,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          border: '1px solid rgba(194,204,209,0.2)',
          borderRadius: '50%',
          boxShadow: '0 0 70px rgba(184,192,197,0.045), inset 0 0 80px rgba(184,192,197,0.035)',
          transform: `rotate(${rotation}deg)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 28,
          border: '1px solid rgba(242,107,44,0.28)',
          borderRadius: '50%',
          borderLeftColor: 'transparent',
          transform: `rotate(${-rotation * 1.8}deg)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 98,
          width: 88,
          height: 88,
          transform: 'translateX(-50%)',
          borderRadius: '50%',
          background: 'linear-gradient(145deg, #D6DDE0, #66727A 72%, #3B4449)',
          boxShadow: '0 0 36px rgba(208,218,222,0.12)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 75,
          width: 240,
          height: 195,
          transform: 'translateX(-50%)',
          borderRadius: '52% 52% 20% 20% / 68% 68% 18% 18%',
          background: 'linear-gradient(145deg, #BAC3C8, #536068 76%, #343D42)',
          clipPath: 'polygon(29% 0, 71% 0, 100% 100%, 0 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 1,
          height: 440,
          transform: 'translate(-50%, -50%)',
          background: `linear-gradient(180deg, transparent, ${COLORS.orange}, transparent)`,
          opacity: 0.4,
        }}
      />
    </div>
  );
};
