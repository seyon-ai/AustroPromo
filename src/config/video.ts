export const VIDEO_CONFIG = {
  id: 'AustroClashShort',
  width: 1080,
  height: 1920,
  fps: 60,
  durationInSeconds: 30,
} as const;

export const secondsToFrames = (seconds: number): number =>
  Math.round(seconds * VIDEO_CONFIG.fps);

export const DURATION_IN_FRAMES = secondsToFrames(VIDEO_CONFIG.durationInSeconds);

export const TRAILER_TIMING = {
  question: {from: secondsToFrames(0), durationInFrames: secondsToFrames(2.5)},
  arena: {from: secondsToFrames(2.5), durationInFrames: secondsToFrames(2.5)},
  pillars: {from: secondsToFrames(5), durationInFrames: secondsToFrames(4)},
  competition: {from: secondsToFrames(9), durationInFrames: secondsToFrames(4)},
  vote: {from: secondsToFrames(13), durationInFrames: secondsToFrames(4)},
  ranking: {from: secondsToFrames(17), durationInFrames: secondsToFrames(4)},
  community: {from: secondsToFrames(21), durationInFrames: secondsToFrames(3.5)},
  brand: {from: secondsToFrames(24.5), durationInFrames: secondsToFrames(2.5)},
  callToAction: {from: secondsToFrames(27), durationInFrames: secondsToFrames(3)},
} as const;

export const TRAILER_DURATION_IN_FRAMES = Object.values(TRAILER_TIMING).reduce(
  (total, scene) => total + scene.durationInFrames,
  0,
);

if (TRAILER_DURATION_IN_FRAMES !== DURATION_IN_FRAMES) {
  throw new Error(
    `Trailer scenes total ${TRAILER_DURATION_IN_FRAMES} frames, expected ${DURATION_IN_FRAMES}.`,
  );
}
