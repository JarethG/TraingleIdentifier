// Defining function to be tested
import axios from "axios";



function calc(marks) {

}


const test1 = await axios.get(`/triangle?a=10&b=10&c=10`)

// const test2 = await axios.get(`./triangle/?a=3&b=4&c=5`)

// Displaying test results
console.log('test 1 = equilateral : ' + test1)
// console.log('test 1 = right angle : ' + test2)