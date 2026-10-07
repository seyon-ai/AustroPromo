import type {FC} from 'react';
import {ArenaVisual} from '../components/ArenaVisual';
import {Glow} from '../components/Glow';
import {KineticTypography} from '../components/KineticTypography';
import {SceneStage} from '../components/SceneStage';

type ArenaSceneProps = {
  durationInFrames: number;
};

export const ArenaScene: FC<ArenaSceneProps> = ({durationInFrames}) => (
  <SceneStage sceneNumber={2} seed={19} durationInFrames={durationInFrames}>
    <ArenaVisual size={1040} opacity={0.48} />
    <Glow color="rgba(210,220,224,0.28)" size={520} x="50%" y="49%" opacity={0.1} />
    <div style={{position: 'absolute', top: '45%', left: 0, right: 0, transform: 'translateY(-50%)'}}>
      <KineticTypography
        fontSize={102}
        staggerFrames={14}
        lineHeight={0.98}
        lines={[
          {text: 'NOT JUST A FEED.', fontSize: 100, tone: 'silver', letterSpacing: 4},
          {text: 'AN ARENA.', fontSize: 155, tone: 'white', letterSpacing: 5},
        ]}
      />
    </div>
  </SceneStage>
);
