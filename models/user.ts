import { Combatant } from "./combatant";
import { Enemy } from "./enemy";
import {Player} from "./player";

export class User {
    players: Player[];
    enemys: Enemy[];
    combatants: Combatant[];

    constructor({players, enemys, combatants}: {players: Player[], enemys: Enemy[], combatants: Combatant[]}) {
        this.players = players;
        this.enemys = enemys;
        this.combatants = combatants;
    }
}