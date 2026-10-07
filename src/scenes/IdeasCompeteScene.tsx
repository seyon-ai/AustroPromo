import type {FC} from 'react';
import {ArenaVisual} from '../components/ArenaVisual';
import {Glow} from '../components/Glow';
import {KineticTypography} from '../components/KineticTypography';
import {SceneStage} from '../components/SceneStage';
import {COLORS} from '../config/theme';

type IdeasCompeteSceneProps = {
  durationInFrames: number;
};

export const IdeasCompeteScene: FC<IdeasCompeteSceneProps> = ({durationInFrames}) => (
  <SceneStage sceneNumber={1} seed={11} durationInFrames={durationInFrames}>
    <ArenaVisual size={910} opacity={0.22} />
    <Glow color="rgba(242,107,44,0.34)" size={540} x="50%" y="57%" opacity={0.2} />
    <div
      style={{
        position: 'absolute',
        top: '48%',
        left: 0,
        right: 0,
        transform: 'translateY(-50%)',
      }}
    >
      <div
        style={{
          marginBottom: 46,
          color: COLORS.silver,
          fontFamily: '"Barlow Condensed", Arial, sans-serif',
          fontSize: 23,
          fontWeight: 600,
          letterSpacing: 9,
          textAlign: 'center',
          opacity: 0.8,
        }}
      >
        A SINGLE QUESTION
      </div>
      <KineticTypography
        fontSize={123}
        lineHeight={0.91}
        staggerFrames={9}
        lines={[
          {text: 'WHAT IF YOUR IDEAS', fontSize: 116, tone: 'white'},
          {text: 'HAD TO', fontSize: 119, tone: 'silver'},
          {text: 'COMPETE?', fontSize: 158, tone: 'orange', letterSpacing: 5},
        ]}
      />
    </div>
  </SceneStage>
);
