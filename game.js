window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;       
  var chosenCategory;     
  var getHint ;         
  var word ;              
  var guess ;             
  var guesses = [ ];      
  var lives ;             
  var counter ;          
  var space;              

 
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
     myButtons.innerHTML="";
    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  

  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Countries";
    }
  }

 
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  

   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }
check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
      
      } else {
        comments();
      }
    }
  }
  

function play () {
    categories = [
        
        ["harry-potter", "aladdin", "forrest-gump", "gladiator", "titanic"],
        ["russia", "italy", "brazil", "argentina", "china"]];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
  

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    buttons();
    selectCat();
    result();
    comments();
    selectCat();
  
  }

  play();
  
  

    hint.onclick = function() {

      hints = [
        ["The school of magic", "A poor street urchin who spends his time stealing food from the marketplace in the city of Agrabah", "Famous movie with Tom Hanks", "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery", "British passenger liner that sank in the North Atlantic Ocean in 1912 after the ship struck an iceberg" ],
        ["Matryoshka is the famous toy", "Pasta, Cheese, Coliseum","Carnival", "Che Guevara, Maradona, Tango", "The great wall 8,850 km long"]
];
    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };


  reset.onclick = function() {
    play();
  }
}