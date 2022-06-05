rotulo1.innerHTML = "Indique el numero a verificar:";
rotulo2.innerHTML = "Indique el numero multiplo:";
let botonCalcular = document.getElementById("calcular");

botonCalcular?.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);

  function esMultiplo(numero1: number, numero2: number): boolean {
    return numero1 % numero2 === 0;
  }

  if (esMultiplo(numero1, numero2)) {
    console.log(numero1, "ES numero multiplo de ", numero2);
  } else {
    console.log(numero1, "NO es numero multiplo de ", numero2);
  }
});
