class Cannon {
  constructor(x, y, width, height, angle) {
    /* as propriedades x, y, width, height e angle são atribuídas às respectivas propriedades do objeto usando a palavra-chave "this". */
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/canon.png");
    this.cannon_base = loadImage("assets/cannonBase.png");
  }
  display() {
    
  }
}
