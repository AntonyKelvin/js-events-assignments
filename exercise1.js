window.onload = () => {
    let counter = 0;
    const button = document.querySelector('#btn-1');
    console.log(button);
    button.addEventListener('click', event => {
        counter = counter + 1;
        event.target.value = counter.toString();
    });
};

