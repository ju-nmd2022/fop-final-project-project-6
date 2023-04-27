// let tileMap = {
//   column: 10,
//   row: 10,
//   tilesize: 50,
//   layers: [
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
//     [
//       20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38,
//       39, 40,
//     ],
//   ],
// };

var map = {
  cols: 8,
  rows: 8,
  tsize: 64,
  tiles: [
    1, 3, 3, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1,
    1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1,
  ],
  getTile: function (col, row) {
    return this.tiles[row * map.cols + col];
  },
};

Game.load = function () {
  return [Loader.loadImage("tiles", "...designs/tiles.png")];
};

Game.init = function () {
  this.tileAtlas = Loader.getImage("tiles");
};

Game.update = function (delta) {};

Game.render = function () {
  for (var c = 0; c < map.cols; c++) {
    for (var r = 0; r < map.rows; r++) {
      var tile = map.getTile(c, r);
      if (tile !== 0) {
        // 0 => empty tile
        this.ctx.drawImage(
          this.tileAtlas, // image
          (tile - 1) * map.tsize, // source x
          0, // source y
          map.tsize, // source width
          map.tsize, // source height
          c * map.tsize, // target x
          r * map.tsize, // target y
          map.tsize, // target width
          map.tsize // target height
        );
      }
    }
  }
};
