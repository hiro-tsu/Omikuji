'use strict';

{
    const btn = document.getElementById('btn');
    
    btn.addEventListener('click', () => {
        btn.textContent = 'hit!!';
    });
    btn.addEventListener('mousedown', () => {
        btn.classList.add('pressed');
    });
    btn.addEventListener('mouseup', () => {
        btn.classList.remove('pressed');
    });



    /*Math.randomを使った乱数生成テスト*/
    // let lan_int = Math.floor(Math.random() * 5);
    // let lan_int = Math.floor(Math.random() * (5 + 1));
    // let lan_int = 5 + Math.floor(Math.random() * (5 + 1));
    // let lan_int = 5 + Math.floor(Math.random() * (10 + 1 -5));
    // console.log(lan_int);

}