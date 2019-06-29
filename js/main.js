'use strict';

{
    const btn = document.getElementById('btn');
    
    btn.addEventListener('click', () => {
        const results = ['大吉', '中吉', '凶', '小吉'];
        const n = Math.floor(Math.random() * results.length);
        btn.textContent = n;

        btn.textContent = results[n];
        
        /*switch構文版*/
        // switch(n) {
        //     case 0:
        //         btn.textContent = '大吉';
        //         break;
        //     case 1:
        //         btn.textContent = '中吉';
        //         break;
        //     case 2:
        //         btn.textContent = '凶';
        //         break;
        // }

        
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