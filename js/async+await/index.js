async function fn(){
	let result = await new Promise((resolve,reject)=>{
		setTimeout(()=>{
      resolve(100)
		},1000)
	})
}
let a = fn().then(res => {
  console.log(res)
})
a