// Synchronus = perintah dieksekusi satu persatu sesuai urutan kode 
// function p1() {
//     console.log('p1 done')
//   }
//   function p2() {
//     console.log('p2 done')
//   }
//   function p3() {
//     console.log('p3 done')
//   }
//   p1()
//   p2()
//   p3()























// Asynchronous = hasil eksekusi atau output berdasarkan sesuai waktu proses
// function p1() {
//     console.log('p1 done')
//   }
//   function p2() {
//     setTimeout(
//         function() {
//           console.log('p2 done')
//         },1000
//     )
//   }
//   function p3() {
//     console.log('p3 done')
//   }
//   p1()
//   p2()
//   p3()



















// gunahkan callback untuk tetap berurutan
// function p1() {
//     console.log('p1 done')
//    }
   
//    function p2(callback) {
//     setTimeout(
//      function() {
//       console.log('p2 done')
//        callback()
//      },1000
//      )
//    }
   
//    function p3() {
//      console.log('p3 done')
//    }
//    p1()
//    p2(p3)