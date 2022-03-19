import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";

const stage = new Stage({ costumeNumber: 9 });

const sprites = {
  Sprite1: new Sprite1({
    x: 35.98688782619915,
    y: 113,
    direction: 90,
    costumeNumber: 1,
    size: 98.4728757526,
    visible: true
  }),
  Sprite2: new Sprite2({
    x: -102,
    y: 162,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
