import * as React from "react";
import { CodePane, Heading, Slide, Text } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";
export const CreateApp = () => (
  <>
    <Slide>
      <Heading>Task 1</Heading>
      <Text>Create your first application</Text>
      <CodePane language="bash" theme={vsDark}>
        {`$ npm i -g @nestjs/cli
$ nest new my-store`}
      </CodePane>
      <Text>Select your preferred package manager (❤️ Yarn)</Text>
    </Slide>
  </>
);
