import possibleBadges from '../constants/possibleBadges.json';

export const buildFilters = () => {
  return Object.keys(possibleBadges).map((label) => {
    const value = possibleBadges[label];

    return {
      value,
      label,
    };
  });
};
