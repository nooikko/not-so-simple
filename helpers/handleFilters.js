export const handleFilters = (banks, filters) => {
  if (!Array.isArray(filters)) return banks;

  const filterValues = filters.map(({ label }) => label);

  return banks.filter((bank) => {
    const { matching, fresh } = bank;
    const allFeatures = [...matching, ...fresh];

    const matches = filterValues
      .map((filter) => allFeatures.includes(filter))
      .every((x) => Boolean(x));

    return matches;
  });
};
