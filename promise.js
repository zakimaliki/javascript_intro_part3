
// Fulfilled
// let janji = new Promise ((resolve,reject) => {
//   let condition = true;
//   if(condition){
//   resolve('berhasil')
//   }else{
//   reject('Janji batalkan')
//   }
// })

// console.log(janji);

// Reject
// let janji = new Promise ((resolve,reject) => {
//   let condition = false;
//   if(condition){
//   resolve('berhasil')
//   }else{
//   reject('Janji batalkan')
//   }
// })

// console.log(janji);


// Pending
// let janji = new Promise ((resolve,reject) => {

// })

// console.log(janji);






















// dengan menerapkan try dan catch




let janji = new Promise((resolve, reject) => {
  const condition = false;   
  if(condition) {
       setTimeout(function(){
           resolve("Promise is resolved!"); // fulfilled
      }, 300);
  } else {    
      reject('Promise is rejected!');  // rejected
  }
}) 

const demoPromise= function() {
janji
.then(
  (result)=>{console.log("Success:"+result)}
)
.catch(
    (error)=>{
      console.log("Error:"+error)
  }
)
}

demoPromise();
