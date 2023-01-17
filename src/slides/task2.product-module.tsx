import { CodePane, Slide, Text } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const Task2ProductModule = () => (
  <>
    <Slide>
      <Text>
        <code>ProductModule</code> will be created in the new product directory.
      </Text>
      <CodePane language="typescript" theme={vsDark}>
        {`import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
`}
      </CodePane>
    </Slide>
  </>
);
