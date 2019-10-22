class Grid {
  constructor(size) {
    this.size = size;
    this.grid = this.init();
  }
  init() {
    let grid = [];
    for (let i = 0; i < this.size; i++) {
      grid[i] = [];
      for (let j = 0; j < this.size; j++) {
        grid[i].push('');
      }
    }
    return grid;
  }
  // 把 空格子 挑出来
  useFilCell() {
    let cells = [];
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.grid[i][j] == '') {
          cells.push({
            i, j
          })
        }
      }
    }
    return cells;
  }
  // 从一堆空盒子中随机拿一个盒子放入一个2或者4
  selectCell() {
    let unUsed = this.useFilCell(); // 取到 cells
    let index = Math.floor(Math.random() * unUsed.length);  // 随机cells里的一个
    return unUsed[index];
  }
}
module.exports = Grid;