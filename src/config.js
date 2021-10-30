const config = {
  amountPerPage: 24,
  defaultPageLimits: { lower: 1, upper: 33 },
  apiPageSize: 25,
  apiPokemonAmount: 807,
};

config.defaultPageLimits.upper =
  ((33 * config.apiPageSize) / config.amountPerPage) | 0;

export default config;
