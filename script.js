const calcular = document.getElementById('Calcular');



function financiamento(){

      const nome = document.getElementById('nome').value;
      const renda = document.getElementById('renda').value;
      const valor_bem = document.getElementById('valor_bem').value;
      const entrada = document.getElementById('entrada').value;
      const juros = document.getElementById('juros').value;
      const n = document.getElementById('prestacoes').value;
      const resultado = document.getElementById('resultado');

  if (nome!=='' && renda!=='' && valor_bem!=='' && entrada!=='' && juros!=='' && n!==''){

        const i = juros/100; 
        const pv = valor_bem - entrada;
        const pmt = (((((1 + i)**n) * i) * pv) / (((1 + i)**n)-1)).toFixed (2);
        resultado.textContent = `Olá ${nome}, com o produto valendo R$ ${valor_bem}, dando uma uma entrada de R$ ${entrada}, com juros de ${juros} dividido em ${n}, você pagará prestações de R$ ${pmt}`

    } else {
        resultado.textContent = `Para calcular seu financiamento, peço que preecha todos os campos`
    }


}
calcular.addEventListener('click', financiamento);
  

