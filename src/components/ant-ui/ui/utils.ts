export const getDimensionToken = (value: string | number) => {
  return typeof value === "number" ? `${value}px` : value
}
