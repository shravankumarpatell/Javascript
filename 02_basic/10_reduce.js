const arr = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log( `acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)
// console.log(ar)

const ar = arr.reduce( (acc, curval) => acc+curval, 0)
console.log(ar)

const shoppingCart = [
    {
        item: "js course",
        price: 2999
    },
    {
        item: "js course",
        price: 2999
    },
    {
        item: "js course",
        price: 2999
    }
]

const priceToPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPrice)