let content = document.querySelector("#content");
let images = document.querySelector("#images")
let i = 0;
let counter = setInterval(()=>{
    content.innerHTML += `
    <a href="#${i}" id="${i}-mag">${i}</a>`
    images.innerHTML += `<img id=${i} src="https://picsum.photos/id/${i}/200/300" />`
    i++
        if( i > 50){
            clearInterval(counter)
        }
},500)
