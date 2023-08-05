export const formatDynamicClasses = (classes: string[]): string =>
  classes
    .filter((value: string) => !!value === true)
    .join(' ')
    .trim();

export const isClassExist = (value: any, returnTrue: string, returnFalse: any = '') =>
  !!value === true ? returnTrue : returnFalse;
