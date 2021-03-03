console.log("hello");
var button = document.querySelector("#button");

var thead = document.querySelectorAll('td');
button.addEventListener("click", function(){
  for(var i = 0; i<thead.length; i++){
    thead[i].textContent= '';
  }
});

for(var i = 0; i< thead.length;i++){
  thead[i].addEventListener("click", function(){
    if(this.textContent === ''){
      this.textContent = 'X'
    }else if (this.textContent === 'X') {
      this.textContent = 'O'

    }
    else  {
      this.textContent = ''

    }
  })
}
