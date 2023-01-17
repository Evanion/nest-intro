import { SlideLayout } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const Task3CreateServiceMethod = () => (
  <>
    {/*
// @ts-ignore */}
    <SlideLayout.Code
      language="typescript"
      theme={vsDark}
      // @ts-ignore
      codePaneProps={{ highlightRanges: [6, 12] }}
    >
      {`import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

  getProducts() {
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
