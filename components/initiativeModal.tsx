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
} from "@chakra-ui/react";

import { Combatant } from "../models/combatant";
import { User } from "../models/user";
import { theme } from "../theme";

export function InitiativeModal({
  user,
  setUser,
}: {
  user: User;
  setUser: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function submithandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    user.combatants.sort((a, b) => {
      return b.initiative - a.initiative;
    });
    onClose();
    user.activeCombat = true;
    setUser(user);
    
  }

  function update(user: User, combatant: Combatant): void {
    var findCombatant = user.combatants.findIndex(
      (e) => e.name === combatant.name
    );

    if (findCombatant !== -1) {
      user.combatants[findCombatant].initiative = combatant.initiative;
    } else {
      user.combatants.push(combatant);
    }
  }

  return (
    <>
      <Button onClick={onOpen} bgColor={theme.colors.dark.accent}>Start Initiative</Button>
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
                            const newCombatant = new Combatant({
                              name: player.name,
                              init: parseInt(e.target.value),
                              isDead: false,
                              conditions: [],
                              hitpoints: 0,
                              maxHp: 0,
                              isEnemy: false,
                            });

                            update(user, newCombatant);
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
                              const newEnemy = new Combatant({
                                name: enemy.name,
                                init: parseInt(e.target.value),
                                isDead: false,
                                hitpoints: enemy.hitpoints,
                                maxHp: enemy.hitpoints,
                                conditions: [],
                                isEnemy: true,
                              });

                              update(user, newEnemy);
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
