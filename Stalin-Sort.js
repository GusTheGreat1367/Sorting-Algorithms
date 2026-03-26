// Using an Array named arr
async function StalinSort(arr) {
  function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
      else return true;
    }
  }

  while (!isSorted(arr)) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr.splice(arr[j], 1);
      }
    }
  }
  return arr;
}
