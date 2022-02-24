
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

function numeroAliatorios()
 {
    let esquerda = Math.floor(Math.random() * 1000);
    let altura =  Math.floor(Math.random() * 300);
        return {esquerda, altura};
 }
 
function posisaoAleatoriaConteiner()
 {
     let {esquerda, altura} = numeroAliatorios();
     let conteiner = document.getElementById("bebes");
         conteiner.style.left = esquerda + 'px';
         conteiner.style.top = altura + 'px';
 } 
 
function man()
 {
    setInterval(posisaoAleatoriaConteiner,900); 
    setInterval(coresDasCrias, 900);
 }

 man();
 
  
