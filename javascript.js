const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
const btn = document.querySelector("#btn");
function random(number){
    return Math.floor(Math.random() * (number+1));
}
function bgChange(e) {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}
btn.addEventListener("click", bgChange);

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',()=> {
    alert("hello there");
});

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no();
// }

// let ask= prompt("Do you agree?");
// let confirm= (ask === 'yes')?
// ()=> alert("You agreed.") :
// ()=> alert("You canceled the execution.");

// confirm()
