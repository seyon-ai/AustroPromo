import type {FC} from 'react';
import {ArenaVisual} from '../components/ArenaVisual';
import {DecisionPulse} from '../components/DecisionPulse';
import {Glow} from '../components/Glow';
import {KineticTypography} from '../components/KineticTypography';
import {SceneStage} from '../components/SceneStage';

type VoteSceneProps = {
  durationInFrames: number;
};

export const VoteScene: FC<VoteSceneProps> = ({durationInFrames}) => (
  <SceneStage sceneNumber={5} seed={43} durationInFrames={durationInFrames}>
    <ArenaVisual size={1040} opacity={0.2} />
    <Glow color="rgba(242,107,44,0.3)" size={600} x="50%" y="68%" opacity={0.14} />
    <KineticTypography
      style={{position: 'absolute', top: '37%', left: '50%', transform: 'translateX(-50%)'}}
      fontSize={104}
      staggerFrames={18}
      lineHeight={0.97}
      lines={[
        {text: 'LET THE PEOPLE DECIDE.', fontSize: 104, tone: 'white', letterSpacing: 2},
        {text: 'EVERY VOTE COUNTS.', fontSize: 102, tone: 'orange', letterSpacing: 4},
      ]}
    />
    <DecisionPulse seed={53} />
  </SceneStage>
);
