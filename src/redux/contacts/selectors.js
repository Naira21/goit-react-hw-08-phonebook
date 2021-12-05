export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const filteredContacts = state => {
  const allContacts = state.contacts.items;
  const filter = state.contacts.filter;

  if (!allContacts) {
    return;
  }

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );
}
