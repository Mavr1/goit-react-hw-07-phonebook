export const filterContacts = (array, value) => {
  console.log('array :>> ', array);
  console.log('value :>> ', value);
  return array.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
};
export const filterArrayDelete = (array, id) =>
  array.filter((item) => {
    return item.id !== id;
  });
