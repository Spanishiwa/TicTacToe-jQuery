class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", ( event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;

    try {
      this.game.playMove(pos);
    }

    catch (e) {
      alert(`${e.msg}`);
      return;
    }

    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      const winner = this.game.winner();
      const $figcaption = $("<figcaption>");

      if (winner) {
        $figcaption.html(`You win, ${winner}!`);
      }
      else {
        $figcaption.html(`It's a stalemate!`);
      }

      this.$el.append($figcaption);
      this.$el.off("click");
    }
  }


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
