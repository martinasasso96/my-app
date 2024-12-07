export const getMonth = (date: Date) => {
  switch (date?.getMonth()) {
    case 0:
      return "Gen";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "Mag";
    case 5:
      return "Giu";
    case 6:
      return "Lug";
    case 7:
      return "Ago";
    case 8:
      return "Set";
    case 9:
      return "Ott";
    case 10:
      return "Nov";
    case 11:
      return "Dic";
  }
};

export const getWeekDay = (date: Date) => {
  switch (date?.getDay()) {
    case 1:
      return "Lunedì";
    case 2:
      return "Martedì";
    case 3:
      return "Mercoledì";
    case 4:
      return "Giovedì";
    case 5:
      return "Venerdì";
    case 6:
      return "Sabato";
    case 0:
      return "Domenica";
  }
};

export const formatSingleDigit = (n: number) => {
  if (n?.toString()?.length === 1) return `0${n}`;
  return n;
};

export const formatDate = (date: Date) => {
  return `${formatSingleDigit(date?.getDate())} ${getMonth(
    date
  )} , ${getWeekDay(date)} ${formatSingleDigit(
    date?.getHours()
  )}:${formatSingleDigit(date?.getMinutes())}`;
};
