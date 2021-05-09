window.onload = () => {
    const input = document.querySelector('#text-1');
    const result = document.querySelector('#result-div');

    input.addEventListener('input' , event => {
        result.style.backgroundColor = event.target.value;
    });
};