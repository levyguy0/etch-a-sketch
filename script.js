const container = document.querySelector('.container');



for(i = 1;i<257;i++){
    const content = document.createElement('div');
    content.classList.add('grid-item');
    container.appendChild(content);
    content.textContent = '    ';
}

