export default class game extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super(game);
    }
  
    init(datos) {
     
    }
  
    create() {
      // todo / para hacer: texto de puntaje
      const map = this.make.tilemap({ key: "map" });
      
      const capaFondo = map.addTilesetImage("imagen", "tilesFondo");
    const capaPlataform = map.addTilesetImage(
      "muro",
      "tilesPlataforma"
    );

    
    const imagenLayer = map.createLayer("background", capaFondo, 0, 0);
    const plataformaLayer = map.createLayer("platform", capaPlataform, 0, 0);
    const objectosLayer = map.getObjectLayer("objects");
  
      plataformaLayer.setCollisionByProperty({ colision: true });
  
      console.log("spawn point personaje", objectosLayer);
  
      // crear el jugador
     
      let spawnPoint = map.findObject("objects", (obj) => obj.name === "personaje");
      console.log(spawnPoint);
      // The player and its settings
      this.jugador = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "personaje");
      this.jugador.setBounce(0.1);
      this.jugador.setCollideWorldBounds(true);
    }
}

update()