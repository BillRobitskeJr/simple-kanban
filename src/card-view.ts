/**
 * Kanban Card View
 * @copyright Bill Robitske, Jr. 2018
 * @author    Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license   MIT
 */

import Card from './card';

export default class CardView {
  public readonly element: Element;
  private _card: Card|null;

  constructor() {
    this.element = CardView.createElement();
    CardView.addStyle();
    this._card = null;
  }

  public update(card: Card): CardView {
    this._card = card;
    this.element.querySelector('.brj-kanban-card__title').innerHTML = card.title;
    this.element.querySelector('.brj-kanban-card__description').innerHTML = card.description;
    this.element.querySelector('.brj-kanban-card__added').innerHTML = card.added.toLocaleDateString();
    this.element.querySelector('.brj-kanban-card__due').innerHTML = card.due ? card.due.toLocaleDateString() : '';
    return this;
  }

  private static createElement(): Element {
    const element = document.createElement('article');
    element.classList.add('card');
    element.classList.add('shadow-sm');
    element.innerHTML = `<div class="card-body">
    <h6 class="card-title brj-kanban-card__title"></h6>
    <p class="card-text brj-kanban-card__description"></p>
    <p class="card-text">
    <span class="brj-kanban-card__added"></span>
    <span class="brj-kanban-card__due"></span>
    </p>
    </div>`;
    return element;
  }

  private static addStyle(): void {
    if (document.querySelector('style#brj-kanban-card-style')) return;
    const style = document.createElement('style');
    style.setAttribute('id', 'brj-kanban-card-style');
    style.innerHTML = `.brj-kanban-card__added:before {
      content: 'Added: ';
    }
    .brj-kanban-card__due:not(:empty):before {
      content: 'Due: ';
    }`;
    document.head.appendChild(style);
  }
}