export const kebabize = (data: string) => {
  return data
    .split('')
    .map((letter: string, idx: number) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
    })
    .join('');
};

export const seederFileName = (className: string) => {
  return `${kebabize(className)}.seeder`.replace(/(\-seeder)/, '');
};
