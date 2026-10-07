import type {FC} from 'react';
import {FeatureCard} from '../components/FeatureCard';
import {Glow} from '../components/Glow';
import {ProfileIdentity} from '../components/ProfileIdentity';
import {SceneStage} from '../components/SceneStage';

type CommunitySceneProps = {
  durationInFrames: number;
};

const capabilities = [
  {title: 'PROFILES', x: 72, y: 562},
  {title: 'ALLIES', x: 588, y: 562},
  {title: 'SQUADS', x: 72, y: 1360},
  {title: 'DMS', x: 588, y: 1360},
  {title: 'KINGBOARD', x: 72, y: 1500},
  {title: 'AUSTRO VAR', x: 588, y: 1500},
];

export const CommunityScene: FC<CommunitySceneProps> = ({durationInFrames}) => (
  <SceneStage sceneNumber={7} seed={67} durationInFrames={durationInFrames}>
    <Glow color="rgba(242,107,44,0.25)" size={540} x="50%" y="53%" opacity={0.15} />
    <ProfileIdentity />
    {capabilities.map((capability, index) => (
      <div key={capability.title} style={{position: 'absolute', left: capability.x, top: capability.y}}>
        <FeatureCard
          compact
          width={420}
          index={`0${index + 1}`}
          title={capability.title}
          delay={index * 9}
          emphasis={index === 4 || index === 5}
        />
      </div>
    ))}
  </SceneStage>
);
