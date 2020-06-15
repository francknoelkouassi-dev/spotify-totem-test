export const str = (obj) => obj.toString();

export const sanitize = (str1) => str1.replace(/\+/g, '%2B').replace(/ /g, '%20');
