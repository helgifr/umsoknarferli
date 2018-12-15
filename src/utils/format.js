export function hyphenFormat(string) {
  return string.replace(/\s/g, '-');
}

export function chunk(array) {
  const newArray = [];

  array.forEach((element, index) => {
    if (index < array.length - 1) {
      newArray.push([element, array[index + 1]]);
    } else {
      return;
    }
  });
  return newArray;
}
