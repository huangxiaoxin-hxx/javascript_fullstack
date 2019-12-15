// const code = `<template>
//                 <div>
//                     <input v-model="message">
//                     {{ message }}
//                 </div>
//               </template>
//               <script>
//                 export default {
//                     data () {
//                         return {
//                             message: ''
//                         }
//                     }
//                 }
//               </script>`

// export default code;

const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
function str32 () {
  let str = ''
  for (let i = 0; i < 32; i++) {
    let n = Math.floor(Math.random()*62)
    console.log(n)
    str += $chars.charAt(n)
  }
  console.log(str)
}
str32()