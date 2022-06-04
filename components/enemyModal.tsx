import {
  Button,
  Flex,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Enemy } from "../models/enemy";
import { User } from "../models/user";

export function EnemyModal({
  user,
  setUser,
}: {
  user: User;
  setUser: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  var newEnemy: Enemy = {
    name: "",
    hitpoints: 0,
    isActive: false,
    attributes: undefined,
    abilities: undefined,
    attacks: undefined,
  };

  function onSubmit(event: React.FormEvent<HTMLFormElement>) : void {
    event.preventDefault();
    user.enemys.push(newEnemy);
    onClose();
    setUser(user);
  }

  return (
    <>
      <Button onClick={onOpen}>Add New Enemy</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new Enemy</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={onSubmit}>
            <ModalBody>
              <Flex flexDirection={"column"} gap="1em">
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Name*</FormLabel>
                  <Input
                    width={"50%"}
                    placeholder="Enemy name"
                    onChange={(e) => (newEnemy.name = e.target.value)}
                  />
                </HStack>

                <HStack justifyContent={"space-between"}>
                  <FormLabel>Hitpoints*</FormLabel>
                  <Input
                    width={"50%"}
                    placeholder="Enemy Hitpoints"
                    onChange={(e) =>
                      (newEnemy.hitpoints = parseInt(e.target.value))
                    }
                  />
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Attributes</FormLabel>
                  <Input
                    width={"50%"}
                    placeholder="Enemy Attributes"
                    onChange={(e) => {}}
                  />
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Abilities</FormLabel>
                  <Input
                    width={"50%"}
                    placeholder="Enemy abilities"
                    onChange={(e) => {}}
                  />
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Attacks</FormLabel>
                  <Input
                    width={"50%"}
                    placeholder="Enemy attacks"
                    onChange={(e) => {}}
                  />
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Move to active roster?</FormLabel>
                  <Select
                    placeholder="Select to activate"
                    width={"50%"}
                    onChange={(e) => {
                      if (e.target.value === "yes") {
                        newEnemy.isActive = true;
                      } else {
                        newEnemy.isActive = false;
                      }
                    }}
                  >
                    <option value="yes">Yes</option>
                    <option value={"no"}>No</option>
                  </Select>
                </HStack>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Flex flexDirection={"row"} justifyContent="space-between" width="100%">
                  <Text>* Required</Text>
                <Button
                  type="submit"
                  onClick={() => {
                    onClose;
                  }}
                >
                  Add
                </Button>
              </Flex>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
