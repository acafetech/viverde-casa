var checkList = document.getElementById('checklistServicos');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}


// Validação do CPF 
document.getElementById("cpf").addEventListener("input", function(event) {
  var cpfInput = document.getElementById("cpf");
  var cpf = cpfInput.value.replace(/\D/g, ''); 

  // Formatação do CPF
  cpfInput.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
});

document.getElementById("cpf").addEventListener("keydown", function(event) {
  if(event.key != "Backspace" && event.key != "Delete") {
    var i = document.getElementById("cpf").value.replace(/\D/g, '').length;

    // verifica se o tamanho do CPF já é 11 antes de adicionar caracteres
    if (i === 11) {
      event.preventDefault(); // impede a adição de novos caracteres além do CPF completo
    } else if (i === 3 || i === 7) {
      document.getElementById("cpf").value = document.getElementById("cpf").value + ".";
    } else if (i === 11) {
      document.getElementById("cpf").value = document.getElementById("cpf").value + "-";
    }
  }
});

// VALIDAÇÃO DO RG
document.getElementById("rg").addEventListener("input", function(event) {
  var rgInput = document.getElementById("rg");
  rgInput.value = rgInput.value.replace(/\D/g, ''); 
});

// Confirmação de cadastro efetuado

const botãoEnviar = document.getElementById("button");

botãoEnviar.addEventListener("click", function() {
  // Redireciona o usuário para a outra página
  window.location.href = "form-confirmacao.html";
});