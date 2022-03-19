/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.costume = "backdrop1";
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.visible = true;
    this.audioEffects.volume = 100;
    this.costume = "costume1";
    this.goto(-196, -81);
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.stage.vars.y = 0;
    this.stage.vars.x = 0;
    while (true) {
      this.stage.vars.y += -1;
      if (
        this.keyPressed("left arrow") ||
        (this.mouse.down && this.mouse.x < this.x)
      ) {
        this.direction = -90;
        this.stage.vars.x += -1;
      }
      if (
        this.keyPressed("right arrow") ||
        (this.mouse.down && this.mouse.x > this.x)
      ) {
        this.direction = 90;
        this.stage.vars.x += 1;
      }
      this.stage.vars.x = this.stage.vars.x * 0.9;
      this.x += this.stage.vars.x;
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.y += 1;
      }
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.y += 1;
      }
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.y += 1;
      }
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.y += 1;
      }
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.y += -4;
        this.x += this.stage.vars.x * -1;
        if (
          this.keyPressed("up arrow") ||
          (this.mouse.down && this.mouse.y > this.y)
        ) {
          this.stage.vars.y = 17;
          if (this.stage.vars.x > 0) {
            this.stage.vars.x = -10;
          } else {
            this.stage.vars.x = 10;
          }
        } else {
          this.stage.vars.x = 0;
        }
      }
      this.y += this.stage.vars.y;
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.y += this.stage.vars.y - this.stage.vars.y * 2;
        this.stage.vars.y = 0;
      }
      this.y += -1;
      if (
        (this.keyPressed("up arrow") ||
          (this.mouse.down && this.mouse.y > this.y)) &&
        this.touching(Color.rgb(0, 0, 0))
      ) {
        this.stage.vars.y = 15;
      }
      this.y += 1;
      if (
        this.touching(Color.rgb(89, 212, 39)) ||
        this.touching(Color.rgb(205, 125, 47))
      ) {
        this.costume = "costume2";
        yield* this.wait(0.1);
        this.costume = "costume1";
        this.goto(-196, -81);
      }
      if (this.x > 222) {
        this.stage.costume = "next backdrop";
        this.goto(-196, -81);
      }
      if (this.y < -180) {
        this.goto(-196, -81);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {}
}
