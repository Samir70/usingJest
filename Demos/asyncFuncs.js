let a = 10

const callback = () => {
	a = 20
    console.log("from callback:", a)
}
setTimeout(callback, 1)
for (let i = 0; i<10**6; i++) {
    for (j = 0; j < 1000; j++) {
        i += 0
        j *= 1
    }
}
console.log(a)