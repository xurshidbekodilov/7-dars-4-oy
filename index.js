//func1 Berilgan sonning kvadrat ildizini hisoblaydigan funksiya yozing
/*
function ildiz(num){
    console.log(Math.sqrt(num));
}
ildiz(16); //4
*/

//func2 Ikki sonning ayirmasini hisoblaydigan funksiya yozing
/*
function ayirma(a,b){
    let res1 = a - b;
    let res2 = b - a;
    console.log(`1-sondan 2-sini ayirmasi ${res1}`);
    console.log(`2-sondan 1-sini ayirmasi ${res2}`);
}
ayirma(3,2) // 1 va -1
*/

//func3 Stringni berilgan son marta takrorlaydigan funksiya yozing
/*
function repeatString(num) {
    let string = 'string';
    for (let i = 0; i < num; i++) {
        console.log(string);
    }
}
repeatString(2);
// string
//sting
*/

//func4 Berilgan sonning kubini hisoblaydigan funksiya yozing.
/*
function kub(num){
    console.log(num**3);
}
kub(2); //8
*/

//func5 ikki sonning bo'linmasining butun qismini qaytaradigan funksiya yozing
/*
function butunQism(a, b) {
    console.log(Math.floor(a/b));
}
butunQism(8,5);//1
*/

//func6 Berilgan yildan asrni aniqlaydigan funksiya yozing
/*
function century(num){
    console.log(Math.floor((num-1)/100)+1);
}
century(2024); //21
*/

//func7 Berilgan sonning factorialini hisoblaydigan funksiya yozing
/*
function faktorial(num){
    let res = 1;
    for( let i=1; i<=num; i++){
        res *= i;
    }
    console.log(res);
}
faktorial(5); //120
*/

//func9 Stringning oxiridan berilgan soncha belgini kesib oladigan funksiya yozing
/*
function getChars(str, n) {
    if (n > str.length) {
        console.log(str);
    } else {
        console.log(str.slice(-n));
    }
}
getChars("Hello World", 5); // "World"
*/

//func10 Berilgan stringda raqamlar bor-yoqligini tekshiradigan funksiya yozing
/*
function CheckNumber(str) {
    for (let char of str) {
        if (char >= '0' && char <= '9') {
            console.log(true);
        }else{
            console.log(false);
        }
    }
}
*/

//func11 Sonning darajasini hisoblaydigan funksiya yozing
/*
function degree(a,b){
    console.log(a**b);
}
degree(2,3);//8
*/

//func12 Stringdagi barcha bo'shliqlarni olib tashlaydigan funksiya yozing
/*
function removeSpaces(str) {
    console.log(str.split(' ').join(''));
}
*/

//func13 Ikki stringni birlashtiradigan funksiya yozing
/*
function qushish(a,b){
    console.log(a+b);
}
*/

//Massivlarga oid masalalar

//massiv1 Massivdagi barcha elementlarning yig'indisini hisoblaydigan funksiya yozing
/*
function yigindi(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    console.log(sum);
}
*/

//massiv2 Massivdagi eng katta elementni topadigan funksiya yozing
/*
function findMax(arr) {
    if (arr.length === 0) {
        console.log(undefined);
    }
    let max = arr[0];
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    console.log(max);
}
*/

//massiv3 Massivni teskari tartibda qaytaradigan funksiya yozing
/*
function func(arr) {
    let new_arr = [];
    for( let i=arr.length-1; i>=0; i--){
        new_arr.push(arr[i]);
    }
    console.log(new_arr)
}\
*/

//massiv4 Massivdagi musbat sonlarni filtrlab qaytaradigan funksiya yozing
/*
function return_positive(arr){
    let newArr =[];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]>0){
            newArr.push(arr[index]);
        }
    }
    console.log(newArr);
}
*/

//massiv5 Massivdagi har bir elementni kvadratga oshiradigan funksiya yozing
/*
function degree(arr){
    let newArr =[];
    for (let index = 0; index < arr.length; index++) {
        arr[index]=(arr[index]**2);
        newArr.push(arr[index]);
    }
    console.log(newArr);
}
*/

//massiv7 Ikki massivni birlashtiradigan funksiya yozing
/*
function yigindi(arr1,arr2){
    console.log(arr1.concat(arr2));
}
*/

//massiv8 Massivdagi toq sonlar sonini hisoblaydigan funksiya yozing
/*
function return_positive(arr){
    let newArr =[];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]%2==1){
            newArr.push(arr[index]);
        }
    }
    console.log(newArr);
}
*/

//massiv9 *Massivning har bir elementiga berilgan sonni qo'shadigan funksiya yozing
/*
function func(arr, number) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        newArr.push(arr[index] + number);
    }
    console.log(newArr);
}
*/

//massiv10 Massivdagi eng kichik elementni topadigan funksiya yozing.
/*
function findMin(arr) {
    if (arr.length === 0) {
        console.log(undefined);
    }
    let min = arr[0];
    for (const num of arr) {
        if (num < min) {
            min = num;
        }
    }
    console.log(min)
}
*/