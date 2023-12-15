
// executando uma função ao enviar o form

const handleSubmit = (event) => {
    event.preventDefault();
    //dados pessoais
    const nome = document.querySelector('input[name=nome-completo]').value;
    const endereco = document.querySelector('input[name=endereco]').value;
    const dataNascimento = document.querySelector('input[name=data-nascimento]').value;
    const email = document.querySelector('input[name=e-mail]').value;
    const rg = document.querySelector('input[name=rg]').value;
    const cpf = document.querySelector('input[name=cpf]').value;
    const telefone = document.querySelector('input[name=telefone]').value;
  
    let deficSelecionado = '';
    const deficEscolha = document.querySelectorAll('input[name="deficiencia"]');
    deficEscolha.forEach(function(radio) {
      if (radio.checked) {
        deficSelecionado = radio.value;
      }
    });

    const deficTipo = [];
    const deficCheckbox = document.querySelectorAll('input[name=tipo-deficiencia]:checked');
    deficCheckbox.forEach(function(checkbox) {
      deficTipo.push(checkbox.value);
    }); 
    // dados profissionais
  
    
    let cpnjSelecionado= ''; 
    const cnpjEscolha = document.querySelectorAll('input[name="cnpj-sim-nao"]');
    cnpjEscolha.forEach(function(radio) {
      if (radio.checked) {
        cpnjSelecionado = radio.value;
      }
    });
  
    const numeroCpnj = document.querySelector('input[name=cnpj]').value;
    const areaAtuacao = document.querySelector('input[name=area-atuacao]').value;
  
    //serviços
  
    // selecionando todos os checkboxes com o nome 'servicos'
    const checkbox_servicos = document.querySelectorAll('input[name=servicos]:checked');
    const servicosSelecionados = [];
  
  // iterando sobre os checkbox selecionados para obter seus valores
      checkbox_servicos.forEach(function(checkbox) {
      servicosSelecionados.push(checkbox.value);
    });
  
    // dados de agenda
    const horariosAtendimento = document.querySelectorAll('input[name=horarios]:checked');
    const horariosSelecionados = [];
      horariosAtendimento.forEach(function(checkbox) {
        horariosSelecionados.push(checkbox.value);
      })
      
      //fim de semana
      let fimSemanaSelecionados = '';
      const fimSemanaAtendimento = document.querySelectorAll('input[name="fim-semana"]');
      fimSemanaAtendimento.forEach(function(radio) {
        if (radio.checked) {
          fimSemanaSelecionados = radio.value;
        }
      });
  
      //carteira assinada
      let cltSelecionado = ''; 
      const clt = document.querySelectorAll('input[name="cart-assinada"]');
      clt.forEach(function(radio) {
        if (radio.checked) {
          cltSelecionado = radio.value;
        }
      });
    
    // dados financeiros
    const cobrarServico = document.querySelectorAll('input[name=cobrar-servico]:checked');
    const cobrarServicoSelecionados = [];
      cobrarServico.forEach(function(checkbox) {
        cobrarServicoSelecionados.push(checkbox.value);
      })
  
    const precoMedio = document.querySelector('input[name=preco-medio]').value;
  
    // experiencia profissional
    const contatoRef1 = document.querySelector('input[name=contato]').value;
    const contatoRef2 = document.querySelector('input[name=contato2]').value;
    const contatosReferencia = (contatoRef1 + contatoRef2)
    const certificacoes = document.querySelector('input[name=certificacoes]').value;
    
  
    fetch('https://api.sheetmonkey.io/form/2kk8PdXHsccnHhcx8idNqN', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        nome, endereco, dataNascimento, email, rg, cpf, telefone, deficSelecionado, deficTipo, 
        cpnjSelecionado, numeroCpnj, areaAtuacao,
        servicosSelecionados,
        horariosSelecionados, fimSemanaSelecionados, cltSelecionado,
        cobrarServicoSelecionados, precoMedio,
        contatoRef1, contatoRef2, certificacoes}),
    });
  
  }
  document.querySelector('form').addEventListener('submit', handleSubmit )