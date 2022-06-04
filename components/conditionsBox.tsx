import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Conditions } from "../data/conditions";

export default function ConditionsBox() {
 
  return (
    <Flex flexDirection={"column"} width="100%">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex={"1"} textAlign="center">
                Conditions
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            {Conditions.map((item, index) => (
              <Accordion allowToggle defaultIndex={[2,4]} key={index}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex={"1"} textAlign="center">
                        {item.name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <UnorderedList>
                      {item.desc.map((desc, index) => (
                        <ListItem key={index}>{desc}</ListItem>
                      ))}
                    </UnorderedList>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
