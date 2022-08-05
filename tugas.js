// function cekNum (num)  {
//     if(num >= 5 && num <= 10){
//         console.log(num)
//     }
//     try {
//         if(num == "") throw "is empty";
//         if(isNaN(num)) throw "is not a number";
//         num = Number(num);
//         if(num > 10) throw "is to high"
//         if(num < 5) throw "is too low";
//     } catch (error) {
//       console.log(`Number ${error}`)
//     } finally{
//         console.log("Done")
//     }
//   }

//   cekNum(10);

//   function cekNum (num)  {
//     for(i=1;i<num;i++){
//         if(i >= 5 && i <= 10){
//             console.log(i)
//         }
//         try {
//             if(i == "") throw `${i} is empty`;
//             if(isNaN(i)) throw `${i} is not a number`;
//             i = Number(i);
//             if(i > 10) throw `${i} is too high`;
//             if(i < 5) throw `${i} is too low`;
//         } catch (error) {
//           console.log(`${error}`)
//         }
//      }
//   }

//   cekNum(5);

// const myFirstPromise = new Promise((resolve, reject) => { 
//     const condition = false;   
//     if(condition) {
//          setTimeout(function(){
//              resolve("Promise is resolved!");
//         }, 300);
//     } else {    
//         reject('Promise is rejected!');  
//     }
// });


// const demoPromise= function() {
//     myFirstPromise
//     .then((successMsg) => {
//         console.log("Success:" + successMsg);
//     })
//     .catch((errorMsg) => { 
//         console.log("Error:" + errorMsg);
//     })
// }
  
// demoPromise();

