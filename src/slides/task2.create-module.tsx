import {
  Appear,
  CodePane,
  Heading,
  ListItem,
  Notes,
  Slide,
  Text,
} from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const CreateModule = () => (
  <>
    <Slide>
      <Heading>Task 2</Heading>
      <Text>Create your first module, controller, and service.</Text>
      <CodePane language="bash" theme={vsDark}>
        {`$ nest generate resource product
# or
$ nest g res product`}
      </CodePane>
      <Appear>
        <div style={{ marginTop: 15 }}>
          <CodePane language="bash" theme={vsDark}>
            {`? What transport layer do you use? (Use arrow keys)
❯ REST API 
  GraphQL (code first) 
  GraphQL (schema first) 
  Microservice (non-HTTP) 
  WebSockets 
        `}
          </CodePane>
        </div>
      </Appear>

      <Appear>
        <div style={{ marginTop: 15 }}>
          <CodePane language="bash" theme={vsDark}>
            {`? Would you like to generate CRUD entry points? No`}
          </CodePane>
        </div>
      </Appear>
      <Notes>
        Nest applications are structured around modules.
        <br />
        Benefits:
        <ListItem>Avoid spaghetti code</ListItem>
        <ListItem>Easy to maintain</ListItem>
        <ListItem>Easy to test</ListItem>
        <ListItem>Easy to scale</ListItem>
      </Notes>
    </Slide>
  </>
);
