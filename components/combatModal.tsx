import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Conditions } from "../data/conditions";
import { Combatant } from "../models/combatant";
import { User } from "../models/user";
import { theme } from "../theme";

export function CombatModal({
  combatant,
  user,
  setUser,
}: {
  combatant: Combatant;
  user: User;
  setUser: Function;
}) {
  var isHeal = false;
  var hitpointValue = 0;

  const { isOpen, onOpen, onClose } = useDisclosure();

  function submitHandlerHp(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (isHeal) {
      combatant.hitpoints = combatant.hitpoints + hitpointValue;
      if (combatant.hitpoints > combatant.maxHp) {
        combatant.hitpoints = combatant.maxHp;
      }

      setUser(user);

      isHeal = false;
      onClose();
    } else {
      combatant.hitpoints = combatant.hitpoints - hitpointValue;
      if (combatant.hitpoints < 0) {
        combatant.hitpoints = 0;
      }
      setUser(user);
      onClose();
    }
  }

  return (
    <>
      <Text onClick={onOpen} cursor="pointer">
        {combatant.name}
      </Text>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgColor={theme.colors.dark.bgGradient}>
          <ModalHeader>{combatant.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"column"}>
              {combatant.isEnemy && (
                <form onSubmit={submitHandlerHp}>
                  <Flex flexDir={"row"} justifyContent="space-between">
                    <FormLabel>
                      {"Hit Points: " + combatant.hitpoints}
                    </FormLabel>
                    <Input
                      w="30%"
                      onChange={(e) => {
                        hitpointValue = parseInt(e.target.value);
                      }}
                    ></Input>
                    <Button type="submit">Damage</Button>
                    <Button type="submit" onClick={() => (isHeal = true)}>
                      Heal
                    </Button>
                  </Flex>
                </form>
              )}
              <Accordion allowToggle allowMultiple width={"100%"} pt="1em">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex={"1"} textAlign={"center"}>
                        Conditions
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Stack justifyContent={"center"} alignItems="center">
                      {Conditions.map((ele, index) => (
                        <Checkbox
                          isChecked={
                            combatant.conditions.findIndex(
                              (con) => ele.name === con
                            ) !== -1
                              ? true
                              : false
                          }
                          key={index}
                          onChange={(e) => {
                            if (
                              combatant.conditions.findIndex(
                                (con) => ele.name === con
                              ) !== -1
                            ) {
                              console.log("delete")
                              const entryIndex = combatant.conditions.findIndex(
                                (con) => con === ele.name
                              );
                              
                              combatant.conditions.splice(entryIndex, 1);
                              console.log(combatant.conditions);
                            } else {
                              
                              combatant.conditions.push(ele.name);
                            }

                            setUser(user);
                          }}
                        >
                          {ele.name}
                        </Checkbox>
                      ))}
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
