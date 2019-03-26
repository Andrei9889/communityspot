export const replaceLast = (string, what, replacement) => {
  return string
    .split(' ')
    .reverse()
    .join(' ')
    .replace(new RegExp(what), replacement)
    .split(' ')
    .reverse()
    .join(' ');
};

export const isRetina = (first, second) => {
  if (window.devicePixelRatio >= 2) {
    return second;
  }
  return first;
};