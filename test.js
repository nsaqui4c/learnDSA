let obj = {a:1,b:2}

obj.a =undefined

console.log(obj)

for (let i in obj){
    console.log(i)
}