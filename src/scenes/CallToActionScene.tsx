import type {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {ArenaVisual} from '../components/ArenaVisual';
import {Glow} from '../components/Glow';
import {KineticTypography} from '../components/KineticTypography';
import {SceneStage} from '../components/SceneStage';
import {COLORS, DISPLAY_FONT} from '../config/theme';

type CallToActionSceneProps = {
  durationInFrames: number;
};

export const CallToActionScene: FC<CallToActionSceneProps> = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const urlOpacity = interpolate(frame, [76, 96], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const lineWidth = interpolate(frame, [40, 92], [0, 300], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <SceneStage sceneNumber={9} seed={83} durationInFrames={durationInFrames}>
      <ArenaVisual size={920} opacity={0.22} />
      <Glow color="rgba(242,107,44,0.38)" size={620} x="50%" y="60%" opacity={0.19} />
      <div style={{position: 'absolute', top: '43%', left: 0, right: 0, transform: 'translateY(-50%)'}}>
        <KineticTypography
          fontSize={126}
          staggerFrames={18}
          lineHeight={0.98}
          lines={[
            {text: 'ENTER THE ARENA.', fontSize: 124, tone: 'white', letterSpacing: 4},
            {text: 'EARN YOUR PLACE.', fontSize: 117, tone: 'orange', letterSpacing: 3},
          ]}
        />
        <div
          style={{
            width: lineWidth,
            height: 2,
            margin: '56px auto 30px',
            background: `linear-gradient(90deg, transparent, ${COLORS.orange}, transparent)`,
            boxShadow: '0 0 18px rgba(242,107,44,0.4)',
          }}
        />
        <div
          style={{
            color: COLORS.white,
            fontFamily: DISPLAY_FONT,
            fontSize: 45,
            fontWeight: 600,
            letterSpacing: 3,
            textAlign: 'center',
            opacity: urlOpacity,
          }}
        >
          austroclash.in
        </div>
      </div>
    </SceneStage>
  );
};
