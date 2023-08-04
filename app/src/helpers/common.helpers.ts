export const formatDynamicClasses = (classes: string[]): string =>
  classes.join(' ').replaceAll('  ', '').trim();
