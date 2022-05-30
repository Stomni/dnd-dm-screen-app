import { Flex, Heading } from "@chakra-ui/react";

export default function CombatBoard() {
  return <Flex flexDirection="column">
      <Heading>Campaign Infos</Heading>
      <Flex bgColor={"#10495F"} rounded="6" boxShadow={"dark-lg"} padding=".5rem">
          <Heading size={"lg"}>Combat Helper</Heading>
      </Flex>
  </Flex>;
}
