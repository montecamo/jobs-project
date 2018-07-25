'use strict'

export const monthes = ['JANUARY', 'FEBRYARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

export function convertDate(date, options) {
  let converted = new Date(date);

  let obj = {};
  
  if (options.day) {
    obj.day = converted.getDate();
  }
  if (options.month) {
    obj.month = monthes[converted.getMonth()];
  }
  return obj;
}

