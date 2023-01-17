import * as React from "react";
import { Heading, ListItem, Notes, Slide, Text } from "spectacle";

export const IntroCompetition = () => (
  <>
    <Slide>
      <Heading>Introduction to Nest.js</Heading>
      <Text>
        An Enterprise level application framework like:
        <ListItem>Java - Spring Boot</ListItem>
        <ListItem>Python - Django</ListItem>
        <ListItem>C# - .Net</ListItem>
        <ListItem>Ruby - Sinatra</ListItem>
      </Text>
      <Notes>
        <ListItem>
          Enterprise level application framework like Java Spring Boot, Python
          Django, .Net, or Ruby Sinatra.
        </ListItem>
        <ListItem>
          Allows you to build efficient, scalable Node.js server-side
          applications.
        </ListItem>
        <ListItem>Written in TypeScript</ListItem>
        <ListItem>Heavily inspired by Angular</ListItem>
        <ListItem>
          Combines elements of
          <ListItem>OOP (Object Oriented Programming)</ListItem>
          <ListItem>FP (Functional Programming)</ListItem>
          <ListItem>FRP (Functional Reactive Programming)</ListItem>
        </ListItem>
        <ListItem>
          Built on top of Connect based frameworks like Express or Fastify
        </ListItem>
      </Notes>
    </Slide>
  </>
);
