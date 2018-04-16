/**
 * Kanban Board View
 * @copyright Bill Robitske, Jr. 2018
 * @author    Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license   MIT
 */

import ListView from './list-view';

export default class BoardView {
  public readonly element: Element;

  constructor() {
    this.element = BoardView.createElement();
    BoardView.addStyle();
  }

  public set title(value: string) {
    this.element.querySelector('.brj-kanban-board__title').innerHTML = value;
  }

  public addListView(listView: ListView): BoardView {
    this.element.querySelector('.brj-kanban-board__lists').appendChild(listView.element);
    return this;
  }

  private static createElement(): Element {
    const section = document.createElement('section');
    section.classList.add('container');
    section.innerHTML = `<div class="row">
    <div class="col-sm">
    <h1 class="brj-kanban-board__title"></h1>
    </div>
    </div>
    <div class="row brj-kanban-board__lists"></div>`;
    return section;
  }

  private static addStyle(): void {
    if (document.head.querySelector('style[id="brj-kanban-board-style"]')) return;
    const style = document.createElement('style');
    style.innerHTML = ``;
    document.head.appendChild(style);
  }
}