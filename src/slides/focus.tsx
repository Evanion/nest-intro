import { Heading, ListItem, Slide, Text } from "spectacle";

export const IntroFocus = () => (
  <>
    <Slide>
      <Heading>Nest.js main Focus</Heading>
      <Text>
        Developer experience is the focus:
        <ListItem>
          <strong>Loosely coupled Architecture</strong> - Simplify refactorings
        </ListItem>
        <ListItem>
          <strong>Testability</strong> - Well structured code is easier to test.
        </ListItem>
        <ListItem>
          <strong>Scalability</strong> - From monolith to microservices.
        </ListItem>
        <ListItem>
          <strong>Maintainability</strong> - Well defined borders between
          modules.
        </ListItem>
      </Text>
    </Slide>
  </>
);
