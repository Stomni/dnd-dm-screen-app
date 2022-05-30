import {
  Flex,
  Heading,

  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import AppDrawer from "../components/appDrawer";
import CombatBoard from "../components/combatBoard";
import ConditionsBox from "../components/conditionsBox";
import { CoverBox } from "../components/coverBox";
import { PlayerBox } from "../components/playerBox";
import { theme } from "../theme";

const Home: NextPage = () => {
  return (
    <>
      <AppDrawer />
      <Flex height="100%" direction="row" padding={"1rem"} marginLeft="2rem">
        <Head>
          <title>DnD DM Screen Next</title>
          <meta name="description" content="Next Level DnD DM Screen" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <VStack flex={"1"} border={"1px solid white"}>
          <Heading>Rules & Mechanix</Heading>
          <ConditionsBox/>
          <CoverBox/>
        </VStack>
        <VStack flex={"2"} border={"1px solid white"}>
          <CombatBoard />
          <PlayerBox/>
        </VStack>
        <VStack flex={"1"} border={"1px solid white"}>
          <Heading>Session Helper</Heading>
        </VStack>
      </Flex>
    </>
  );
};

export default Home;
