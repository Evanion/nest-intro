import { SlideLayout } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const Task3ServiceTest = () => (
  <>
    {/*
// @ts-ignore */}
    <SlideLayout.Code
      language="typescript"
      theme={vsDark}
      // @ts-ignore
      codePaneProps={{ highlightRanges: [15, 28] }}
    >
      {`import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = await service.findAll();

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
