
const converter = characters => {
  const chars = characters.split('');
  const n = chars.length;

  const convert = (x, name) =>
    x < 0
      ? name
      : convert(x / n - 1, chars[Math.floor(x % n)] + name);

  return x => convert(x, '');
}

export default converter;
