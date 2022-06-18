import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { User } from "../models/user";
import { theme } from "../theme";

export function EnemyBoard({
  user,
  setUser,
}: {
  user: User;
  setUser: Function;
}) {
  const [show, setShow] = useState(true);
  return (
    <Flex flexDirection={"column"}>
      <Flex flexDirection={"row"} justifyContent="center">
        <Heading size={"md"} textAlign="center">
          Session Enemys
        </Heading>
        <IconButton
        bottom={".4em"}
          variant={"unstyled"}
          onClick={() => setShow(!show)}
          aria-label="show or hide session enemys"
          icon={show ? <ViewIcon /> : <ViewOffIcon />}
        />
      </Flex>
      {show && (
        <Grid templateColumns={"repeat(2, 1fr)"} gap="2em">
          {user.enemys.map((enemy, index) => {
            if (enemy.isActive) {
              const enemyMovements = Object.entries(enemy.movements).filter(
                (movement) => movement[1] !== 0
              );
              const enemySenses = Object.entries(enemy.senses).filter(
                (senses) => senses[1] !== 0
              );
              return (
                <GridItem key={index}>
                  <Flex
                    flexDirection={"column"}
                    width="100%"
                    bg={theme.colors.dark.bgGradient}
                    borderRadius="5"
                    padding={".5em"}
                  >
                    <Text fontWeight={"bold"} fontSize="xl">
                      {enemy.name}
                    </Text>
                    <Text>{"Hitpoints: " + enemy.hitpoints}</Text>
                    {enemy.armorclass !== 0 && (
                      <Text>{"AC: " + enemy.armorclass}</Text>
                    )}
                    {enemyMovements.length !== 0 && (
                      <Text>
                        {enemyMovements
                          .map((movement) => `${movement[0]}: ${movement[1]} `)
                          .join("| ")}
                      </Text>
                    )}
                    {enemy.attributes && (
                      <Text>
                        {"Str: " +
                          enemy.attributes["str"] +
                          " | Dex: " +
                          enemy.attributes["dex"] +
                          " | Con: " +
                          enemy.attributes["con"] +
                          " | Int: " +
                          enemy.attributes["int"] +
                          " | Wis: " +
                          enemy.attributes["wis"] +
                          " | Cha: " +
                          enemy.attributes["cha"]}
                      </Text>
                    )}
                    {enemy.vulnerbilities.length !== 0 && (
                      <Text>
                        {"Vulnerbilites: " + enemy.vulnerbilities.join(" | ")}
                      </Text>
                    )}
                    {enemy.dmgResistances.length !== 0 && (
                      <Text>
                        {"Resistances: " + enemy.dmgResistances.join(" | ")}
                      </Text>
                    )}
                    {enemy.dmgImmunities.length !== 0 && (
                      <Text>
                        {"Immunities: " + enemy.dmgImmunities.join(" | ")}
                      </Text>
                    )}
                    {enemy.conImmunities.length !== 0 && (
                      <Text>
                        {"Condition Imm. : " + enemy.conImmunities.join(" | ")}
                      </Text>
                    )}
                    {enemySenses.length !== 0 && (
                      <Text>
                        {enemySenses
                          .map((sense) => `${sense[0]}: ${sense[1]}`)
                          .join(" | ")}
                      </Text>
                    )}
                    {enemy.abilities.length !== 0 && <Divider />}
                    {enemy.abilities.length !== 0 &&
                      enemy.abilities.map((ability, index) => (
                        <Flex key={index} gap={"1"} paddingBottom=".5em" flexDir={"column"}>
                          <Text fontWeight={"bold"}>{ability.name}</Text>
                          <Text>{ability.desc}</Text>
                        </Flex>
                      ))}
                    {enemy.attacks.length !== 0 && <Divider />}
                    {enemy.attacks.length !== 0 &&
                      enemy.attacks.map((attack, index) => (
                        <Flex key={index} gap={"1"} paddingBottom=".5em" flexDir={"column"}>
                          <Text fontWeight={"bold"}>{attack.name}</Text>
                          <Text>{attack.desc}</Text>
                        </Flex>
                      ))}
                  </Flex>
                </GridItem>
              );
            }
          })}
        </Grid>
      )}
    </Flex>
  );
}
