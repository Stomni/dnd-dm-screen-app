interface attributes {
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number,
}
interface ability {
    name: String,
    desc: String,
}

export interface Enemy {
    name: String,
    hitpoints: number,
    attributes?: attributes,
    abilities?: ability[],
    attacks?: ability[],
    isActive: boolean,
}