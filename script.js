const mybox = document.getElementById('catFactDiv')
const catfactur1 = "https://catfact.ninja/fact"

async function catfact(){
    const response = await fetch(catfactur1);
    const data = await response.json();
    console.log(data);
    mybox.innerText = data.fact;

}

btn.addEventListener('click', () =>{
    console.log("btn clicked");
    catfact()
})