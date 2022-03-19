/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 92.5,
        y: 31.333343505859375
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.KEY_PRESSED, { key: "p" }, this.whenKeyPPressed)
    ];
  }

  *scrollText(Text) {
    this.stage.vars.scrollTxtOutput = 0;
    this.stage.vars.letterCountScrollTxt = 1;
    for (let i = 0; i < Text.length; i++) {
      this.stage.vars.scrollTxtOutput =
        "" +
        this.stage.vars.scrollTxtOutput +
        Text[this.stage.vars.letterCountScrollTxt - 1];
      this.stage.vars.letterCountScrollTxt += 1;
      yield* this.sayAndWait(this.stage.vars.scrollTxtOutput, 0.05);
      yield;
    }
    yield* this.sayAndWait(this.stage.vars.scrollTxtOutput, 0.95);
  }

  *whenGreenFlagClicked() {
    this.stage.vars.players.push("" + 1 + /* no username */ "");
    this.stage.vars.chatHist.push(
      "" +
        2 +
        ("" +
          (this.stage.vars.players.length + 1) +
          ("" + ". " + this.stage.vars.users[this.random(1, 3) - 1]))
    );
    while (true) {
      if (this.mouse.down && this.touching("mouse")) {
        yield* this.askAndWait(0);
        this.stage.vars.chatHist.push(this.answer);
        yield* this.scrollText(this.answer);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    /* TODO: Implement data_hidelist */ null;
    while (true) {
      yield* this.wait(10);
      this.stage.vars.players.push(
        "" +
          (this.stage.vars.players.length + 1) +
          ("" + ". " + this.stage.vars.users[this.random(1, 3) - 1])
      );
      yield;
    }
  }

  *whenKeyPPressed() {
    /* TODO: Implement data_showlist */ null;
  }
}
