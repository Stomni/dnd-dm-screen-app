export interface attributes {
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number,
}
export interface ability {
    name: String,
    desc: String,
}

export interface movement {
    normal: number,
    climbing: number,
    burrowing: number,
    swimming: number,
    flying: number,
}

export interface senses {
    darkvision: number,
    blindsight: number,
    truesight: number,
    tremorsense: number,
}

export interface Enemy {
    name: String,
    hitpoints: number,
    //armorclass
    armorclass: number,
    movements: movement,
    senses: senses,
    vulnerbilities: String[],
    dmgResistances: String[],
    dmgImmunities: String[],
    conImmunities: String[],
    attributes?: attributes,
    abilities: ability[],
    attacks: ability[],
    isActive: boolean,
}