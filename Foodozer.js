// preloader

//code for loader with simple code
// let loader = document.getElementById("preloader");

// window.addEventListener("load",function(){
//     loader.style.display= "none";    
// });

// timeset for preloader
const timeoutValue = 8000; // Adjust this value as needed

// Function to hide the preloader after the timeout
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}
setTimeout(hidePreloader, timeoutValue);// Set a timeout to hide the preloader

//search
let select= document.getElementById('search-quick');

select.addEventListener('change',function(){
    let selection = document.getElementById('search-quick').value;
    alert("Yummy , you have selected" + " " + selection +" " + " for your day.");
});

//searchbar color change when typing...

let area = document.getElementById('form-control');
 
    area.addEventListener('focus',() => {
        area.style.backgroundColor= "#D4E3CD ";
    });

//it changes color if we press anywhere on the screen it is continuation for the above color change
    
    area.addEventListener('blur',() => {
         area.style.backgroundColor= "#fff ";
    }); 
