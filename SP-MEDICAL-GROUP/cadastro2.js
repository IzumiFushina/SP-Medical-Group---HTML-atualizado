let bnt = document.querySelector('.fa-eye')
bnt.addEventListener('click', ()=>{
    let inputSenha = documnent.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
       inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }

})