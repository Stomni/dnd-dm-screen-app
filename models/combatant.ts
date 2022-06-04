export class Combatant {
  name: String;
  initiative: number;
  isDead: boolean;

  constructor({
    name,
    init,
    isDead,
  }: {
    name: String;
    init: number;
    isDead: boolean;
  }) {
    this.name = name;
    this.initiative = init;
    this.isDead = isDead;
  }

  setInitiative(ini: number) {
    this.initiative = ini;
  }
}

export class Enemy extends Combatant {
  hitpoints: number;

  constructor({
    name,
    init,
    hp,
    isDead,
  }: {
    name: String;
    init: number;
    hp: number;
    isDead: boolean;
  }) {
    super({ name, init, isDead });
    this.hitpoints = hp;
  }
}
