// methods of string 
const string1 = "Neyaz Morshid"

// ? ----  any string method return a new string , it doesnot chage the original string . Its called immutable .
// so string is immutable, means it cannot be changed , only replaced 


// ! ---- slice()
//?  -- slice(start-Position-Num, end-Position-Num)
// start-Position-Num is 0
// console.log(string1.slice(6,10)) //* --> Mors
// console.log(string1.slice(-12,-10)) //* --> ey

// ! ---- replace()
//?  - replace(a, b) 
// a= which word you wanna replace 
// b =by which word you wanna replace 
// console.log(string1.replace("Neyaz", "Faiz"))  //*-->Faiz Morshid
//!1 replace()  method doesnot change the previous or main string , rather make a copy and change that copy 
//!2 by default it replcae() first match from the string
//!3 its case sensative, to replace case insensative , use a regular expration with an /i flag




// !  ---- concat()
//? a.concat("b", c)
// a= with whom I will concat/add
// b= after "a" what I will put 
// c= what I will add
const concated = string1.concat(" ", "Faiz")
// it means -- Neyaz Morshid Faiz
// --? use + instead of concat()



// ! ---- trim()
//? trim() = remove space from start and ending
//? 



// ! ---- charAt()
// ? extract any characters 
// ? just give the character position
// string1.charAt(0) //* --> N
// if no string found - it will return a empaty string



// ! ---- split()
// ? will return an array 
// split(a)
// a= with what i wanna split ()
string1.split('')
// [
//   'N', 'e', 'y', 'a',
//   'z', ' ', 'M', 'o',
//   'r', 's', 'h', 'i',
//   'd'
// ]

// search in a stirng

// ! ---- indexOf()
// string index position return
// case sensetive
// return first index
// ! ---- lastIndesOf()
// if the index is not found the it will return -1

// ! includes()
// will return true or false 
// includes(a,b) 
// a= the string you wanna search
// b= the start point from where you wanna start to search
