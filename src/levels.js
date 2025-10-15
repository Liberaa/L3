// import config from './config.js'
import { SIZES, TARGET_SCORES } from './config.js'

const groundTop = () => window.innerHeight - SIZES.groundHeight
const fullWidth = () => window.innerWidth

export const levels = [
  {
    targetScore: TARGET_SCORES.level1,
    elements: [
      { type: 'ground', positionX: 0, positionY: groundTop, width: fullWidth, height: SIZES.groundHeight },
      { type: 'platform', positionX: 120, positionY: 520 },
      { type: 'platform', positionX: 360, positionY: 420 },
      { type: 'platform', positionX: 600, positionY: 330 },
      { type: 'coinTrail', points: [[160,480],[200,480],[240,480],[400,380],[440,380],[480,380],[640,290],[680,290],[720,290]] }
    ]
  },]