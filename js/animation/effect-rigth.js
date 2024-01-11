/*
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

// Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
// function typeWriter(elemento) {
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML = '';
//   for(let i = 0; i < textoArray.length; i++) {
//     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//   }
// }

const titulo = document.getElementById('subtitle');
typeWriter(titulo);
*/

//animation rigth

const oneObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show-rigth')
    }
    else{
      entry.target.classList.remove('show-rigth')
    }
  })
})

const oneElements = document.querySelectorAll('.hidden-rigth')

oneElements.forEach((element) => oneObserver.observe(element))