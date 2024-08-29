export default function selection_sort(arr){
    for(let i = 0; i<arr.length; i++){
        let smallest = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[smallest].health < arr[j].health){
                smallest = j;
            }
        }
        let temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i]= temp;
    }
    return arr;
}