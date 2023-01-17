import { CodePane, Slide, Text } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const AppCmd = () => (
  <>
    <Slide>
      <Text>
        In order to run the application, you can run any of the following
        commands:
      </Text>
      <CodePane language="bash" theme={vsDark}>
        {`$ yarn start
$ yarn start:dev
$ yarn start:prod`}
      </CodePane>
      <Text>
        In order to run the tests, you can run any of the following commands:
      </Text>
      <CodePane language="bash" theme={vsDark}>
        {`$ yarn test     // run unit tests
$ yarn test:e2e // run e2e tests
$ yarn test:cov // run unit tests with coverage`}
      </CodePane>
    </Slide>
  </>
);
