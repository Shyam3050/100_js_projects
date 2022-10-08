window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class Mandrake {
    constructor(canvasWidth, canvasHeight) {
      this.image = document.getElementById("mandrake");
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.spriteWidth = 256;
      this.spriteHeight = 256;
      this.width = this.spriteWidth;
      this.height = this.spriteHeight;
      this.scale = 1.5;
      this.x = this.canvasWidth / 2 - (this.width * this.scale) / 2;
      this.y = this.canvasHeight / 2 - (this.height * this.scale) / 2;
      this.minFrame = 0;
      this.maxframe = 355;
      this.frame = 0;
      this.frameX = 0;
      this.frameY = 0;
    }
    draw(context) {
      context.drawImage(
        this.image,
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
      console.count("1");
      // if (this.frame < this.maxframe) this.frame++;
      // else this.frame = this.minFrame;
      this.frame = this.frame < this.maxframe ? ++this.frame : this.minFrame;
      console.log(this.frame);
      this.frameX = this.frame % 18;
      this.frameY = Math.floor(this.frame / 18);
    }
    setAnimation(newMinFrame, newMaxFrame) {
      this.minFrame = newMinFrame;
      this.maxframe = newMaxFrame;
      this.frame = this.minFrame;
    }
  }
  const mandrake = new Mandrake(canvas.width, canvas.height);
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mandrake.draw(ctx);
    mandrake.update();
    if (mandrake.maxframe === mandrake.frame) {
      return;
    }
    requestAnimationFrame(animate);
  }
  animate();

  const all = document.getElementById("all");
  all.addEventListener("click", () => {
    mandrake.setAnimation(0, 355);
    animate();
  });
  const grow = document.getElementById("grow");
  grow.addEventListener("click", () => {
    mandrake.setAnimation(0, 75);
    animate();
  });
  const wink = document.getElementById("wink");
  wink.addEventListener("click", () => {
    mandrake.setAnimation(76, 112);
    animate();
  });
  const float = document.getElementById("float");
  float.addEventListener("click", () => {
    mandrake.setAnimation(113, 262);
    animate();
  });
  const hide = document.getElementById("hide");
  hide.addEventListener("click", () => {
    mandrake.setAnimation(263, 355);
    animate();
  });
});
