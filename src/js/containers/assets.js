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

export function filterUniqueVacancies(array) {
  let ids = [];

  return array.filter((vacancy) => {
    if (ids.includes(vacancy.id)) {
      return false;
    }
    ids.push(vacancy.id);
    return true;
  })
} 

export function convertQueryToArr(query) {
  query = query.toLowerCase().replace(/\s+/g,' ').trim();
  if (!query) {
    return [''];
  }

  return query.split(' ').filter((query) => {
    return !!query;
  });
}

export function sum(arr) {
  let counter = 0;
  arr.forEach((elem) => counter += +elem);
  return counter;
}

export function sortByDate(arr, dateField) {
  console.log('before', arr);
  arr = arr.sort((a, b) => (
    Date.parse(b[dateField]) - Date.parse(a[dateField])
  ));
  console.log('after', arr);
  return arr;
}

export function containsNumber(string) {
  return /\d/.test(string);
}
