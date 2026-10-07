import type {FC} from 'react';
import {ArenaVisual} from '../components/ArenaVisual';
import {Glow} from '../components/Glow';
import {KineticTypography} from '../components/KineticTypography';
import {SceneStage} from '../components/SceneStage';

type CompetitionSceneProps = {
  durationInFrames: number;
};

export const CompetitionScene: FC<CompetitionSceneProps> = ({durationInFrames}) => (
  <SceneStage sceneNumber={4} seed={37} durationInFrames={durationInFrames}>
    <ArenaVisual size={920} opacity={0.24} />
    <Glow color="rgba(242,107,44,0.34)" size={520} x="75%" y="64%" opacity={0.13} />
    <div style={{position: 'absolute', top: '48%', left: 0, right: 0, transform: 'translateY(-50%)'}}>
      <KineticTypography
        fontSize={126}
        staggerFrames={20}
        lineHeight={1.04}
        lines={[
          {text: 'YOUR IDEA.', fontSize: 132, tone: 'white', letterSpacing: 5},
          {text: 'YOUR CATEGORY.', fontSize: 120, tone: 'silver', letterSpacing: 4},
          {text: 'YOUR COMPETITION.', fontSize: 106, tone: 'orange', letterSpacing: 3},
        ]}
      />
    </div>
  </SceneStage>
);
