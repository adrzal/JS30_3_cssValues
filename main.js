const sliders = document.querySelectorAll('input');
const img = document.querySelector("img");

sliders.forEach( input => input.addEventListener("change", read))

function read(){
    
    let prefix = "";
    
    if(this.name != "base") prefix = "px";
    else prefix = "";
    
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${prefix}`);
    
    console.log(`${this.value}${prefix}`, `--${this.name}`);
}