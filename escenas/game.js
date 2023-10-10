export default class Game extends Phaser.Scene {
    constructor() {
      super("Game"); // Debes pasar un objeto con la propiedad 'key'
    }
  
    create() {
      // Crear el mapa y las capas
      const mapa = this.make.tilemap({ key: "mapa" });
      const capaFondo = mapa.addTilesetImage("Fondo", "tilesFondo");
      const capaPlataform = mapa.addTilesetImage("Plataforma", "tilesPlataforma");
  
      const FondoLayer = mapa.createLayer("background", capaFondo, 0, 0);
      const PlataformaLayer = mapa.createLayer("platform", capaPlataform, 0, 0);
  
      // Configurar colisiones
      PlataformaLayer.setCollisionByProperty({ collision: true });
  
      // Encontrar el punto de inicio del personaje
      const spawnPoint = mapa.findObject("objects", (obj) => obj.name === "personaje");
      if (!spawnPoint) {
        console.error("No se pudo encontrar el punto de inicio del personaje");
        return;
      }
  
      // Crear el jugador
      this.jugador = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "p");
      this.jugador.setBounce(0.1);
      this.jugador.setCollideWorldBounds(true);
  
      // Imprimir información de depuración
      console.log("Spawn point personaje", spawnPoint);
    }
  }
    
   // this.physics.add.collider(this.jugador, plataformaLayer);
    
   // this.physics.add.collider(
      //this.jugador,
     // null,
    //this
    //);


