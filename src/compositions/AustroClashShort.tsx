import type {FC} from 'react';
import {Sequence} from 'remotion';
import {TRAILER_TIMING} from '../config/video';
import {ArenaScene} from '../scenes/ArenaScene';
import {BrandScene} from '../scenes/BrandScene';
import {CallToActionScene} from '../scenes/CallToActionScene';
import {CommunityScene} from '../scenes/CommunityScene';
import {CompetitionScene} from '../scenes/CompetitionScene';
import {IdeasCompeteScene} from '../scenes/IdeasCompeteScene';
import {PillarsScene} from '../scenes/PillarsScene';
import {RankingScene} from '../scenes/RankingScene';
import {VoteScene} from '../scenes/VoteScene';

export const AustroClashShort: FC = () => (
  <>
    <Sequence from={TRAILER_TIMING.question.from} durationInFrames={TRAILER_TIMING.question.durationInFrames}>
      <IdeasCompeteScene durationInFrames={TRAILER_TIMING.question.durationInFrames} />
    </Sequence>
    <Sequence from={TRAILER_TIMING.arena.from} durationInFrames={TRAILER_TIMING.arena.durationInFrames}>
      <ArenaScene durationInFrames={TRAILER_TIMING.arena.durationInFrames} />
    </Sequence>
    <Sequence from={TRAILER_TIMING.pillars.from} durationInFrames={TRAILER_TIMING.pillars.durationInFrames}>
      <PillarsScene durationInFrames={TRAILER_TIMING.pillars.durationInFrames} />
    </Sequence>
    <Sequence from={TRAILER_TIMING.competition.from} durationInFrames={TRAILER_TIMING.competition.durationInFrames}>
      <CompetitionScene durationInFrames={TRAILER_TIMING.competition.durationInFrames} />
    </Sequence>
    <Sequence from={TRAILER_TIMING.vote.from} durationInFrames={TRAILER_TIMING.vote.durationInFrames}>
      <VoteScene durationInFrames={TRAILER_TIMING.vote.durationInFrames} />
    </Sequence>
    <Sequence from={TRAILER_TIMING.ranking.from} durationInFrames={TRAILER_TIMING.ranking.durationInFrames}>
      <RankingScene durationInFrames={TRAILER_TIMING.ranking.durationInFrames} />
    </Sequence>
    <Sequence from={TRAILER_TIMING.community.from} durationInFrames={TRAILER_TIMING.community.durationInFrames}>
      <CommunityScene durationInFrames={TRAILER_TIMING.community.durationInFrames} />
    </Sequence>
    <Sequence from={TRAILER_TIMING.brand.from} durationInFrames={TRAILER_TIMING.brand.durationInFrames}>
      <BrandScene durationInFrames={TRAILER_TIMING.brand.durationInFrames} />
    </Sequence>
    <Sequence from={TRAILER_TIMING.callToAction.from} durationInFrames={TRAILER_TIMING.callToAction.durationInFrames}>
      <CallToActionScene durationInFrames={TRAILER_TIMING.callToAction.durationInFrames} />
    </Sequence>
  </>
);
