export const getContacts = state => state.items;
export const getFilter = state => state.filter;
export const filteredContacts = state => {
  const allContacts = state.items;
  const filter = state.filter;
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );
};
