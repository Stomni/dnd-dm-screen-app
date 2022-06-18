import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  List,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { User } from "../models/user";
import { theme } from "../theme";

export function UserContentModal({
  user,
  setUser,
}: {
  user: User;
  setUser: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function deleteEntry(entryName: String, listType: String): void {
    if (listType === "Enemys") {
      const entryIndex = user.enemys.findIndex((e) => e.name === entryName);
      user.enemys.splice(entryIndex, 1);
    } else if (listType === "Players") {
      const entryIndex = user.players.findIndex((e) => e.name === entryName);
      user.players.splice(entryIndex, 1);
    }
    setUser(user);
  }
  return (
    <>
      <Button onClick={onOpen}>Show all</Button>
      <Modal onClose={onClose} isOpen={isOpen} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>All User Lists</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"row"} justifyContent="space-around">
              <Flex flexDir={"column"}>
                <Heading>Players</Heading>
                <List spacing={".3em"}>
                  {user.players.map((player, index) => (
                    <Flex
                      key={index}
                      bg={theme.colors.dark.accent}
                      borderRadius="5"
                      padding={".5em"}
                      justifyContent="space-between"
                    >
                      {player.name}
                      <Flex>
                        <IconButton aria-label="edit" icon={<EditIcon />} />
                        <IconButton
                          aria-label="delete"
                          icon={<DeleteIcon />}
                          onClick={() => deleteEntry(player.name, "Players")}
                        />
                      </Flex>
                    </Flex>
                  ))}
                </List>
              </Flex>
              <Flex flexDir={"column"}>
                <Heading>Enemys</Heading>
                <List spacing={".3em"}>
                  {user.enemys.map((enemy, index) => (
                    <Flex
                      key={index}
                      bg={theme.colors.dark.accent}
                      borderRadius="5"
                      padding={".5em"}
                      justifyContent="space-between"
                    >
                      {enemy.name}
                      <Flex>
                        <IconButton aria-label="edit" icon={<EditIcon />} />
                        <IconButton
                          aria-label="delete"
                          icon={<DeleteIcon />}
                          onClick={() => deleteEntry(enemy.name, "Enemys")}
                        />
                      </Flex>
                    </Flex>
                  ))}
                </List>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
