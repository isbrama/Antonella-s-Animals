var animals = document.querySelectorAll(".animals");

for (var x = 0; x < animals.length; x++) {
  animals[x].addEventListener("click", function() {
    var btnPressed = this.name;
    makeSound(btnPressed);
  });

}

function makeSound(key) {
  switch (key) {

    case "cat":
      var myCat = new Audio('sounds/cat.mp3');
      myCat.play();
      break;

    case "cow":
      var myCow = new Audio('sounds/cow.mp3');
      myCow .play();
      break;

    case "lion":
      var myLion = new Audio('sounds/lion.mp3');
      myLion.play();
      break;

    case "monkey":
      var myMonkey = new Audio('sounds/monkey.mp3');
      myMonkey.play();
      break;

    case "pig":
      var myPig = new Audio('sounds/pig.mp3');
      myPig.play();
      break;

    case "rooster":
      var myRooster = new Audio('sounds/rooster.mp3');
      myRooster.play();
      break;

    case "wolf":
      var myWolf = new Audio('sounds/cat.mp3');
      myWolf.play();
      break;

    default:
      alert("error");

  }
}
