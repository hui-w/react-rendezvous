/* immutable replaceItem */

function replaceItem_1(list, index, newItem) {
  // A mutation
  list[index] = newItem;
  return list;
}

function replaceItem_2(list, index, newItem) {
  // Use slice and concat
  return list
    .slice(0, index)
    .concat(newItem)
    .concat(list.slice(index + 1));
}

function replaceItem_3(list, index, newItem) {
  // ES6 style
  return [
    ...list.slice(0, index),
    newItem,
    ...list.slice(index + 1)
  ];
}

/* immutable removeItem */

function removeItem_1(list, index) {
  // A mutation
  list.splice(index, 1);
  return list;
}

function removeItem_2(list, index) {
  // Use slice and concat to avoid mutation
  return list
    .slice(0, index)
    .concat(list.slice(index + 1));
}

function removeItem_3(list, index) {
  // ES6 style
  return [...list.slice(0, index), ...list.slice(index + 1)];
}

/* immutable addItem */

function addItem_1(list, item) {
  // A mutation
  list.push(item);
  return list;
}

function addItem_2(list, item) {
  // Use concat which will not modify the original array
  return list.concat(item);;
}

function addItem_3(list, item) {
  // Use ES6 array's spread operator
  return [...list, item];
}
