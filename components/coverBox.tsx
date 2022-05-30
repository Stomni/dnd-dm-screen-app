import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export function CoverBox() {
  return (
    <Flex flexDirection={"column"} width="100%">
      <Accordion allowToggle defaultIndex={[2, 4]}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex={"1"} textAlign="center">
                Cover
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Walls, trees, Creatures, and other Obstacles can provide cover
            during combat, making a target more difficult to harm. A target can
            benefit from cover only when an Attack or other Effect originates on
            the opposite side of the cover. There are three degrees of cover. If
            a target is behind multiple sources of cover, only the most
            protective degree of cover applies; the degrees aren’t added
            together. For example, if a target is behind a creature that gives
            half cover and a tree trunk that gives three--quarters cover, the
            target has three--quarters cover.
            <Heading size={"sm"} padding={"1em"}>
              Half Cover
            </Heading>
            <UnorderedList>
              <ListItem>
                A target with half cover has a +2 bonus to AC and Dexterity
                Saving Throws.
              </ListItem>
              <ListItem>
                A target has half cover if an obstacle blocks at least half of
                its body.
              </ListItem>
              <ListItem>
                The obstacle might be a low wall, a large piece of furniture, a
                narrow tree trunk, or a creature, whether that creature is an
                enemy or a friend.
              </ListItem>
            </UnorderedList>
            <Heading size={"sm"} padding={"1em"}>
              Three-Quarters Cover
            </Heading>
            <UnorderedList>
              <ListItem>
                A target with three--quarters cover has a +5 bonus to AC and
                Dexterity Saving Throws.
              </ListItem>
              <ListItem>
                A target has three--quarters cover if about three--quarters of
                it is covered by an obstacle.
              </ListItem>
              <ListItem>
                The obstacle might be a portcullis, an arrow slit, or a thick
                tree trunk.
              </ListItem>
            </UnorderedList>
            <Heading size={"sm"} padding={"1em"}>
              Total Cover
            </Heading>
            <UnorderedList>
              <ListItem>
                A target with total cover can’t be targeted directly by an
                Attack or a spell, although some Spells can reach such a target
                by including it in an area of Effect.
              </ListItem>
              <ListItem>
                A target has total cover if it is completely concealed by an
                obstacle.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
