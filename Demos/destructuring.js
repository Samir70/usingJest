test = [
    {_id: 1, n:"Samir"},
    {_id: 2, n:"Claire"},
]

let res = test.find(({_id}) => _id = 1)
console.log(res)