const inputNasc = document.getElementById('data-nascimento');

inputNasc.addEventListener('input', function() {
  let nasc = inputNasc.value.split("-").map(Number);
  let depois18Anos = new Date(nasc[0] + 18, nasc[1] - 1, nasc[2]);
  let depois100Anos = new Date(nasc[0] + 100, nasc[1] - 1, nasc[2]);
  let agora = new Date();

  if (depois18Anos > agora) {
    inputNasc.setCustomValidity("Você é menor de 18 anos.");
  } else if (depois100Anos < agora) {
    inputNasc.setCustomValidity("Você já passou dos 100 anos.");
  } else {
    inputNasc.setCustomValidity("");
  }
});