import { SlideLayout } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const Task3CreateRouteTestMock = () => (
  <>
    {/*
// @ts-ignore */}
    <SlideLayout.Code
      language="typescript"
      theme={vsDark}
      // @ts-ignore
      codePaneProps={{ highlightRanges: [[7], [16], [21, 27], [39]] }}
    >
      {`import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService);
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      jest.spyOn(service, 'findAll').mockImplementation(() => Promise.resolve([
        {
          id: 1,
          name: 'Product 1',
          price: 100,
        },
      ]));

      const result = await controller.findAll();

      expect(result).toBeEqual(expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          price: expect.any(Number),
        }),
      ]));

      expect(service.findAll).toHaveBeenCalled();

    });
  });

});
`}
    </SlideLayout.Code>
  </>
);
