# AustroPromo

A dedicated, modular video-production repository for cinematic AustroClash promos and Shorts. This is not the AustroClash website and has no runtime dependency on the production application.

## First composition

`AustroClashShort` is a 9:16, 1080 × 1920, 60 fps, 30-second Remotion composition (1,800 frames). Its scenes are built from reusable React/TypeScript components, and all animation is derived from the Remotion frame number. Reusable building blocks live in `src/components/`; individual trailer scenes live in `src/scenes/`.

The first trailer follows the supplied timeline: the opening question, arena positioning, post/compete/reputation/rise, category competition, voting, ranking, community features, brand/tagline, and final call to action. The visuals use black, white, metallic silver, and restrained orange, with abstract cinematic geometry rather than fabricated application screens. No purple is used.

No official AustroClash logo was included in the repository at initialization. The trailer therefore uses plain typography for the brand name and does not invent a logo. Place an approved logo asset under `public/logos/` before using the reusable `LogoReveal` component.

## Requirements

- Node.js 22.17 or newer and npm (`@sparticuz/chromium` requires Node 22.17+ on Linux)
- On Linux, the npm scripts use Chromium and its required libraries from the npm package; Remotion provides the FFmpeg renderer. No system GPU or separately installed FFmpeg is required.
- On macOS/Windows, Remotion uses an installed Chrome/Chromium or its normal browser-download behavior.

## Local workflow

```bash
npm install
npm run preview
```

Open the Remotion Studio at `http://localhost:3000` and select `AustroClashShort`.

```bash
npm run typecheck
npm run test-frame
npm run render:short
npm run render
```

- `npm run test-frame` writes a PNG still from frame 900 to `out/test-frame.png`.
- `npm run render:short` renders frames 0–59 to `out/austroclash-short-test.mp4` as a quick pipeline check.
- `npm run render` renders the full H.264 MP4 to `out/austroclash-short.mp4` (1080 × 1920, 60 fps, 30 seconds, H.264 `yuv420p` / BT.709).
- `out/` is intentionally ignored by Git; generated media stays local or in workflow artifacts.

To change the default format or duration, edit `src/config/video.ts`. Keep the scene boundaries in `TRAILER_TIMING` summing to the composition's `DURATION_IN_FRAMES`.

## GitHub Actions

`.github/workflows/render-video.yml` supports manual `workflow_dispatch`, checks out the repository, installs Node 22 and the npm lockfile dependencies, renders the selected composition on a standard CPU runner with bounded concurrency, and uploads the MP4 as a 14-day Actions artifact. It does not assume a GPU or use paid rendering infrastructure.
