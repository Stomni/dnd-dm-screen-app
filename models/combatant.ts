export class Combatant {
  name: String;
  initiative: number;
  isDead: boolean;
  conditions: String[];
  isEnemy: boolean;
  hitpoints: number;
  maxHp: number;


  constructor({
    name,
    init,
    isDead,
    conditions,
    isEnemy,
    hitpoints,
    maxHp,
  }: {
    name: String;
    init: number;
    isDead: boolean;
    conditions: String[],
    isEnemy: boolean,
    hitpoints: number,
    maxHp: number,
  }) {
    this.name = name;
    this.initiative = init;
    this.isDead = isDead;
    this.conditions = conditions;
    this.isEnemy = isEnemy;
    this.hitpoints = hitpoints;
    this.maxHp = maxHp;
  }

  setInitiative(ini: number) {
    this.initiative = ini;
  }
}

