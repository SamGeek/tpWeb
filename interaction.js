
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.posInitialeX = 0;
  this.posInitialeY = 0;
  this.posFinaleX = 0;
  this.posFinaleY = 0;
  this.canvas = canvas;
  console.log("Le canva original ",canvas)
  console.log("mon canvas ",this.canvas)
  this.isPressed = false;
  // Developper les 3 fonctions gérant les événements

  // Associer les fonctions précédentes aux évènements du canvas.
  this.canvas.addEventListener('mousedown', this.mouseDown.bind(this), false);
  this.canvas.addEventListener('mousemove', this.mouseMove.bind(this), false);
  this.canvas.addEventListener('mouseup', this.mouseUp.bind(this), false);

};

DnD.prototype.mouseDown = function (evt) {
  var rect = getMousePosition(this.canvas, evt)
  //console.log("mon canvas dans le down ",this.canvas)
  this.posInitialeX = rect.x;
  this.posInitialeY = rect.y;
  this.isPressed = true;
  //console.log("Les coordonnees sur le down sont"+rect.x+" "+rect.y)
};


DnD.prototype.mouseMove = function (evt) {
  if(this.isPressed){
    var rect = getMousePosition(this.canvas, evt)
    this.posFinaleX = rect.x;
    this.posFinaleY = rect.y;
   // console.log("Les coordonnees sur le up sont"+rect.x+" "+rect.y)
  }
};


DnD.prototype.mouseUp = function (evt) {
  if(this.isPressed){
    var rect = getMousePosition(this.canvas, evt)
    this.posFinaleX = rect.x;
    this.posFinaleY = rect.y;
   // console.log("Les coordonnees sur le up sont"+rect.x+" "+rect.y)
    this.isPressed = false;
  }
  
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
 // console.log("le canvas recu en params ",canvas)
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



