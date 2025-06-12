function leftPad(num) {
    if (num < 10)
        return `0${num}`;
    else
    return `${num}`;
}

function setText(selector, text) {
    let targetElement = document.querySelector(selector);
    targetElement.innerText = leftPad(text);
}


function watchTime() {


    let present = new Date();
    const dayList = ["일","월","화","수","목","금","토",];

    setText('#hours', present.getHours());
    setText('#minute', present.getMinutes());
    setText('#seconds', present.getSeconds());

    setText('#year', present.getFullYear());
    setText('#month', present.getMonth()+1);
    setText('#date', present.getDate());

    const day = present.getDay();
    setText('#day',dayList[day]);
}

watchTime();

let clockInterval = setInterval(watchTime, 1000);

let btn = document.querySelector('button');
btn.onclick = () => {
    if(btn.innerText == '시간종료') {
        clearInterval(clockInterval);
        btn.innerText = '시간재생';
    } else {
     clearInterval = setInterval(watchTime, 1000);
     btn.innerText = '시간종료';   
    }
    
}