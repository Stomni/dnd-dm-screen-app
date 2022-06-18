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
  FormControl,
  FormHelperText,
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
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useMemo, useRef, useState } from "react";
import { Conditions } from "../data/conditions";
import { DamageTypes } from "../data/damageTypes";
import { ability, attributes, Enemy } from "../models/enemy";
import { User } from "../models/user";
import { theme } from "../theme";

export function EnemyModal({
  user,
  setUser,
}: {
  user: User;
  setUser: Function;
}) {
  const [abilityLength, setAbilityLength] = useState(0);
  const [attackLength, setAttackLength] = useState(0);
  const [useAttributes, setUseAttributes] = useState(false);
  const [memoReset, setMemoReset] = useState(0);
  const [abilityReset, setAbilityReset] = useState(0);
  const [attackReset, setAttackReset] = useState(0);
  const abilityNameInputRef = useRef<HTMLInputElement>(null);
  const abilityDescInputRef = useRef<HTMLTextAreaElement>(null);
  const attackNameInputRef = useRef<HTMLInputElement>(null);
  const attackDescInputRef = useRef<HTMLTextAreaElement>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  var newEnemy: Enemy = useMemo(
    () =>
      (newEnemy = {
        name: "",
        hitpoints: 0,
        isActive: false,
        attributes: undefined,
        armorclass: 0,
        abilities: [],
        attacks: [],
        conImmunities: [],
        dmgImmunities: [],
        dmgResistances: [],
        movements: {
          normal: 0,
          climbing: 0,
          burrowing: 0,
          swimming: 0,
          flying: 0,
        },
        vulnerbilities: [],
        senses: { blindsight: 0, darkvision: 0, tremorsense: 0, truesight: 0 },
      }),
    [memoReset]
  );
  var attributes: attributes = useMemo(
    () =>
      (attributes = {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
      }),
    [memoReset]
  );
  var newAbility: ability = useMemo(
    () => (newAbility = { name: "", desc: "" }),
    [abilityReset]
  );
  var newAttack: ability = useMemo(
    () => (newAttack = { name: "", desc: "" }),
    [attackReset]
  );

  function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (useAttributes) {
      newEnemy.attributes = attributes;
    }

    user.enemys.push(newEnemy);
    setUser(user);
    setAbilityLength(0);
    setAttackLength(0);
    setUseAttributes(false);
    setMemoReset(memoReset + 1);
    onClose();
  }
  return (
    <>
      <Button onClick={onOpen} bgColor={theme.colors.dark.accent}>
        Add New Enemy
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new Enemy</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setMemoReset(memoReset + 1);
              setAbilityReset(abilityReset + 1);
              setAttackReset(attackReset + 1);
            }}
          />

          <form onSubmit={onSubmit}>
            <ModalBody>
              <Flex flexDirection={"column"} gap="1em">
                <FormControl isRequired>
                  <HStack justifyContent={"space-between"}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      width={"50%"}
                      placeholder="Enemy name"
                      onChange={(e) => {
                        newEnemy.name = e.target.value;
                      }}
                    />
                  </HStack>
                </FormControl>
                <Flex justifyContent={""} flexDir="row" width={"100%"}>
                  <FormControl isRequired>
                    <HStack w={"100%"}>
                      <FormLabel>Hitpoints</FormLabel>
                      <Input
                        width={"50%"}
                        placeholder="Enemy Hitpoints"
                        onChange={(e) =>
                          (newEnemy.hitpoints = parseInt(e.target.value))
                        }
                      />
                    </HStack>
                  </FormControl>
                  <FormControl>
                    <HStack w={"100%"}>
                      <FormLabel>Armor Class</FormLabel>
                      <Input
                        width={"50%"}
                        placeholder="Enemy Armorclass"
                        onChange={(e) =>
                          (newEnemy.armorclass = parseInt(e.target.value))
                        }
                      />
                    </HStack>
                  </FormControl>
                </Flex>
                <Flex flexDir={"column"}>
                  <FormControl>
                    <FormLabel>Movements</FormLabel>
                    <HStack justifyContent={"space-between"}>
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Normal"
                        onChange={(e) => {
                          newEnemy.movements["normal"] = parseInt(
                            e.target.value
                          );
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Climbing"
                        onChange={(e) => {
                          newEnemy.movements["climbing"] = parseInt(
                            e.target.value
                          );
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Burrowing"
                        onChange={(e) => {
                          newEnemy.movements["burrowing"] = parseInt(
                            e.target.value
                          );
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Swimming"
                        onChange={(e) => {
                          newEnemy.movements["swimming"] = parseInt(
                            e.target.value
                          );
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Flying"
                        onChange={(e) => {
                          newEnemy.movements["flying"] = parseInt(
                            e.target.value
                          );
                        }}
                      />
                    </HStack>
                    <FormHelperText>
                      If no value is entered it will be count as 0 and will not
                      be displayed.
                    </FormHelperText>
                  </FormControl>
                </Flex>
                <Flex flexDir={"column"}>
                  <FormControl>
                    <FormLabel>Senses</FormLabel>
                    <HStack justifyContent={"space-between"}>
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Darkvision"
                        onChange={(e) => {
                          newEnemy.senses["darkvision"] = parseInt(
                            e.target.value
                          );
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Blindsight"
                        onChange={(e) => {
                          newEnemy.senses["blindsight"] = parseInt(
                            e.target.value
                          );
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Truesight"
                        onChange={(e) => {
                          newEnemy.senses["truesight"] = parseInt(
                            e.target.value
                          );
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Tremorsense"
                        onChange={(e) => {
                          newEnemy.senses["tremorsense"] = parseInt(
                            e.target.value
                          );
                        }}
                      />
                    </HStack>
                    <FormHelperText>
                      If no value is entered it will be count as 0 and will not
                      be displayed.
                    </FormHelperText>
                  </FormControl>
                </Flex>
                <Flex flexDir={"column"}>
                  <FormControl>
                    <FormLabel>Attributes</FormLabel>
                    <HStack justifyContent={"space-between"}>
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Strength"
                        onChange={(e) => {
                          if (!useAttributes) {
                            setUseAttributes(true);
                          }

                          attributes["str"] = parseInt(e.target.value);
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Dexterity"
                        onChange={(e) => {
                          if (!useAttributes) {
                            setUseAttributes(true);
                          }
                          attributes["dex"] = parseInt(e.target.value);
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Constitution"
                        onChange={(e) => {
                          if (!useAttributes) {
                            setUseAttributes(true);
                          }
                          attributes["con"] = parseInt(e.target.value);
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Intelligence"
                        onChange={(e) => {
                          if (!useAttributes) {
                            setUseAttributes(true);
                          }
                          attributes["int"] = parseInt(e.target.value);
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Wisdom"
                        onChange={(e) => {
                          if (!useAttributes) {
                            setUseAttributes(true);
                          }
                          attributes["wis"] = parseInt(e.target.value);
                        }}
                      />
                      <Input
                        type={"number"}
                        width={"15%"}
                        placeholder="Charisma"
                        onChange={(e) => {
                          if (!useAttributes) {
                            setUseAttributes(true);
                          }
                          attributes["cha"] = parseInt(e.target.value);
                        }}
                      />
                    </HStack>
                    <FormHelperText>
                      If every attribute has no value, they won´t be displayed.
                      If at least one field is filled, every empty field will be
                      0.
                    </FormHelperText>
                  </FormControl>
                </Flex>
                <Flex flexDir={"column"}>
                  <FormLabel>Abilities</FormLabel>

                  <Text>{"Abilites Added: " + abilityLength}</Text>

                  <HStack justifyContent={"space-between"}>
                    <Input
                      ref={abilityNameInputRef}
                      width={"30%"}
                      placeholder="Ability name"
                      onChange={(e) => {
                        newAbility.name = e.target.value;
                      }}
                    />
                    <Textarea
                      ref={abilityDescInputRef}
                      placeholder="Ability description"
                      onChange={(e) => {
                        newAbility.desc = e.target.value;
                      }}
                    ></Textarea>
                  </HStack>
                  <Button
                    width={"20%"}
                    onClick={() => {
                      if (newEnemy.abilities === undefined) {
                        newEnemy.abilities = [];
                      }

                      newEnemy.abilities.push(newAbility);

                      if (abilityNameInputRef.current !== null) {
                        abilityNameInputRef.current.value = "";
                      }

                      if (abilityDescInputRef.current !== null) {
                        abilityDescInputRef.current.value = "";
                      }
                      setAbilityReset(abilityReset + 1);
                      setAbilityLength(newEnemy.abilities.length);
                    }}
                  >
                    Add ability
                  </Button>
                </Flex>
                <Flex flexDirection={"column"}>
                  <FormLabel>Attacks</FormLabel>

                  <Text>{"Attacks Added: " + attackLength}</Text>

                  <HStack justifyContent={"space-between"}>
                    <Input
                      ref={attackNameInputRef}
                      width={"30%"}
                      placeholder="Ability name"
                      onChange={(e) => {
                        newAttack.name = e.target.value;
                      }}
                    />
                    <Textarea
                      ref={attackDescInputRef}
                      placeholder="Ability description"
                      onChange={(e) => {
                        newAttack.desc = e.target.value;
                      }}
                    ></Textarea>
                  </HStack>
                  <Button
                    width={"20%"}
                    onClick={() => {
                      if (newEnemy.attacks === undefined) {
                        newEnemy.attacks = [];
                      }
                      newEnemy.attacks.push(newAttack);

                      if (attackNameInputRef.current !== null) {
                        attackNameInputRef.current.value = "";
                      }

                      if (attackDescInputRef.current !== null) {
                        attackDescInputRef.current.value = "";
                      }
                      setAttackReset(attackReset + 1);
                      setAttackLength(newEnemy.attacks.length);
                    }}
                  >
                    Add ability
                  </Button>
                </Flex>
                <FormControl>
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
                  <FormHelperText>
                    Active means that you want to use it in the current session.
                  </FormHelperText>
                </FormControl>
              </Flex>
              <Flex
                flexDirection={"row"}
                justifyContent="space-between"
                paddingTop={"1em"}
              >
                <Accordion allowToggle allowMultiple width={"25%"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex={"1"} textAlign={"center"}>
                          Vulnerbilities
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Stack>
                        {DamageTypes.map((ele, index) => (
                          <Checkbox
                            key={index}
                            onChange={(e) => {
                              if (e.target.checked) {
                                newEnemy.vulnerbilities.push(ele);
                              }
                              if (!e.target.checked) {
                                const entryIndex =
                                  newEnemy.vulnerbilities.findIndex(
                                    (vul) => vul === ele
                                  );
                                newEnemy.vulnerbilities.splice(entryIndex, 1);
                              }
                            }}
                          >
                            {ele + " Damage"}
                          </Checkbox>
                        ))}
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle allowMultiple width={"25%"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex={"1"} textAlign={"center"}>
                          Resistances
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Stack>
                        {DamageTypes.map((ele, index) => (
                          <Checkbox
                            key={index}
                            onChange={(e) => {
                              if (e.target.checked) {
                                newEnemy.dmgResistances.push(ele);
                              }
                              if (!e.target.checked) {
                                const entryIndex =
                                  newEnemy.dmgResistances.findIndex(
                                    (vul) => vul === ele
                                  );
                                newEnemy.dmgResistances.splice(entryIndex, 1);
                              }
                            }}
                          >
                            {ele + " Damage"}
                          </Checkbox>
                        ))}
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle allowMultiple width={"25%"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex={"1"} textAlign={"center"}>
                          Immunities
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Stack>
                        {DamageTypes.map((ele, index) => (
                          <Checkbox
                            key={index}
                            onChange={(e) => {
                              if (e.target.checked) {
                                newEnemy.dmgImmunities.push(ele);
                              }
                              if (!e.target.checked) {
                                const entryIndex =
                                  newEnemy.dmgImmunities.findIndex(
                                    (vul) => vul === ele
                                  );
                                newEnemy.dmgImmunities.splice(entryIndex, 1);
                              }
                            }}
                          >
                            {ele + " Damage"}
                          </Checkbox>
                        ))}
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle allowMultiple width={"25%"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex={"1"} textAlign={"center"}>
                          Conditions Imm.
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Stack>
                        {Conditions.map((ele, index) => (
                          <Checkbox
                            key={index}
                            onChange={(e) => {
                              if (e.target.checked) {
                                newEnemy.conImmunities.push(ele.name);
                              }
                              if (!e.target.checked) {
                                const entryIndex =
                                  newEnemy.conImmunities.findIndex(
                                    (vul) => vul === ele.name
                                  );
                                newEnemy.conImmunities.splice(entryIndex, 1);
                              }
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
            <ModalFooter>
              <Flex
                flexDirection={"row"}
                justifyContent="space-between"
                width="100%"
              >
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
