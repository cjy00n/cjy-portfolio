export const getYearAndMonth = (input: string) => {
  const date = new Date(input);
  return `${date.getFullYear()}.${date.getMonth() + 1}`;
};
