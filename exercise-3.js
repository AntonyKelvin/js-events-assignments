window.onload = () => {
    const input = document.querySelector('#text-1');
    const btnEncode = document.querySelector('#btn-encode');
    const btnDecode = document.querySelector('#btn-decode');
    const result = document.querySelector('#result-1');

    btnEncode.addEventListener('click' , () => {
        console.log(input.value);
        result.value = encodeURIComponent(input.value);
    });

    btnDecode.addEventListener('click' , () => {
        console.log(input.value);
        result.value = decodeURIComponent(input.value);
    });
};