 // const date=document.getElementById("date");
    // date.innerHTML=new Date().getFullYear();
    const links=document.querySelector('.links');
    const container=document.querySelector('.link-container');
    const menu=document.querySelector('.menu');
    menu.addEventListener("click",()=>{
      let containerheight=container.getBoundingClientRect().height;
      const linkheight=links.getBoundingClientRect().height+50;
      console.log(containerheight);
      let count=0;
      if(containerheight===0){
        setInterval(()=>{
          while(count<linkheight)
          {
            count++;
            container.style.height=`${count}px`;
          }
        }, 100);
      }
      else{
        container.style.height=`0px`;
      }
    })
    const nav=document.getElementById("nav");
    const toplink=document.querySelector('.top-link');
    window.addEventListener("scroll",()=>{
      const scrollheight=Math.ceil(window.pageYOffset);
      const navheight=nav.getBoundingClientRect().height;
      if(scrollheight>navheight){
       nav.classList.add("fixed-nav");
      }
      else{
        nav.classList.remove("fixed-nav");
      }

      if(scrollheight>500){
        toplink.classList.add('show-link');
      }
      else{
        toplink.classList.remove('show-link')
      }
    })

    toplink.addEventListener("click",()=>{
      document.documentElement.scrollTop = 0;
    })

    //scroll animation
    const cards=document.querySelectorAll(".card");
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        if(entry.target.classList.contains("card")){
          entry.target.classList.add("cardshow");
        }
        if(entry.target.classList.contains("proj")){
          //console.log("dlkjnad");
          entry.target.classList.add("visi");
        }
      }
      
    })
    console.log(entries);
  },{
    threshold:0.5,
  })
  
  cards.forEach(card=>{
    observer.observe(card)
  })

  const projects=document.querySelectorAll(".proj");
  projects.forEach(pro=>{
    observer.observe(pro)
  })

  //proj
   
  // const observer1=new IntersectionObserver(entries=>{
  //   entries.forEach(entry=>{
  //     if(entry.isIntersecting){
        
        
  //      // observer.unobserve(target1);
  //     }
      
  //   })
  //   console.log(entries);
  // },{
  //   threshold:0.5,
  // })
  
  