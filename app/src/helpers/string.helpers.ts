import _ from 'lodash';

export const titleCase = (string: string): string => _.startCase(_.toLower(string));

export const ageSentence = (age?: number) =>
  !!age === true ? `${age} year${age! > 1 ? 's' : ''} old` : 'No age';
