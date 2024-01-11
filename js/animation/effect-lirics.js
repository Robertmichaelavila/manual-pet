const fowrObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show-lirics')
      }
      else{
        entry.target.classList.remove('show-lirics')
      }
    })
  })
  
  const fowrElements = document.querySelectorAll('.hidden-lirics')
  
    fowrElements.forEach((element) => fowrObserver.observe(element))