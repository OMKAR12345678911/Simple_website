


let m=1;
let max=100;
let attempts=1;
const rand=Math.floor(Math.random() *(max-m+1))+m;
console.log(rand);


function checkguess(){


let  guess=Number(document.getElementById("guess").value);
console.log(typeof(guess));
if(guess<m || guess>max || isNaN(guess)){

console.log("Invalid");
 typeDynamicText("Results","invalid input");
return;
}
else
{
    if(guess>rand ){
         typeDynamicText("Results","Less");
    }

    if(guess<rand ){

         typeDynamicText("Results","More");
         
    }


    if(rand==guess){
        typeDynamicText("Results","congradulations you have guessed the right number you took "+attempts+" attempts");
        const win=document.getElementById("win");
        win.currentTime=0;
        win.play();
        return;

    }

   if(rand-5==guess-5 || rand+5==guess+5 )
 {
    typeDynamicText("Results","Hot");

	}



 



    const incorrect=document.getElementById("incorrect");
    incorrect.currentTime=0;
    incorrect.play();

   attempts++;

}








}

function typeDynamicText(elementId, textToType) {
  const element = document.getElementById(elementId);
  
  // 1. Inject the text using textContent
  element.textContent = textToType;
  
  // 2. Count the characters (length of the string)
  const totalCharacters = textToType.length;
  
  // 3. Update the CSS variables dynamically
  element.style.setProperty('--steps', totalCharacters);
  element.style.setProperty('--width', `${totalCharacters}ch`);
}
