import {Config} from '@remotion/cli/config';

// Keep the render deterministic and friendly to CPU-only local/CI runners.
Config.setOverwriteOutput(true);
Config.setVideoImageFormat('jpeg');
