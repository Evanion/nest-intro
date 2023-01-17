import { CodePane, Slide, Text } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const Task2ProductController = () => (
  <>
    <Slide>
      <Text>
        An empty <code>ProductController</code> will be created.
      </Text>
      <CodePane language="typescript" theme={vsDark}>
        {`import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private readonly productService: ProductService) {}
}

`}
      </CodePane>
    </Slide>
  </>
);
