export default class precarga extends Phaser.Scene {
    // escena para optimiozar tiempos
    // carga el preload solo una vez y sirve para todo el juego
    constructor() {
      // key of the scene
      super("precarga");
    }
     preload() {
        this.load.tilemapTiledJSON("map", "./public/asssets/prueba.json");
        this.load.image("tilesPlataforma", "./public/asssets/muro.png");
        this.load.image("tilesFondo", "./public/asssets/imagen.png");
     }
    }
