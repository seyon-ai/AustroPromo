import type {FC} from 'react';
import {FeatureCard} from '../components/FeatureCard';
import {Glow} from '../components/Glow';
import {SceneStage} from '../components/SceneStage';

type PillarsSceneProps = {
  durationInFrames: number;
};

const pillars = ['POST', 'COMPETE', 'EARN REPUTATION', 'RISE'];

export const PillarsScene: FC<PillarsSceneProps> = ({durationInFrames}) => (
  <SceneStage sceneNumber={3} seed={29} durationInFrames={durationInFrames}>
    <Glow color="rgba(242,107,44,0.24)" size={640} x="89%" y="51%" opacity={0.15} />
    <div style={{position: 'absolute', top: 488, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {pillars.map((title, index) => (
        <FeatureCard
          key={title}
          index={`0${index + 1}`}
          title={title}
          delay={index * 30}
          emphasis={index === pillars.length - 1}
        />
      ))}
    </div>
  </SceneStage>
);
