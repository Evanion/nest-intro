import {
  CodePane,
  Deck,
  Heading,
  ListItem,
  Slide,
  SlideLayout,
  Text,
  UnorderedList,
} from "spectacle";
import { CreateApp } from "./slides/task1.create-app";
import { CreatedDirectory } from "./slides/created-directory";
import { IntroCompetition } from "./slides/competition";
import { IntroFocus } from "./slides/focus";
import { AppCmd } from "./slides/app-cmd";
import { CreateModule } from "./slides/task2.create-module";
import { Task2AppModule } from "./slides/task2.app-module";
import { Task2ProductModule } from "./slides/task2.product-module";
import { Task2ProductController } from "./slides/task2.product-controller";
import { Task2ProductService } from "./slides/task2.product-service";
import { Task2Tests } from "./slides/task2.tests";
import { Task3CreateRouteTest } from "./slides/Task3.create-route-test";
import { Task3CreateRouteHandler } from "./slides/Task3.create-route-handler";
import { Task3CreateServiceMethod } from "./slides/Task3.create-service-method";
import { Task3CreateRouteHandlerService } from "./slides/Task3.create-route-handler-service";
import { Task3ServiceTest } from "./slides/Task3.create-service-test";
import { Task3CreateRouteTestMock } from "./slides/Task3.create-route-test-mock";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";
import { Task4ExportService } from "./slides/Task4.export-service";
import { Task5HttpService } from "./slides/Task5.http-service";

function App() {
  return (
    <Deck>
      <IntroCompetition />
      <IntroFocus />
      <CreateApp />
      <CreatedDirectory />
      <AppCmd />
      <CreateModule />
      <Task2AppModule />
      <Task2ProductModule />
      <Task2ProductController />
      <Task2ProductService />
      <Task2Tests />
      <SlideLayout.Center>
        <Heading>Task 3 - Create a route handler</Heading>
        <Text>
          Lets start to create a Route handler. First we need to create a test
          case for our shiny new handler.
        </Text>
      </SlideLayout.Center>
      <Task3CreateRouteTest />
      <Task3CreateRouteHandler />
      <SlideLayout.Center>
        <Text>
          But the controller is not the correct place for the handlers logic.
          Lets move it to the service.
        </Text>
      </SlideLayout.Center>
      <Task3CreateServiceMethod />
      <Task3CreateRouteHandlerService />
      <SlideLayout.Center>
        <Text>
          Great! Now we have a working route handler, and service method. Lets
          refactor the tests.
          <UnorderedList>
            <ListItem>Service tests should test the new method</ListItem>
            <ListItem>Controller tests should mock the service method</ListItem>
          </UnorderedList>
        </Text>
      </SlideLayout.Center>
      <Task3ServiceTest />
      <Task3CreateRouteTestMock />
      <SlideLayout.Center>
        <Heading>Task 4 - Create a client module</Heading>
        <Text>
          Now that we have a working API, lets create a client module in our
          Nest service to consume an external API.
        </Text>
        <CodePane language="bash" theme={vsDark}>
          {`$ nest g module backend
$ nest g service backend`}
        </CodePane>
      </SlideLayout.Center>
      <Task4ExportService />
      <Task5HttpService />
    </Deck>
  );
}

export default App;
