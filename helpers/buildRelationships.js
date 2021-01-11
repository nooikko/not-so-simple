import possibleBadges from '../constants/possibleBadges.json';

function getMatchingFeatures(simple, bank) {
  return Object.keys(possibleBadges).reduce((acc, cur) => {
    const fieldValue = possibleBadges[cur];
    const simpleValue = simple[fieldValue];
    const currentValue = bank[fieldValue];

    if (simpleValue && currentValue) {
      return [...acc, cur];
    }

    return acc;
  }, []);
}

function getMissingFeatures(simple, bank) {
  return Object.keys(possibleBadges).reduce((acc, cur) => {
    const fieldValue = possibleBadges[cur];
    const simpleValue = simple[fieldValue];
    const currentValue = bank[fieldValue];

    if (simpleValue && !currentValue) {
      return [...acc, cur];
    }

    return acc;
  }, []);
}

function getFreshFeatures(simple, bank) {
  return Object.keys(possibleBadges).reduce((acc, cur) => {
    const fieldValue = possibleBadges[cur];
    const simpleValue = simple[fieldValue];
    const currentValue = bank[fieldValue];

    if (!simpleValue && currentValue) {
      return [...acc, cur];
    }

    return acc;
  }, []);
}

export const buildRelationships = (banks) => {
  const [simpleBank] = banks.filter(({ name }) => name === 'Simple');
  const restBanks = banks.filter(({ name }) => name !== 'Simple');

  return restBanks.map((bank) => ({
    ...bank,
    matching: getMatchingFeatures(simpleBank, bank),
    missing: getMissingFeatures(simpleBank, bank),
    fresh: getFreshFeatures(simpleBank, bank),
  }));
};
