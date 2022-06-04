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
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FormEventHandler } from "react";
import { DummyPlayers } from "../data/dummy_player_data";
import { Combatant, Enemy } from "../models/combatant";
import { User } from "../models/user";

export function InitiativeModal({
  activeCombat,
  user,
  setUser,
}: {
  activeCombat: Function;
  user: User;
  setUser: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function submithandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onClose();
    setUser(user);
    activeCombat(true);
  }

  return (
    <>
      <Button onClick={onOpen}>Start Initiative</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={submithandler}>
            <ModalHeader>Set Initiative values</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection={"column"} gap={"1rem"}>
                <>
                  {user.players.map((player, index) => {
                    return (
                      <HStack justifyContent={"space-between"} key={index}>
                        <FormLabel>{player.name}</FormLabel>
                        <Input
                          width={"30%"}
                          placeholder="Initiative"
                          onChange={(e) => {

                            //write array update method
                            const newCombatant = new Combatant({
                              name: player.name,
                              init: parseInt(e.target.value),
                              isDead: false,
                            });
                            setTimeout(
                              () => user.combatants.push(newCombatant),
                              2000
                            );
                          }}
                        />
                      </HStack>
                    );
                  })}
                  {user.enemys.map((enemy, index) => {
                    if (enemy.isActive) {
                      return (
                        <HStack justifyContent={"space-between"} key={index}>
                          <FormLabel>{enemy.name}</FormLabel>
                          <Input
                            width={"30%"}
                            placeholder="Initiative"
                            onChange={(e) => {
                              const newEnemy = new Enemy({
                                name: enemy.name,
                                init: parseInt(e.target.value),
                                isDead: false,
                                hp: enemy.hitpoints,
                              });
                              setTimeout(
                                () => user.combatants.push(newEnemy),
                                2000
                              );
                            }}
                          />
                        </HStack>
                      );
                    }
                  })}
                </>
              </Flex>
            </ModalBody>
            <ModalFooter gap={"10px"}>
              <Button
                type="submit"
                onClick={() => {
                  activeCombat(true);
                }}
              >
                Fight
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
