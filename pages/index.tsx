import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import AppDrawer from "../components/appDrawer";
import CombatBoard from "../components/combatBoard";
import ConditionsBox from "../components/conditionsBox";
import { CoverBox } from "../components/coverBox";
import { InitiativeModal } from "../components/initiativeModal";
import { PlayerTable } from "../components/playerTable";
import { PlayerModal } from "../components/PlayerModal";
import { useLocalStorage } from "../helpers/useLocalStorage";
import { User } from "../models/user";
import { EnemyModal } from "../components/enemyModal";

const Home: NextPage = () => {
  const [user, setUser] = useLocalStorage(
    "GMScreenLocalUser",
    new User({ players: [], enemys: [] , combatants: []})
  );

  const [hydration, setHydration] = useState(false);
  const [combatActive, setCombatActive] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);
  return (
    <>
      {!hydration ? (
        <>
          <Head>
            <title>DnD DM Screen Next</title>
            <meta name="description" content="Next Level DnD DM Screen" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Flex alignItems={"center"} justifyContent="center" height={"100vh"}>
            <Spinner size={"xl"} />
          </Flex>
        </>
      ) : (
        <>
          <AppDrawer />
          <Flex
            height="100%"
            direction="row"
            padding={"1rem"}
            marginLeft="2rem"
          >
            <Head>
              <title>DnD DM Screen Next</title>
              <meta name="description" content="Next Level DnD DM Screen" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <VStack flex={"1"} border={"1px solid white"}>
              <Heading>Rules & Mechanix</Heading>
              <ConditionsBox />
              <CoverBox />
            </VStack>
            <VStack flex={"2"} border={"1px solid white"}>
              <Heading>Session Helper</Heading>
              { combatActive && <CombatBoard user={user} setUser={setUser} />}
              <PlayerTable user={user} />
              <HStack>
                <InitiativeModal activeCombat={setCombatActive} user={user} setUser={setUser}/>
                <PlayerModal user={user} setUser={setUser} />
                <EnemyModal user={user} setUser={setUser} />
              </HStack>
            </VStack>
            <VStack flex={"1"} border={"1px solid white"}>
              <Heading>Session Helper</Heading>
            </VStack>
          </Flex>
        </>
      )}
    </>
  );
};

export default Home;
