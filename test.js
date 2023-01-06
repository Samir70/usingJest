d1 = new Date()
const make2ndDate = () => {
    d2 = new Date()
    console.log(d1, d2)
    console.log(d1 - d2)
    console.log(d1 < d2)
}
setTimeout(make2ndDate, 10)

d3 = new Date('2022-12-25')
console.log({d3})
console.log(d3.toDateString())
