// // Serial & Paralel

// const firstPromise= () => (new Promise((resolve,reject) => {
//     setTimeout(() =>{ resolve('first Promise')},1000) 
//   }))
  
//   const secondPromise = () => ( new Promise((resolve,reject) =>{
//     setTimeout(() =>{ resolve('second Promise')},1000) 
//   }))
  
//   const thirdPromise = () => ( new Promise((resolve,reject) =>{
//     setTimeout(() =>{ resolve('third Promise')},1000) 
//   }))
   
//   async function asyncParalel() {
//     let a =firstPromise()
//     let b= secondPromise()
//     let c= thirdPromise()
//     console.log('done')
//   }

// asyncParalel()

   
//   async function asyncSerial() {
//      let a= await firstPromise()
//      let b= await secondPromise()
//      let c= await thirdPromise()
//      console.log('done')
//   }

//   asyncSerial()

//   gunakan time di depan command untuk cek waktu exekusi

// Promise.all & Promise.race dalam Async/await

//  const firstPromise= () => (new Promise((resolve,reject) => {
//     setTimeout(() =>{ resolve('first Promise')},1000) 
//   }))
  
//   const secondPromise = () => ( new Promise((resolve,reject) =>{
//     setTimeout(() =>{ resolve('second Promise')},500) 
//   }))
  
//   const thirdPromise = () => ( new Promise((resolve,reject) =>{
//     setTimeout(() =>{ resolve('third Promise')},1000) 
//   }))
   
//   async function promiseAll() {
//     let results= await Promise.all(
//         [firstPromise(),secondPromise(),thirdPromise()]
//     )
//     console.log(results);
//   }

// promiseAll()

// async function promiseRace() {
//     let results= await Promise.race(
//         [firstPromise(),secondPromise(),thirdPromise()]
//     )
//     console.log(results);
//   }

//   promiseRace()
