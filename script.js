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
    const h1 = document.createElement('h1')
    h1.append('Второе задание')
    container.append(h1)
    
    const img = document.createElement('img')
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tiger_BTM.jpg/1200px-Tiger_BTM.jpg'
    container.append(img)

    const button = document.createElement('button')
    button.append('Поменять картинку')
    button.onclick = () => {
        if(img.src == "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tiger_BTM.jpg/1200px-Tiger_BTM.jpg") img.src = 'https://waralbum.ru/wp-content/uploads/2020/11/1.png'
        else img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tiger_BTM.jpg/1200px-Tiger_BTM.jpg'
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
    const h1 = document.createElement('h1')
    h1.append('Четвертое задание')
    container.append(h1)

    const input = document.createElement('input')
    container.append(input)

    const buttonPlus = document.createElement('button')
    buttonPlus.style.width = "100px"
    buttonPlus.append("Я добавлю +")
    container.append(buttonPlus)

    const buttonMinus = document.createElement('button')
    buttonMinus.style.width = "100px"
    buttonMinus.append("Я добавлю -")
    container.append(buttonMinus)

    const buttonDivide = document.createElement('button')
    buttonDivide.style.width = "100px"
    buttonDivide.append("Я добавлю /")
    container.append(buttonDivide)

    const buttonMultiply = document.createElement('button')
    buttonMultiply.style.width = "100px"
    buttonMultiply.append("Я добавлю *")
    container.append(buttonMultiply)

}

firstTask();

secondTask();

thirdTask();

forthTask();