const main=document.getElementById('main');
const colors=['#ffff55','#e43b3b','#55ff55','#ff55ff','#123abc','#faf3f6','#d7948c'];
const SQUARE=500;
for(let i=0;i<=SQUARE;i++)
{
    const square=document.createElement('div');
    square.classList.add('box');

    square.addEventListener('mouseover',() =>setcolor(square)
    )
    square.addEventListener('mouseout',() =>removecolor(square)
    )
    main.appendChild(square);

}
function setcolor(element)
{
   const color=getRandomcolor();
   element.style.background=color;
   element.style.boxshadow= '0 0 2px ${color}, 0 0 10px ${color}'
}
function removecolor(element)
{
element.style.background='#1d1d1d';
element.style.boxshadow= '0 0 2px #111';
}
function getRandomcolor()
{
    return colors[Math.floor(Math.random()*colors.length)];
}