const NumLi = document.querySelectorAll('.num')
const input = document.getElementById('input_num')



NumLi.forEach(Nums => {
    Nums.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active')
        Nums.classList.add('active')
        const numAct = document.querySelector('.active')
        setTimeout(() => {
            Nums.classList.remove('active')
        }, 100);
        function display(numAct) {
            input.attributes.value += numAct
        }
        console.log(numAct);

    })


});

