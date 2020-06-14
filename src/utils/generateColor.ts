export default function generateColor() {
  // Math.pow is slow, use constant instead.
  const color = Math.floor(Math.random() * 16777216).toString(16);
  // Avoid loops.
  return '#000000'.slice(0, -color.length) + color;
}
