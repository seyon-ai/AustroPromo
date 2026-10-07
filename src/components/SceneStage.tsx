import type {FC, ReactNode} from 'react';
import {AbsoluteFill} from 'remotion';
import {COLORS} from '../config/theme';
import {CinematicTransition} from './CinematicTransition';
import {SceneBackdrop} from './SceneBackdrop';

type SceneStageProps = {
  children: ReactNode;
  sceneNumber: number;
  seed: number;
  durationInFrames: number;
};

export const SceneStage: FC<SceneStageProps> = ({children, sceneNumber, seed, durationInFrames}) => (
  <AbsoluteFill style={{overflow: 'hidden', backgroundColor: COLORS.background}}>
    <SceneBackdrop seed={seed} />
    <AbsoluteFill style={{zIndex: 4}}>{children}</AbsoluteFill>
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        zIndex: 35,
        top: 74,
        left: 78,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        color: 'rgba(205, 214, 219, 0.52)',
        fontFamily: '"Barlow Condensed", Arial, sans-serif',
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: 4,
      }}
    >
      <span style={{display: 'block', width: 36, height: 2, backgroundColor: COLORS.orange}} />
      <span>{String(sceneNumber).padStart(2, '0')}</span>
    </div>
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        zIndex: 35,
        left: 78,
        right: 78,
        bottom: 70,
        height: 1,
        background: 'linear-gradient(90deg, rgba(205,214,219,0.28), rgba(205,214,219,0.03) 72%, rgba(242,107,44,0.36))',
      }}
    />
    <CinematicTransition durationInFrames={durationInFrames} />
  </AbsoluteFill>
);
