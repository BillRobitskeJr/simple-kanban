/**
 * Simple Kanban Entrypoint
 * @copyright Bill Robitske, Jr. 2018
 * @author    Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license   MIT
 */

import Card from './card';

import BoardView from './board-view';
import ListView from './list-view';
import CardView from './card-view';

namespace BRJ.SimpleKanban {

  interface BoardsDict {
    [selector: string]: BoardView;
  }
  const boards: BoardsDict = {};

  function attachBoard(selector: string, testConfig: any): void {
    const container = document.querySelector(selector);
    if (!container) return;
    const board = new BoardView();
    board.title = testConfig.name;
    container.appendChild(board.element);
    boards[selector] = board;
  }

  function _testAddList(selector: string, list: ListView): void {
    boards[selector].addListView(list);
  }

  function _testAddCard(selector: string, card: Card): void {
    var cardView = new CardView();
    boards[selector].element.querySelector('.brj-kanban-board__lists').appendChild(cardView.element);
    cardView.update(card);
  }

  // Define public API interface
  (<any>window).BRJ = (<any>window).BRJ || {};
  (<any>window).BRJ.SimpleKanban = Object.freeze({
    attachBoard,
    _testAddCard,
    _testAddList,
    Card,
    ListView,
    CardView
  });
}