const text = [' Programmer()',' Chess Player()', ' Good Typer()', ' Web developer()'];
let count = 0;
let index = 0;
let currentText = '';
let letter='';

(function type(){
  if(count===text.length){
    count=0;
  }
  currentText = text[count];
  letter = currentText.slice(0,++index);

  document.querySelector(".first_p").textContent=letter;

  if(letter.length===currentText.length){
    count++;
    index=0;

  }
  setTimeout(type,300);
  

})();
