function corAleatoria(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        return bgColor;
};

function minhasCrias(){
    let cores =  corAleatoria()
    let crias = document.querySelectorAll(".crias")
        crias.forEach((elemento)=>{elemento.style.color = cores;})
   //console.log(elemento)
};
   setInterval(minhasCrias, 100);
  
