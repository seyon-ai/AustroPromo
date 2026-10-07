import type {FC} from 'react';
import {Glow} from '../components/Glow';
import {RankingAnimation} from '../components/RankingAnimation';
import {SceneStage} from '../components/SceneStage';

type RankingSceneProps = {
  durationInFrames: number;
};

export const RankingScene: FC<RankingSceneProps> = ({durationInFrames}) => (
  <SceneStage sceneNumber={6} seed={59} durationInFrames={durationInFrames}>
    <Glow color="rgba(242,107,44,0.3)" size={550} x="82%" y="60%" opacity={0.17} />
    <RankingAnimation durationInFrames={durationInFrames} />
  </SceneStage>
);
