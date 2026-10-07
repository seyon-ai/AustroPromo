import type {FC} from 'react';
import {Composition} from 'remotion';
import {AustroClashShort} from './compositions/AustroClashShort';
import {DURATION_IN_FRAMES, VIDEO_CONFIG} from './config/video';

export const Root: FC = () => (
  <>
    <Composition
      id={VIDEO_CONFIG.id}
      component={AustroClashShort}
      width={VIDEO_CONFIG.width}
      height={VIDEO_CONFIG.height}
      fps={VIDEO_CONFIG.fps}
      durationInFrames={DURATION_IN_FRAMES}
    />
  </>
);
