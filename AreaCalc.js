// // export function calculateArea(length, width) {
// //     if (!length || !width) {
// //         return;
// //     }
// //     let area = length * width;
// //     console.log("The area is: " + area);
// //     return area;
// // }
// //
// // let length = 10;
// // let width = 4;
// // // Calculate area of rectangle
// // let result = calculateArea(length, width);
// //
// // //Check if the area is greater than 50
// // if (result > 50) {
// //     console.log("Area is greater than 50");
// // } else {
// //     console.log("Area is 50 or less");
// // }
// //
//
//
//
//
//
//
// // calculateArea(a, 3);
// // calculateArea(-3, 3);
// // calculateArea(0, 3);
// // calculateArea(null, 3);
//
//
//




export function calculateAreaFixed(length, width) {
    if (!length || !width || length <= 0 || width <= 0) {
        throw new Error("Length and width must be positive numbers");
    }
    return length * width;
}


// //
// // const len = 10;
// // const wid = 4;
// // const res = calculateAreaFixed(len, wid);
// //
// // console.log(`The area is: ${res}`);
// // console.log(res > 50 ? "Area is greater than 50" : "Area is 50 or less");
// //
//
//
//
// // console.log(!'a');
// // console.log('a' <= 0);
// // console.log(isNaN('a'));