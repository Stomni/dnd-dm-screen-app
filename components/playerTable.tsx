import { AddIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { DummyPlayers } from "../data/dummy_player_data";
import { User } from "../models/user";

export function PlayerTable({user} : {user: User}) {
  return (
    <TableContainer>
      <Table variant={"simple"}>
        <TableCaption placement="top">
          <Flex justifyContent={"space-between"}>
            <Text fontSize={"1.5em"}>Players</Text>
            <IconButton
              aria-label="add new player"
              icon={<AddIcon />}
              variant="ghost"
            />
          </Flex>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Level</Th>
            <Th isNumeric>HitPoints</Th>
            <Th isNumeric>Passive Insight</Th>
            <Th isNumeric>Passive Perception</Th>
            <Th>Languages</Th>
            <Th>Darkvision</Th>
          </Tr>
        </Thead>
        <Tbody>
          {user.players.map((player, index) => (
            <Tr key={index}>
              <Td>{player.name}</Td>
              <Td>{player.level}</Td>
              <Td>{player.hitpoints}</Td>
              <Td>{player.passiveInsight}</Td>
              <Td>{player.passivePerception}</Td>
              <Td>{player.languages.join(" | ")}</Td>
              <Td>{player.darkvision ? "Yes" : "No"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
