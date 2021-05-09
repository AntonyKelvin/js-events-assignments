window.onload = () => {
    const input = document.querySelector('#text-1');
    const result = document.querySelector('#result-1');

    console.log(input);
    console.log(result);
    input.addEventListener('input' , event => {
        result.innerText = `This text has ${event.target.value.length} characters`;
        console.log(event.target.value);
    });
};