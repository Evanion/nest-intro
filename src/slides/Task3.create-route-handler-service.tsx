import { SlideLayout } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const Task3CreateRouteHandlerService = () => (
  <>
    {/*
// @ts-ignore */}
    <SlideLayout.Code
      language="typescript"
      theme={vsDark}
      // @ts-ignore
      codePaneProps={{ highlightRanges: [9, 12] }}
    >
      {`import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    return this.productService.getProducts();
  }
  
}
`}
    </SlideLayout.Code>
  </>
);
