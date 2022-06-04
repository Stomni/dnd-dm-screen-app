import { Button, Flex, Heading, List, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Combatant, Enemy } from "../models/combatant";
import { User } from "../models/user";

export default function CombatBoard({
  user,
  setUser,
}: {
  user: User;
  setUser: Function;
}) {
  const [initiative, setInitiative] = useState(0);
  const [roundCounter, setRoundCounter] = useState(1);

  useEffect(() => {});

  return (
    <Flex
      width={"40%"}
      flexDirection="column"
      bgColor={"#10495F"}
      rounded="6"
      boxShadow={"dark-lg"}
      padding=".5rem"
    >
      <Heading size={"md"} textAlign="center">
        Combat Helper
      </Heading>
      <Heading size="sm">{"Rounds: " + roundCounter}</Heading>
      <List spacing={".5em"}>
        {user.combatants.map((combatant, index) => (
          <Flex
            width={"100%"}
            justifyContent="space-between"
            bgColor={initiative === index ? "blue" : ""}
          >
            <Text>{combatant.name}</Text>
            {combatant instanceof Enemy && <Text>{"HP: "+combatant.hitpoints}</Text>}
            {"Initiative: " + combatant.initiative}
          </Flex>
        ))}
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
