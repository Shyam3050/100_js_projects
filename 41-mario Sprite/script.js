window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  console.log(canvas);
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;
  class Mario {
    constructor(canvasWidth, canvasHeight) {
      this.img = document.getElementById("runRigt");
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.spriteWidth = 62.6;
      this.spriteHeight = 62.6;
      this.width = this.spriteWidth;
      this.height = this.spriteHeight;
      this.scale = 8;
      this.x = this.canvasWidth / 2 - this.width * this.scale / 2;
      this.y = this.canvasHeight / 2 - this.height  * this.scale/ 2;
        // this.x = 0;
        // this.y = 0;
      this.frameX = 0;
      this.frameY = 0;
    }
    draw(context) {
      context.drawImage(
        this.img,
        this.frameX * this.spriteWidth,
        this.frameY * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
      this.scale * this.width,
      this.scale * this.height
      );
    }
    update() {
      if (this.frameX == 8) {
        this.frameX = 0;
      } else this.frameX++;
    }
  }
  const runRigt = new Mario(canvas.width, canvas.height);
  //   console.log(runRigt);

  function animate() {
    // console.count("1");
    ctx.clearRect(0, 0, 500, 500);
    runRigt.draw(ctx);
    runRigt.update();
    requestAnimationFrame(animate);
  }
  animate();
});
