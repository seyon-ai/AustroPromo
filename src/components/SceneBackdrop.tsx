import type {FC} from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {COLORS} from '../config/theme';
import {ParticleField} from './ParticleField';

type SceneBackdropProps = {
  seed: number;
};

export const SceneBackdrop: FC<SceneBackdropProps> = ({seed}) => {
  const frame = useCurrentFrame();
  const sweep = (frame * 0.14 + seed * 13) % 150;

  return (
    <AbsoluteFill
      aria-hidden="true"
      style={{
        overflow: 'hidden',
        backgroundColor: COLORS.background,
        backgroundImage:
          'radial-gradient(ellipse at 50% 45%, rgba(33, 39, 42, 0.5) 0%, rgba(5, 7, 8, 0) 58%), linear-gradient(180deg, #07090A 0%, #050708 58%, #080A0B 100%)',
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.32,
          backgroundImage:
            'linear-gradient(rgba(190, 202, 207, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(190, 202, 207, 0.045) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(ellipse at center, black 8%, transparent 78%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '120%',
          height: 2,
          left: '-10%',
          top: `${18 + sweep * 0.28}%`,
          transform: 'rotate(-16deg)',
          background: `linear-gradient(90deg, transparent, ${COLORS.orangeLine}, rgba(220, 227, 230, 0.12), transparent)`,
          opacity: 0.42,
          filter: 'blur(1px)',
        }}
      />
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.48) 0%, transparent 19%, transparent 81%, rgba(0,0,0,0.48) 100%), linear-gradient(0deg, rgba(0,0,0,0.42), transparent 24%, transparent 76%, rgba(0,0,0,0.34))',
        }}
      />
      <ParticleField seed={seed} />
    </AbsoluteFill>
  );
};
