import { CodePane, Slide, Text } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const Task2ProductService = () => (
  <>
    <Slide>
      <Text>
        An empty <code>ProductService</code> will be created.
      </Text>
      <CodePane language="typescript" theme={vsDark}>
        {`import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {}`}
      </CodePane>
    </Slide>
  </>
);
