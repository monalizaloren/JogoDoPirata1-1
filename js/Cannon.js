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
    /*funções push() e pop() são usadas para armazenar e restaurar a matriz de transformação atual. Isso é feito para que a rotação e a translação aplicadas ao canhão não afetem outros elementos na tela.*/
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    /*A função imageMode() é usada para definir o modo de desenho da imagem. Nesse caso, o modo é definido como CENTER, o que significa que a imagem é desenhada a partir do seu centro.*/
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    image(this.cannon_base,70, 20, 200, 200);
    
  }
}
