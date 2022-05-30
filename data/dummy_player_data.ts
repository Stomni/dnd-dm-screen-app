import { Player } from "../models/player";

export const DummyPlayers: Player[] = [
  {
    name: "Benjamin J.",
    level: 9,
    passiveInsight: 18,
    hitpoints: 60,
    passivePerception: 15,
    languages: ["Common", "Elven"],
    darkvision: true,
  },
  {
    name: "Gellea Felsenfaust",
    level: 9,
    hitpoints: 90,
    passiveInsight: 10,
    passivePerception: 13,
    languages: ["Common", "Dwarvish", "Draconic"],
    darkvision: true,
  },
  {
    name: "Zesa of the Suncoat",
    level: 9,
    hitpoints: 75,
    passiveInsight: 13,
    passivePerception: 15,
    languages: ["Common", "Giant", "Draconic"],
    darkvision: true,
  },
];
