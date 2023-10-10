export default class precarga extends Phaser.Scene {
    // escena para optimiozar tiempos
    // carga el preload solo una vez y sirve para todo el juego
    constructor() {
      // key of the scene
      super("precarga");
    }
     preload() {
        this.load.tilemapTiledJSON("mapa", "./public/assets/pruebe.json");
        this.load.image("tilesPlataforma", "./public/assets/Plataforma.png");
        this.load.image("tilesFondo", "./public/assets/Fondo.png");
        this.load.image("p", "./public/assets/boceto pj.png");
     }
    }
  
      
    
    
