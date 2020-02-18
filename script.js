const numbers = document.querySelectorAll(".number")
console.log(numbers)


numbers.forEach((number) => {
    console.log(number)
})



numbers.forEach((number) => {
    number.addEventListener("click", () => {
        console.log("number is pressed")
    })
})


numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}


numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})