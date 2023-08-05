export const getFormErrorMessages = (errors: string | string[] | undefined): string => {
  if (errors === undefined) return '';

  if (typeof errors === 'string') return errors;

  return errors.join('\n');
};

export const validateSelectRequired = (value: string | null): boolean =>
  ['null', 'undefined', ''].includes(value || '') === false;

export const getRequiredErrorMessage = (field: string) => `${field} field is required.`;

export const getMinLengthErrorMessage = (field: string, length: number) =>
  `${field} minimum length is ${length}.`;

export const getMaxLengthErrorMessage = (field: string, length: number) =>
  `${field} maximum length is ${length}.`;

export const getPatternErrorMessage = (field: string) => `${field} field value is invalid.`;
