function btnSortear() {
  const numQtd = document.getElementById('numQtd');
  const numDe = document.getElementById('numDe');
  const numAte = document.getElementById('numAte');
  const btn = document.getElementById('btnSortear');
  const btnSortearNovamente = document.getElementById('btnSortearNovamente');
  const sectionSorteio = document.getElementById('sorteio');
  const sectionSorteado = document.getElementById('sorteado');
  const resultado = document.getElementById('numSorteados');

  function sortearNumeros() {
    const qtd = parseInt(numQtd.value);
    const de = parseInt(numDe.value);
    const ate = parseInt(numAte.value);

    if (isNaN(qtd) || isNaN(de) || isNaN(ate)) {
      alert("Digite apenas números.");
      return;
    }

    if (de >= ate) {
      alert("'De' deve ser menor que 'Até'.");
      return;
    }

    if (qtd <= 0) {
      alert("Quantidade deve ser maior que zero.");
      return;
    }

    if (qtd > (ate - de + 1)) {
      alert("Não é possível sortear essa quantidade sem repetir.");
      return;
    }

    const permitirRepetidos = document.getElementById('permitirRepetidos');
    const numeros = [];

    if (permitirRepetidos.checked) {
    for (let i = 0; i < qtd; i++) {
        const sorteado = Math.floor(Math.random() * (ate - de + 1)) + de;
        numeros.push(sorteado);
    }
    } else {
    while (numeros.length < qtd) {
        const sorteado = Math.floor(Math.random() * (ate - de + 1)) + de;
        if (!numeros.includes(sorteado)) {
        numeros.push(sorteado);
        }
    }
    }


    resultado.innerHTML = '';
    numeros.forEach(num => {
      const span = document.createElement('span');
      span.textContent = num;
      resultado.appendChild(span);
    });

    sectionSorteio.style.display = 'none';
    sectionSorteado.style.display = 'block';
  }

  function voltarParaSorteio() {
    sectionSorteado.style.display = 'none';
    sectionSorteio.style.display = 'block';
  }

  btn.addEventListener('click', sortearNumeros);
  btnSortearNovamente.addEventListener('click', voltarParaSorteio);
}

btnSortear();
