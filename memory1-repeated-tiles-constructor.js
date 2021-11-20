var Tile = function(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
};

Tile.prototype.draw = function() {
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);
    image(getImage("avatars/leaf-green"), this.x, this.y, this.size, this.size);
};

// Create the array of tiles at appropriate positions
var tiles = [];
var NUM_COLS = 5;
var NUM_ROWS = 4;
for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        var tileX = i * 54 + 5;
        var tileY = j * 54 + 40;
        tiles.push(new Tile(tileX, tileY));
    }
}

// Start by drawing them all face down
for (var i = 0; i < tiles.length; i++) {
    tiles[i].draw();
}
