export const handleFilters = (banks, filters) => {
  if (!Array.isArray(filters)) return banks;

  const filterValues = filters.map(({ label }) => label);

  return banks.filter((bank) => {
    const { matching, fresh } = bank;

    const matchFilter = filterValues
      .map((filter) => matching.includes(filter))
      .every((item) => Boolean(item));
    const freshFilter = filterValues
      .map((filter) => {
        return fresh.includes(filter);
      })
      .every((item) => Boolean(item));

    return matchFilter || freshFilter;
  });
};
