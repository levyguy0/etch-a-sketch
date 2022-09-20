const container = document.querySelector('.container');





let width = prompt("How many squares wide do you want the grid to be? 1-50");
let height = prompt("How many squares high do you want the grid to be? 1-50");

if(width > 50 || height > 50) {
    alert('Error! Number is too Large!')


}
const gridsize = width*height + 1;

for(i = 1;i<gridsize;i++){
    const content = document.createElement('div');
    content.classList.add('griditem');
    container.appendChild(content);
    content.textContent = '    ';
}
let text = 'auto ';
let result = text.repeat(width);
container.style.gridTemplateColumns = result;



container.addEventListener('mouseover', function (e) {
    if (e.target.matches('.griditem')) {
      e.target.classList.add('active');
    }
  });

const btn = document.querySelector('#btn');

btn.addEventListener('click',() =>{
    const items = document.querySelectorAll('.griditem')
    items.forEach(elem => {
        elem.classList.remove('active')
       elem.style.color = 'white'
       })
    
})


