const shuffle = (array: { id: number; name: number }[]) => {
  let counter = array.length,
    temp,
    index;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};

export default shuffle;
