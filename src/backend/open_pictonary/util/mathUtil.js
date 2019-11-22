/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
exports.getRandomInt = (min, max) => {
    return Math.random() * (max - min) + min;
}