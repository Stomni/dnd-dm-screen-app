import { Combatant } from "./combatant";
import { Enemy } from "./enemy";
import {Player} from "./player";

export class User {
    players: Player[];
    enemys: Enemy[];
    combatants: Combatant[];
    activeCombat: boolean;

    constructor({players, enemys, combatants, activeCombat}: {players: Player[], enemys: Enemy[], combatants: Combatant[], activeCombat: boolean}) {
        this.players = players;
        this.enemys = enemys;
        this.combatants = combatants;
        this.activeCombat = activeCombat;
    }
}