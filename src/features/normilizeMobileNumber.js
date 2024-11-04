export function normalizeMobileNumber(value) {
  return value
    .replace(/\s/g, "")
    .match(/.{1,3}/g)
    .join(" ")
    .substr(0, 11);
}
