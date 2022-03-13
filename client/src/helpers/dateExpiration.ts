export const dateExpiration = (date: string): string => {
  if (new Date(date) > new Date()) {
    return "Срок годности истек";
  } else {
    return `Годен до ${date}`;
  }
};
