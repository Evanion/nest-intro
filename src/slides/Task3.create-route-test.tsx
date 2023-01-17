import { SlideLayout } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const Task3CreateRouteTest = () => (
  <>
    {/*
// @ts-ignore */}
    <SlideLayout.Code
      language="typescript"
      theme={vsDark}
      // @ts-ignore
      codePaneProps={{ highlightRanges: [17, 30] }}
    >
      {`import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = await controller.findAll();

      expect(result).toBeEqual(expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          price: expect.any(Number),
        }),
      ]));

    });
  });

});
`}
    </SlideLayout.Code>
  </>
);
