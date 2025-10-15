function byId(id) {
  const node = document.getElementById(id)
  if (!node) throw new Error(`#${id} not found`)
  return node
}

function noop() {}

const startButton = byId('btnStart')
const resetButton = byId('btnReset')
const menuButton = byId('btnMenu')
const nextButton = byId('btnNext')
const stopButton = byId('btnStop')
const schemeSelect = byId('selScheme')
const difficultySelect = byId('selDifficulty')

startButton.addEventListener('click', noop)
resetButton.addEventListener('click', noop)
menuButton.addEventListener('click', noop)
nextButton.addEventListener('click', noop)
stopButton.addEventListener('click', noop)
schemeSelect.addEventListener('change', noop)
