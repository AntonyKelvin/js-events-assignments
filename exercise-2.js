window.onload = () => {
    let counter = 0;
    const button = document.querySelector('#btn-1');
    const minus = document.querySelector('#btn-minus');
    const plus = document.querySelector('#btn-plus');

    console.log(button);
    console.log(minus);
    console.log(plus);

    plus.addEventListener('click' , () => {
        counter += 1;
        button.value = counter.toString();
    });

    minus.addEventListener('click', () => {
        counter -= 1;
        button.value = counter.toString();
    })
};