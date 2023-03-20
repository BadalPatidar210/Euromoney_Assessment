export const getDaysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
};
  
export const getWeekDayOfMonth = function (month, year) {
    return new Date(year, month, 1).getDay();
};
  