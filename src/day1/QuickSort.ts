// Often when you see a quicksort function its split into the partition function - which produces the pivot index && moves the items from one side or the other
//  Then the quicksort algoritm which calls partition to get the pivot and does the recursive and base steps

const qs = (arr: number[], lo: number, hi: number): void => {
    if (lo >= hi) {
        return;
    }

    const pivotIndex = partition(arr, lo, hi);

    qs(arr, lo, pivotIndex - 1);
    qs(arr, pivotIndex + 1, hi); //repeat qs on other side of the arry not including the pivot
};

const partition = (arr: Number[], lo: number, hi: number): number => {
    const pivot = arr[hi];

    let index = lo - 1;

    // Do weak sort on subarray not containing pivot
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            index++;
            const attempt = arr[i];
            arr[i] = arr[index];
            arr[index] = attempt; //the prior 3 lines are just swapping -- assign reassign
        }
    }
    index++;
    arr[hi] = arr[index];
    arr[index] = pivot;

    return index;
};

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1); // can use arr.at(-1)
}
