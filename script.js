root.style.display = 'flex';
root.style.flexDirection = 'column';

let i = 1;
let n = 2;
let j = 1;
let abc = setInterval(function () {
   let div = document.createElement('div');
    div.innerHTML = `${n} x ${i} = ${n * i}`;
    div.style.display = 'flex';
    div.style.width = "100%";
    div.style.justifyContent = 'space-around';
    div.style.border = "1px solid black";
    div.style.fontSize = `${n+j+10}px`;
    div.style.backgroundColor = `${getRandomColor()}`;
    root.append(div);
    i++;
    j++;
    if(i > 10) {
        i = 1;
        n++;
    }
    if(n > 10) {
        clearInterval(abc);
    }
}, 5000);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let k = 0; k < 6; k++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
