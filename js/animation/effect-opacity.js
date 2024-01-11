const twuObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show-opacity')
      }
      else{
        entry.target.classList.remove('show-opacity')
      }
    })
  })
  
  const twuElements = document.querySelectorAll('.hidden-opacity')
  
  twuElements.forEach((element) => twuObserver.observe(element))