
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

//Drawing

function Drawing() {
    // Définir ici les attributs de la 'classe'
    this.forms = new Array();
};

//Shape // faire de lheritage avec les sous classes

function Shape(initX, initY,finalX, finalY,thickness, color) {
    // Définir ici les attributs de la 'classe'
    this.color = color;
    this.thickness = thickness;
    this.initX = initX
    this.initY = initY
    this.finalX = finalX
    this.finalY = finalY
};

//Rectangle
function Rectangle(initX, initY, finalX, finalY ,thickness,color) {
    // Définir ici les attributs de la 'classe'
    Shape.call(this,initX, initY,finalX, finalY,thickness,color);

    this.width = Math.abs(initX-finalX)
    this.height = Math.abs(initY-finalY)
};


//Line
function Line(initX, initY, finalX, finalY ,thickness,color) {
    // Définir ici les attributs de la 'classe'
    Shape.call(this,initX, initY,finalX, finalY,thickness, color);
    
};


Shape.prototype.initPaint = function(ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.color
    ctx.strokeWidth = this.thickness
  };


Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    //Done into the shape
    //this.initPaint(ctx);
    ctx.strokeStyle = this.color
    ctx.strokeWidth = this.thickness
    ctx.rect(this.initX, this.initY, this.finalX,   this.finalY);
    ctx.stroke();
  };
  
  Line.prototype.paint  = function(ctx) {
    //TODO Manager color
    //Done into the shape
   // this.initPaint(ctx)
    ctx.strokeStyle = this.color
    ctx.strokeWidth = this.thickness
    ctx.beginPath();
    ctx.moveTo(this.initX, this.initY);
    ctx.lineTo(this.finalX, this.finalY);
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  
