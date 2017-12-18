module.exports = Pose

/**
 * Positon & Facing
 *
 * There's a snappy backronym here somewhere
 * Position and Orientation of Specific Entity? idk
 *
 * x, y: Int, position between 0-4 inclusive
 *       0,0 is south-west
 * f: Int, facing
 *    0: North, 1: East, 2: South, 3: West
 *    Multiply by 3 and visualise a clock face
 * fallback: Pose|undefined, invalid poses silently fail
 */
function Pose(x, y, f, fallback) {
  if (!isValid(x, y, f)) return fallback
  return Object.freeze({
    x: x,
    y: y,
    f: f,
  })
}

Pose.NORTH = 0
Pose.EAST  = 1
Pose.SOUTH = 2
Pose.WEST  = 3

function isValid(x, y, f) {
  return true &&
    isIntInRange(x, 0, 4) &&
    isIntInRange(y, 0, 4) &&
    isIntInRange(f, 0, 3)
}

/**
 * Inclusive
 */
function isIntInRange(i, min, max) {
  return Number.isInteger(i) && i >= min && i <= max
}

