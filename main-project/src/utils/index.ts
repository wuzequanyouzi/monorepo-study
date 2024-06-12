export const getUrl = (str: string): string => {
  const pattern = /\bhttps?:\/\/\S+\b/g;
  return str.match(pattern)?.[0] || '';
};
