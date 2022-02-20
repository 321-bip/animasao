
function corAleatoria(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        return bgColor;
};

function minhasCrias()
 {
    let meusBebes = document.querySelectorAll(".crias");
        return {meusBebes};
 };
      
function coresDasCrias()
 {
    let cores =  corAleatoria();
    let {meusBebes} = minhasCrias();
         meusBebes.forEach((elemento)=>{elemento.style.color = cores;});
 };

function posiçaoCrias()
 {
   let conteinerCrias = document.getElementById("bebes")
   let posiçaoConteinerCrias = conteinerCrias.getBoundingClientRect();
       return {posiçaoConteinerCrias, conteinerCrias};   
 } 

function animaçaoCrias()
 {
   let animaçao;  
   let {posiçaoConteinerCrias, conteinerCrias} =  posiçaoCrias();
   let x = posiçaoConteinerCrias.left;
   let y = posiçaoConteinerCrias.right;
   let z = posiçaoConteinerCrias.bottom;

   if( posiçaoConteinerCrias.left <1000)
    {
       conteinerCrias.style.left = x + 1 + "px";   
    }
   else if( posiçaoConteinerCrias.left == 100)
    {
        conteinerCrias.style.left = x -1 + "px";
    }
      
       //animaçao = requestAnimationFrame(animaçaoCrias) 
    
       console.log(posiçaoConteinerCrias.left)
       console.log(posiçaoConteinerCrias)
 } 
 
 function man()
 {
    animaçaoCrias()
    posiçaoCrias()
    setInterval(coresDasCrias, 100);
   
 }

 man();
 
  
