export const validate = (value, regex) => {
  if (value === "") return true;
  const regexValue = new RegExp(regex);

  return regexValue.test(value);
};
