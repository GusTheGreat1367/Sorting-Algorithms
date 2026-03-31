//Say Goodbye to your data!
function StalinSort(arr) {
  let i = 0;
  while(i < arr.length - 1) {
    while (arr[i] > arr[i + 1]) {
        arr.splice(i+1, 1);
    }
    i++;
  }
  return arr;
}
