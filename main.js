$(document).ready(function(){$(".slider1").bxSlider({mode:"fade"})});document.querySelector(".menu-btn").addEventListener("click",()=>{document.querySelector(".nav-menu").classList.toggle("show")});const datos=[{img:"imagenes/dibujos/messi.jpg",},{img:"imagenes/dibujos/cristiano.jpg",},{img:"imagenes/dibujos/tommy.jpg",},{img:"imagenes/dibujos/dualipa.jpg",},{img:"imagenes/dibujos/keanu.jpg",},{img:"imagenes/dibujos/anuel.jpg",}];let slider1=document.querySelector(".slider1");function dinamico(src){let li=document.createElement("li");let img=document.createElement("img");img.src=src;slider1.appendChild(li);li.appendChild(img)}
datos.forEach(({img})=>dinamico(img));const btn=document.getElementById('button');document.getElementById('form').addEventListener('submit',function(event){event.preventDefault();console.log(event);btn.value='Enviando...';const serviceID='default_service';const templateID='template_kr1cepg';emailjs.sendForm(serviceID,templateID,this).then(()=>{btn.value='Enviar';swal('Mensaje enviado!','','success')},(err)=>{btn.value='Enviar';swal(JSON.stringify(err))})})






