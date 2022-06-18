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
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { User } from "../models/user";
import { theme } from "../theme";

export function PlayerModal({
  user,

  setUser,
}: {
  user: User;

  setUser: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  var name: String;
  var level: number;
  var hitpoints: number;
  var pInsight: number;
  var pPerception: number;
  var languages: String[] = [];
  var language: string;
  var darkvision: boolean;

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    language.split(" ").forEach((w) => {
      languages.push(w);
    });
    user.players.push({
      name: name,
      level: level,
      hitpoints: hitpoints,
      passiveInsight: pInsight,
      passivePerception: pPerception,
      languages: languages,
      darkvision: darkvision,
    });
    onClose();

    setUser(user);
  }
  return (
    <>
      <Button onClick={onOpen} bgColor={theme.colors.dark.accent}>Add New Player</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new Player</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={onSubmit}>
            <ModalBody>
              <Flex flexDirection={"column"} gap="1em">
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    width={"50%"}
                    placeholder="Player name"
                    onChange={(e) => (name = e.target.value)}
                  />
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Level</FormLabel>
                  <Input
                    type={"number"}
                    width={"50%"}
                    placeholder="Player level"
                    onChange={(e) => (level = parseInt(e.target.value))}
                  />
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Hitpoints</FormLabel>
                  <Input
                    width={"50%"}
                    placeholder="Player Hitpoints"
                    onChange={(e) => (hitpoints = parseInt(e.target.value))}
                  />
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Passive Insight</FormLabel>
                  <Input
                    width={"50%"}
                    placeholder="Player Insight"
                    onChange={(e) => (pInsight = parseInt(e.target.value))}
                  />
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Passive Perception</FormLabel>
                  <Input
                    width={"50%"}
                    placeholder="Player perception"
                    onChange={(e) => (pPerception = parseInt(e.target.value))}
                  />
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Languages</FormLabel>
                  <Input
                    width={"50%"}
                    placeholder="Player languages"
                    onChange={(e) => {
                      language = e.target.value;
                    }}
                  />
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <FormLabel>Darkvision</FormLabel>
                  <Select
                    placeholder="Select Darkvision"
                    width={"50%"}
                    onChange={(e) => {
                      if (e.target.value === "yes") {
                        darkvision = true;
                      } else {
                        darkvision = false;
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
              <Button
                type="submit"
                onClick={() => {
                  onClose;
                }}
              >
                Add
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
