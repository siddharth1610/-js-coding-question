//? 1.Longest word in a string

const longestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  let words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  // console.log(words);

  let maxlength = words[0].length;
  //console.log(maxlength);

  let longestWor = words.filter((wrd) => wrd.length === maxlength);
  //console.log(longestWor);

  return longestWor;
};

//console.log(longestWord("hell my name isll"));

//? 2.HAshtag generator

const generator = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  let words = str.split(" ");
  words = words.map((char) => char.charAt(0).toUpperCase() + char.slice(1));
  console.log(words);

  return `#${words.join(" #")}`;
};

//console.log(generator("hey my name sis sioddhartrh"));

//? 3.count the occurence of character

const countChar = (str, char) => {
  if(!str || !char ){
    return false
  }


  str = str.toLowerCase().trim();
  char = char.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count
};

//console.log(countChar("",""));


//? 4.check the type of triangle.

const check=(a,b,c)=>{
 if(a===b && b===c&&c===a)return "Equilateral triangle"
 if(a===b || b===c||c===a)return "isosceles triangle"
 return "scalene triangle"
}

//console.log(check(9,9,9));

//? 5.Sort an array

const sortArr=(arr)=>{
  let sortedArr=arr.sort((a,b)=>a-b)
  return sortedArr
}

//console.log(sortArr([5,32,6,4,32]));

//bubble sort method

const bubbleSort=(arr)=>{
  let updatedArr=[...arr]
  for(let i=0;i<updatedArr.length;i++){
    for(let j=0;j<updatedArr.length;j++){
      if(updatedArr[j]>updatedArr[j+1]){
        let temp=updatedArr[j]
        updatedArr[j]=updatedArr[j+1]
        updatedArr[j+1]=temp
      }
    }
  }
  return updatedArr
}
//console.log(bubbleSort([2,3,2,56,4,3,67]));

//? 6.Palindrome

const isPalindrome=(str)=>{
  str=str.toLowerCase().trim("")
  let i=0
  let j=str.length -1
  while(i<=j){
    if(str[i]===str[j]){
      i++;
      j--;
    }else{
      return false
    }
    
  }
  return true
}
 // console.log(isPalindrome("na awn"));

  //? 7.Find the max number.

  const maxNum=(arr)=>{
return Math.max(...arr)
  }

  //console.log(maxNum([3,5,32,34,4,65]));
 
  
  //long method
const maxNu=(arr)=>{
  let highest=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]>highest){
      highest=arr[i]
    }
  }
  return highest
}
//console.log(maxNu([3,5,32,34,4,65]))

//? 8.FACTORIAL


const isFact=(a)=>{
  let ans=1
  for(let i=1;i<=a;i++){
    ans*=i
  }
return ans
}
//console.log(isFact(5));

//? 9.Calculate Average

const calAvg=(arr)=>{
  let ans=0
  for(let i=0;i<arr.length;i++){
    ans+=arr[i]
  }
  return ans/arr.length
}

//console.log(calAvg([5,10,2,8]));

//? 10.Array Equal

const arrEquaal=(arr1,arr2)=>{
if(arr1.length !== arr2.length){
  return false
}
for(let i=0;i<arr1.length;i++){
  if(arr1[i]!==arr2[i]){
    return false
  }
}
return true
}

console.log(arrEquaal([1,2,3,4],[1,3,4]));

