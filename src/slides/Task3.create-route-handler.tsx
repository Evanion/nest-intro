import { SlideLayout } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const Task3CreateRouteHandler = () => (
  <>
    {/*
// @ts-ignore */}
    <SlideLayout.Code
      language="typescript"
      theme={vsDark}
      // @ts-ignore
      codePaneProps={{ highlightRanges: [9, 16] }}
    >
      {`import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    return [{
      id: 1,
      name: 'Product 1',
      price: 100,
    }];
  }
}
`}
    </SlideLayout.Code>
  </>
);
