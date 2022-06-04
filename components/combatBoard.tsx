import { Flex, Heading, List } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Combatant } from "../models/combatant";
import { User } from "../models/user";

export default function CombatBoard({
  user,
  setUser,
}: {
  user: User;
  setUser: Function;
}) {
  const [initiative, setInitiative] = useState();

  useEffect(() => {
    
  });

  return (
    <Flex
      flexDirection="column"
      bgColor={"#10495F"}
      rounded="6"
      boxShadow={"dark-lg"}
      padding=".5rem"
    >
      <Heading size={"md"}>Combat Helper</Heading>
      <List></List>
    </Flex>
  );
}
