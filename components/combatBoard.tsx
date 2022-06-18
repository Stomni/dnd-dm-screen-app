import { Button, Flex, Heading, List, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { User } from "../models/user";
import { theme } from "../theme";
import { CombatModal } from "./combatModal";

export default function CombatBoard({
  user,
  setUser,
}: {
  user: User;
  setUser: Function;
}) {
  const [initiative, setInitiative] = useState(0);
  const [roundCounter, setRoundCounter] = useState(1);
  // condition tracker
  useEffect(() => {});

  return (
    <Flex
      width={"60%"}
      flexDirection="column"
      bgColor={theme.colors.dark.bgGradient}
      rounded="6"
      boxShadow={"dark-lg"}
      padding=".5rem"
    >
      <Heading size={"md"} textAlign="center">
        Combat Helper
      </Heading>
      <Heading size="sm">{"Rounds: " + roundCounter}</Heading>
      <List spacing={".2em"} padding="1em">
        {user.combatants.map((combatant, index) => {
          
          return (
            <Flex
              key={index}
              padding={".3em"}
              borderRadius="5"
              width={"100%"}
              justifyContent="space-between"
              bgColor={initiative === index ? theme.colors.dark.tertiary : ""}
            >
              <CombatModal combatant={combatant} user={user} setUser={setUser}></CombatModal>
              {combatant.isEnemy && (
                <Text>{"HP: " + (combatant.hitpoints)}</Text>
              )}
              {combatant.conditions.length !== 0 && <Text>{combatant.conditions.join(" | ")}</Text>}
              {"Initiative: " + combatant.initiative}
            </Flex>
          );
        })}
      </List>
      <Button
        onClick={() => {
          if (initiative >= user.combatants.length - 1) {
            setInitiative(0);
            setRoundCounter(roundCounter + 1);
          } else {
            setInitiative(initiative + 1);
          }
        }}
      >
        Next
      </Button>
    </Flex>
  );
}
