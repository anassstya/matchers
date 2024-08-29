"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = selection_sort;
function selection_sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var smallest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[smallest].health > arr[j].health) {
        smallest = j;
      }
    }
    var temp = arr[smallest];
    arr[smallest] = arr[i];
    arr[i] = temp;
  }
  return arr;
}