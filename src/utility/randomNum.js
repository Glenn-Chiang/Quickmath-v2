export default function randomNum(range) {
    const [rangeStart, rangeEnd] = range;
    return Math.floor(Math.random() * rangeEnd) + rangeStart;
}