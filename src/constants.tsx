export const BREAKPOINT = {
  phone: 767,
  tablet: 1023
};

export const QUERY = {
  tabletAndDown: `(max-width: ${BREAKPOINT.tablet / 16}rem)`,
  phoneAndDown: `(max-width: ${BREAKPOINT.phone / 16}rem)`
};
