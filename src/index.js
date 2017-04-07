
const nameGenerator = characters => {
  const chars = characters.split('');
  const n = chars.length;

  const generateName = (x, name) =>
    x < 0
      ? name
      : generateName(x / n - 1, name + chars[Math.floor(x % n)]);

  return x => generateName(x, '');
}

export default nameGenerator;
