const treeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show-top')
      }
      else{
        entry.target.classList.remove('show-top')
      }
    })
  })
  
  const treeElements = document.querySelectorAll('.hidden-top')
  
    treeElements.forEach((element) => treeObserver.observe(element))