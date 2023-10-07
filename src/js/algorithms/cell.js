import "../../css/pathfinding.css";

export default class Cell {
  #role;
  #position;
  element;
  constructor(row, col) {
    this.#role = "empty";
    this.#position = { x: col, y: row };
    this.#createCellElement();
  }

  set type(type) {
    this.#role = type;
  }

  get type() {
    return this.#role;
  }

  #createCellElement() {
    const block = document.createElement("div");
    block.classList.add("cell");
    this.element = block;
  }

  /**
   * @returns {Object} The coordinates of the cell.
   */
  getCellPosition() {
    return this.#position;
  }

  updateBorder(cells) {
    const x = this.#position.x;
    const y = this.#position.y;
    // Top
    if (y > 0) {
      const similar = this.type === cells[y - 1][x].type;
      this.#updateBorderSide("top", similar);
      cells[y - 1][x].#updateBorderSide("bottom", similar);
    }

    // Bottom
    if (y < cells.length - 1) {
      const similar = this.type === cells[y + 1][x].type;
      this.#updateBorderSide("bottom", similar);
      cells[y + 1][x].#updateBorderSide("top", similar);
    }

    // Left
    if (x > 0) {
      const similar = this.type === cells[y][x - 1].type;
      this.#updateBorderSide("left", similar);
      cells[y][x - 1].#updateBorderSide("right", similar);
    }

    // Right
    if (x < cells.length - 1) {
      const similar = this.type === cells[y][x + 1].type;
      this.#updateBorderSide("right", similar);
      cells[y][x + 1].#updateBorderSide("left", similar);
    }
  }

  #updateBorderSide(side, similar) {
    if (similar)
      this.element.classList.remove(side);
    else
      this.element.classList.add(side);
  }

}
