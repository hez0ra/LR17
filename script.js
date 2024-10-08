const container = document.createElement('div')
container.className = 'container'
document.body.append(container)


function firstTask(){
    const h1 = document.createElement('h1')
    h1.append('Первое задание')
    container.append(h1)

    const input = document.createElement('input');
    input.type = 'text'
    container.append(input)

    const button = document.createElement('button')
    button.append('Вызвать alert')
    button.onclick = () => {
        if(input.value != "") alert (input.value)
    }
    container.append(button)

    const hr = document.createElement('hr')
    hr.color = 'black'
    container.append(hr)
}

function secondTask(){
    const imgURL1 = "https://hips.hearstapps.com/hmg-prod/images/german-armay-armoured-corps-a-heavy-tank-vi-tiger-front-news-photo-549025205-1545336787.jpg"
    const imgURL2 = "https://waralbum.ru/wp-content/uploads/2020/11/1.png"

    const h1 = document.createElement('h1')
    h1.append('Второе задание')
    container.append(h1)
    
    const img = document.createElement('img')
    img.src = imgURL1
    container.append(img)

    const button = document.createElement('button')
    button.append('Поменять картинку')
    button.onclick = () => {
        if(img.src == imgURL1) img.src = imgURL2
        else img.src = imgURL1
    }
    container.append(button)

    const hr = document.createElement('hr')
    hr.color = 'black'
    container.append(hr)
}

function thirdTask(){
    const h1 = document.createElement('h1')
    h1.append('Третее задание')
    container.append(h1)

    let counter = 0;
    const button = document.createElement('button')
    button.append(counter)
    button.onclick = () => {
        button.innerHTML = ''
        button.append(++counter);
    }
    button.style.padding = '5px 20px'
    container.append(button)
    
    const hr = document.createElement('hr')
    hr.color = 'black'
    container.append(hr)
}

function forthTask(){
    const buttonWidth = "300px"

    const h1 = document.createElement('h1')
    h1.append('Четвертое задание')
    container.append(h1)

    const input = document.createElement('input')
    input.disabled = true
    container.append(input)

    const buttonPlus = document.createElement('button')
    buttonPlus.style.width = buttonWidth
    buttonPlus.append("Я добавлю +")
    buttonPlus.onclick = () => input.value += "+"
    container.append(buttonPlus)

    const buttonMinus = document.createElement('button')
    buttonMinus.style.width = buttonWidth
    buttonMinus.append("Я добавлю -")
    buttonMinus.onclick = () => input.value += "-"
    container.append(buttonMinus)

    const buttonDivide = document.createElement('button')
    buttonDivide.style.width = buttonWidth
    buttonDivide.append("Я добавлю /")
    buttonDivide.onclick = () => input.value += "/"
    container.append(buttonDivide)

    const buttonMultiply = document.createElement('button')
    buttonMultiply.style.width = buttonWidth
    buttonMultiply.style.marginBottom = "10px"
    buttonMultiply.append("Я добавлю *")
    buttonMultiply.onclick = () => input.value += "*"
    container.append(buttonMultiply)

    for(let i = 1; i <= 10; i++){
        const addNumber = document.createElement('button')
        if(i == 10) addNumber.append(0)
        else{
        addNumber.append(i)
        }
        addNumber.style.width = buttonWidth
        addNumber.style.margin = "2px"
        addNumber.onclick = () => input.value += i
        container.append(addNumber)
    }
}

firstTask();

secondTask();

thirdTask();

forthTask();