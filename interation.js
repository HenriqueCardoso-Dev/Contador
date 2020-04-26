function entrar() {
    document.querySelector('div#button').style.background = '#e22828';
}

function sair() {
    document.querySelector('div#button').style.background = '#333';
}

function calc() {
    let res = window.document.querySelector('div#answer');
    let inicio = window.document.querySelector('input#txtIni');
    let fim = document.querySelector('input#txtEnd');
    let passo = document.querySelector('input#txtP');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar! Verifique os dados';
    } else {
        res.innerHTML = 'Contando: <br>';
        let end = Number(fim.value);
        let p = Number(passo.value);
        let c = Number(inicio.value);
        if(p <= 0){
            window.alert('Passo inválido, considerando PASSO 1.');
            p = 1;
        }
        if (c < end){
            //contagem crescente
            for (let count = c; count <= end; count += p){
                res.innerHTML += `${count} \u{1F449}`;
            }
        } else {
            //contagem regressiva
            for (let count = c; count >= end; count -= p){
                res.innerHTML += `${count} \u{1F449}`;
            }
        }
        res.innerHTML += '\u{1F3C1}';
    }
    res.style.opacity = '1';
}


   