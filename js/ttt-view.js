class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
  }

  bindEvents() {
    this.$el.on("click", "li", ( event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {}


  setupBoard() {
    const $board = $("<ul>");
    $board.addClass("board");

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $cell = $("<li>");
        $cell.data("pos", [rowIdx, colIdx]);

        $board.append($cell);
      }
    }

    this.$el.append($board);
  }
}

module.exports = View;
