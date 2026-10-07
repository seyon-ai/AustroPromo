import type {FC} from 'react';
import {ArenaVisual} from '../components/ArenaVisual';
import {Glow} from '../components/Glow';
import {SceneStage} from '../components/SceneStage';
import {TitleCard} from '../components/TitleCard';

type BrandSceneProps = {
  durationInFrames: number;
};

/** Wordmark-like title is plain type, not a substitute logo asset. */
export const BrandScene: FC<BrandSceneProps> = ({durationInFrames}) => (
  <SceneStage sceneNumber={8} seed={73} durationInFrames={durationInFrames}>
    <ArenaVisual size={930} opacity={0.24} />
    <Glow color="rgba(242,107,44,0.38)" size={640} x="50%" y="49%" opacity={0.18} />
    <TitleCard
      top="47%"
      gap={42}
      fontSize={164}
      lines={[{text: 'AUSTROCLASH', fontSize: 164, tone: 'white', letterSpacing: 8}]}
      subline="WHERE IDEAS ENTER THE ARENA."
    />
  </SceneStage>
);
