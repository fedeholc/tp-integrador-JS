const miform = document.querySelector("form");
const total = document.getElementById("total");
const cantidad = document.getElementById("inputcantidad");
const categoria = document.getElementById("inputcategoria");
const botonborrar = document.getElementById("botonborrar");

botonborrar.addEventListener("click", () => {
  total.textContent = "Total a Pagar: $";
});

miform.addEventListener("change", () => {
  let descuento = 0;
  console.log(typeof categoria.value);
  switch (Number(categoria.value)) {
    case 1:
      descuento = 0.2;
      break;
    case 2:
      descuento = 0.5;
      break;
    case 3:
      descuento = 0.85;
      break;
  }
  total.textContent = "Total a Pagar: $" + 200 * cantidad.value * descuento;
});
