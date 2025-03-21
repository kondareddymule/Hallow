const container = document.getElementById('container')

const input = document.getElementById('input')
const submit = document.getElementById('submit')


function randomfun(number) {
    const row = Math.floor(Math.random() * (number * number) )
    const random = Math.floor(Math.random() * (number * number))

    if (row === random) {
        return randomfun(number)
    } else {
        return [row, random]
    }
}


let count = 0

submit.addEventListener('click', function(){
    container.innerHTML = ""
    let number = parseInt(input.value)
    if (number > 16 || number < 2 || number === "" || isNaN(number)) {
        alert("please Enter less than are eqaul 15 and greater than 2")
        return;
    }

    let random = randomfun(number)
   
    container.style.display = 'grid'
    container.style.gridTemplateColumns = `repeat(${number}, 40px) `
    container.style.gridTemplateRows = `repeat(${number}, 40px) `
    container.style.marginTop = '10px'
    container.style.gap = '5px'
    for (let i=0; i < number; i++) {
        for (let j=0; j < number; j++) {
            const div = document.createElement('div')
            div.id = count;
            div.style.backgroundColor = 'white'
            div.classList.add('box')
            container.appendChild(div)
            count++
        }
    }

    let space = document.getElementById(random[0])
    space.style.backgroundColor = 'red'
    const element = document.getElementById(random[1])
    element.style.backgroundColor = 'green'
    input.value = ""

    sendDetails(parseInt(random[1]), parseInt(random[0]), number)
    count = 0
})


let steps = 0
function sendDetails(num, numred, number) {

    document.addEventListener('keydown', function(e) {
        console.log(num, numred)
        if (num === numred) {
            num = "";
            number = ""
            alert(`You Won ${steps}`)
            steps = 0
            return;
        }
        switch (e.key) {
            case "ArrowDown":
                if (num < (number * number) - number) {
                    current = document.getElementById(num)
                    current.style.backgroundColor = "white"
                    space = document.getElementById(num + number)
                    space.style.backgroundColor = 'green'
                    num += number
                    steps += 1
                }
                break;
            case "ArrowUp":
                    if (num -number > 0) {
                        current = document.getElementById(num)
                        current.style.backgroundColor = "white"
                        space = document.getElementById(num - number)
                        space.style.backgroundColor = 'green'
                        num -= number
                        steps += 1
                    }
                
                break;
                case "ArrowRight":
                    if (num < (number * number) -1) {
                        current = document.getElementById(num)
                        current.style.backgroundColor = "white"
                        space = document.getElementById(num + 1)
                        space.style.backgroundColor = 'green'
                        num += 1
                        steps += 1
                    }
                
                break;
                case "ArrowLeft":
                    if (num >  0) {
                        current = document.getElementById(num)
                        current.style.backgroundColor = "white"
                        space = document.getElementById(num - 1)
                        space.style.backgroundColor = 'green'
                        num -= 1
                        steps += 1
                    }
                break;
        }
    })
}
