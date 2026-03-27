let a = 10;
let b = 5;
let c = 8;

let smallest;

if (a <= b && a <= c) {
    smallest = a;
} else if (b <= a && b <= c) {
    smallest = b;
} else {
    smallest = c;
}

console.log("Smallest number is:", smallest);
