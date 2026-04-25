// Code by Doubao AI
class MapScene {
    preload() {
        this.load.tilemapTiledJSON('map', 'map.tmj');
        this.load.tilemapTiledJSON('tileset', 'tiles/vtileset.tsj');
    }

    create() {
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('tiles', 'tileset');

        map.createLayer('bg', tileset, 0, 0);
        map.createLayer('dirt', tileset, 0, 0);
        map.createLayer('castle', tileset, 0, 0);

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.input.on('pointermove', (pointer) => {
            if (pointer.isDown) {
                this.cameras.main.scrollX -= pointer.movementX;
                this.cameras.main.scrollY -= pointer.movementY;
            }
        });
      alert("Done!");
    }
}

new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: MapScene
});
