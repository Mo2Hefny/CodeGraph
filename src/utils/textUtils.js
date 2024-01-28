/* TextUtils.js */

export const CapitalizeString = (originalString) => {
  return originalString.replace(/^\w/, (c) => c.toUpperCase());
}