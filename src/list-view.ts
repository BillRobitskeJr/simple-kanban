/**
 * Kanban List View
 * @copyright Bill Robitske, Jr. 2018
 * @author    Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license   MIT
 */

import CardView from './card-view';

export default class ListView {
  public readonly element: Element;

  constructor() {
    this.element = ListView.createElement();
    ListView.addStyle();
  }

  public set title(value: string) {
    this.element.querySelector('.brj-kanban-list__title').innerHTML = value;
  }

  public addCardView(cardView: CardView): ListView {
    this.element.querySelector('.brj-kanban-list__cards').appendChild(cardView.element);
    return this;
  }

  private static createElement(): Element {
    const section = document.createElement('section');
    section.classList.add('col');
    section.classList.add('border');
    section.innerHTML = `<div class="row">
    <div class="col">
    <h2 class="h5 brj-kanban-list__title"></h2>
    </div>
    </div>
    <div class="row">
    <div class="col">
    <div class="card-columns brj-kanban-list__cards"></div>
    </div>
    </div>`;
    return section;
  }

  private static addStyle(): void {
    if (document.head.querySelector('style[id="brj-kanban-list-style"]')) return;
    const style = document.createElement('style');
    style.innerHTML = `.brj-kanban-list__cards {
      column-count: 1;
    }`;
    document.head.appendChild(style);
  }
}
