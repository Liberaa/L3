export const PLAYER_COLOR_HEX = '#ef4444'

export const DIFFICULTY_PRESETS = Object.freeze({
  easy:   { gravityForce: 0.45, movementSpeed: 7,  jumpStrengthValue: 12 },
  normal: { gravityForce: 0.50, movementSpeed: 8,  jumpStrengthValue: 12 },
  hard:   { gravityForce: 0.60, movementSpeed: 9,  jumpStrengthValue: 13 }
})

export const COLORS = Object.freeze({
  ground: '#3b82f6',
  platform: '#1e293b',
  movingPlatform: '#0ea5e9',
  vanishingPlatform: '#a855f7',
  sweeper: '#ef4444'
})

export const SIZES = Object.freeze({
  groundHeight: 20,
  platformWidth: 160,
  platformHeight: 18,
  vanishingWidth: 140,
  vanishingHeight: 16,
  sweeperWidth: 80,
  sweeperHeight: 12,
  coinSize: 20
})

export const TARGET_SCORES = Object.freeze({
  level1: 30,
  level2: 40,
  level3: 50,
  level4: 60,
  level5: 75,
  level6: 90,
  level7: 110,
  level8: 130
})
