/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 255.5,
        y: -162.66665649414062
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 252.5,
        y: 119.33334350585938
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 278.5,
        y: 151.33334350585938
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 252.5,
        y: 131.33334350585938
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.svg", {
        x: 256.5,
        y: -115.66665649414062
      }),
      new Costume("backdrop6", "./Stage/costumes/backdrop6.svg", {
        x: 272.5,
        y: 71.33334350585938
      }),
      new Costume("backdrop7", "./Stage/costumes/backdrop7.svg", {
        x: 242.5,
        y: 119.33334350585938
      }),
      new Costume("backdrop8", "./Stage/costumes/backdrop8.svg", {
        x: 268.5,
        y: 123.33334350585938
      }),
      new Costume("backdrop9", "./Stage/costumes/backdrop9.svg", {
        x: 259.5,
        y: 169.3333435058594
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
    this.vars.magic = 1;
    this.vars.canIMove = 0;
    this.vars.y = 0;
    this.vars.x = 0;
    this.vars.scrollTxtOutput = "I am too high!";
    this.vars.letterCountScrollTxt = 15;
    this.vars.chatHist = [
      "hi",
      "how do you do?",
      "1. CreativeCoderBS",
      "2. 3. bschwartz8",
      "2. 26. bschwartz8",
      "2. 28. bssummercoder",
      "hi",
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "I am too high!",
      "2. 52. bschwartz8",
      "2. 57. CreativeCoderBS",
      "2. 86. bschwartz8",
      "2. 89. bschwartz8"
    ];
    this.vars.players = [
      "1. CreativeCoderBS",
      "1. CreativeCoderBS",
      "3. bschwartz8",
      "4. bssummercoder",
      "5. bschwartz8",
      "6. bssummercoder",
      "7. bssummercoder",
      "8. CreativeCoderBS",
      "9. CreativeCoderBS",
      "10. bssummercoder",
      "11. bschwartz8",
      "12. CreativeCoderBS",
      "13. CreativeCoderBS",
      "14. bschwartz8",
      "15. bssummercoder",
      "16. bssummercoder",
      "17. bschwartz8",
      "18. CreativeCoderBS",
      "19. bssummercoder",
      "20. bssummercoder",
      "21. bssummercoder",
      "22. bschwartz8",
      "23. bschwartz8",
      "24. CreativeCoderBS",
      "1. CreativeCoderBS",
      "26. bschwartz8",
      "1. CreativeCoderBS",
      "28. CreativeCoderBS",
      "29. bschwartz8",
      "30. CreativeCoderBS",
      "31. bschwartz8",
      "32. CreativeCoderBS",
      "33. bschwartz8",
      "34. CreativeCoderBS",
      "35. CreativeCoderBS",
      "36. bschwartz8",
      "37. bschwartz8",
      "38. CreativeCoderBS",
      "39. bssummercoder",
      "40. bssummercoder",
      "41. bssummercoder",
      "42. bssummercoder",
      "43. CreativeCoderBS",
      "44. CreativeCoderBS",
      "45. CreativeCoderBS",
      "46. bschwartz8",
      "47. bschwartz8",
      "48. bssummercoder",
      "49. bschwartz8",
      "50. bschwartz8",
      "1. CreativeCoderBS",
      "52. CreativeCoderBS",
      "53. CreativeCoderBS",
      "54. bschwartz8",
      "55. bssummercoder",
      "1. CreativeCoderBS",
      "57. CreativeCoderBS",
      "58. bschwartz8",
      "59. bssummercoder",
      "60. bschwartz8",
      "61. CreativeCoderBS",
      "62. bssummercoder",
      "63. bschwartz8",
      "64. bschwartz8",
      "65. CreativeCoderBS",
      "66. bschwartz8",
      "67. CreativeCoderBS",
      "68. CreativeCoderBS",
      "69. bschwartz8",
      "70. bssummercoder",
      "71. CreativeCoderBS",
      "72. bschwartz8",
      "73. CreativeCoderBS",
      "74. CreativeCoderBS",
      "75. CreativeCoderBS",
      "76. bssummercoder",
      "77. bschwartz8",
      "78. bssummercoder",
      "79. bschwartz8",
      "80. bschwartz8",
      "81. bssummercoder",
      "82. CreativeCoderBS",
      "83. CreativeCoderBS",
      "84. bschwartz8",
      "1. CreativeCoderBS",
      "86. bssummercoder",
      "87. bssummercoder",
      "1. CreativeCoderBS",
      "89. bssummercoder",
      "90. CreativeCoderBS",
      "91. bschwartz8",
      "92. bssummercoder",
      "93. bschwartz8",
      "94. CreativeCoderBS",
      "95. CreativeCoderBS",
      "96. CreativeCoderBS",
      "97. bssummercoder",
      "98. bschwartz8",
      "99. bschwartz8",
      "100. bssummercoder",
      "101. bssummercoder"
    ];
    this.vars.users = ["CreativeCoderBS", "bssummercoder", "bschwartz8"];
  }

  *whenGreenFlagClicked() {
    this.restartTimer();
  }
}
