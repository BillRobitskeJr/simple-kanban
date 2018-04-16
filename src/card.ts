/**
 * Kanban Card Model
 * @copyright Bill Robitske, Jr. 2018
 * @author    Bill Robitske, Jr. <bill.robitske.jr@gmail.com>
 * @license   MIT
 */

export interface CardConfig {
  title: string;
  added: Date;
  description?: string;
  due?: Date;
}

export default class Card {
  public title: string;
  public added: Date;
  public description: string;
  public due: Date|null;

  constructor(config: CardConfig) {
    this.title = config.title;
    this.added = config.added;
    this.description = config.description || '';
    this.due = config.due || null;
  }
}
