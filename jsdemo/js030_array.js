const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

let data = fruits.toString();
console.log(`${data}`); // Banana,Orange,Apple,Mango
console.log(`${typeof data}`); // string

console.log(typeof fruits.join()); // string
console.log(fruits.join()); // Banana,Orange,Apple,Mango
console.log(fruits.join("*"));
console.log(fruits.join("_"));

fruits[4] = "Kiwi";
console.log(fruits);
console.log(fruits.push("Melon")); // 6
console.log(fruits);

console.log(fruits.pop()); // Melon
console.log(fruits);

console.log(fruits.unshift("Melon")); // 6
console.log(fruits);

console.log(fruits.shift()); // Melon
console.log(fruits);

delete fruits[3];
console.log(fruits); // <1 empty item>

fruits[3] = "Mango";
console.log(fruits);

console.log(fruits.slice(1, 3)); // ['Orange', 'Apple']
console.log(fruits.slice(-4, -2)); // ['Orange', 'Apple']
console.log(fruits.slice(1)); // ['Orange', 'Apple', 'Mango', 'Kiwi']

console.log(fruits.sort()); // 오름차순
console.log(fruits.reverse()); // 내림차순

let point = [40, 100, 1, 5, 10];
console.log(point.sort()); // [1, 10, 100, 40, 5] - 문자열로 정렬됨

// 올바른 오름차순 정렬
const asc = point.sort(function (a, b) {
  console.log(`a:${a}, b:${b}, a-b:${a - b}`);
  return a - b;
});
console.log("오름차순:", asc);

// 내림차순 정렬
const desc = point.sort(function (a, b) {
  console.log(`a:${a}, b:${b}, b-a:${b - a}`);
  return b - a;
});
console.log("내림차순:", desc);

let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length); // 9
console.log(zData); // [1,2,3,4,5,6,7,8,9]

// 배열 평탄화(flat)
let arr2 = [1, 3, [[[4, 5]]], [[9, 10], 12]];
console.log(arr2.length); // 4
console.log(arr2); // [1, 3, [[[4, 5]]], [[9, 10], 12]]
console.log(arr2.flat()); // [1, 3, [[4, 5]], [9, 10], 12]
console.log(arr2.flat(1)); // [1, 3, [[4, 5]], [9, 10], 12]
console.log(arr2.flat(3)); // [1, 3, 4, 5, 9, 10, 12]

//https://woong-jae.com/javascript/220412-sort-implementation
//javascript에서 sort()는 Tim Sort 알고리즘을 사용한다.
//Tim Sort는 Insertion sort와 Merge Sort을 결합하여 만든 정렬이다.
//Tim Sort 알고리즘 : https://d2.naver.com/helloworld/0315536
