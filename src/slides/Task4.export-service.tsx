import { Appear, SlideLayout, Text } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const Task4ExportService = () => (
  <>
    {/*
// @ts-ignore */}
    <SlideLayout.Code
      language="typescript"
      theme={vsDark}
      // @ts-ignore
      codePaneProps={{ highlightRanges: [6] }}
    >
      {`import { Module } from '@nestjs/common';
import { BackendService } from './backend.service';

@Module({
  providers: [BackendService],
  exports: [BackendService],
})
export class BackendModule {}
`}
    </SlideLayout.Code>
    {/*
// @ts-ignore */}
    <SlideLayout.Code
      language="typescript"
      theme={vsDark}
      // @ts-ignore
      codePaneProps={{ highlightRanges: [[4], [7]] }}
    >
      {`import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { BackendModule } from '../backend/backend.module';

@Module({
  imports: [BackendModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

`}
    </SlideLayout.Code>
    {/*
// @ts-ignore */}
    <SlideLayout.Code
      language="typescript"
      theme={vsDark}
      // @ts-ignore
      codePaneProps={{ highlightRanges: [[6], [8, 10]] }}
    >
      {`import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

  constructor(private readonly backendService: BackendService) {}

  getProducts() {
    return this.backendService.getProducts();
  }

}

`}
    </SlideLayout.Code>
    <SlideLayout.Center>
      <Text>Our tests just blew up! Lets fix them.</Text>
    </SlideLayout.Center>
    {/*
// @ts-ignore */}
    <SlideLayout.Code
      language="typescript"
      theme={vsDark}
      // @ts-ignore
      codePaneProps={{
        highlightRanges: [[3, 4], [8], [12], [17], [22, 28], [40]],
      }}
    >
      {`import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { BackendModule } from '../backend/backend.module';
import { BackendService } from '../backend/backend.service';

describe('ProductService', () => {
  let service: ProductService;
  let backendService: BackendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [BackendModule],
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
    backendService = module.get<BackendService>(BackendService);
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      jest.spyOn(backendService, 'getProducts').mockImplementation(() => [
        {
          id: 1,
          name: 'Product 1',
          price: 100,
        },
      ]);

      const result = await service.findAll();

      expect(result).toBeEqual(expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          price: expect.any(Number),
        }),
      ]));

      expect(backendService.getProducts).toHaveBeenCalled();

    });
  });

});
`}
    </SlideLayout.Code>
    <SlideLayout.Center>
      <Text>Phew! Crisis averted.</Text>
      <Appear>
        <Text>
          But we still have a problem. We haven't actually implemented the new
          method yet.
        </Text>
      </Appear>
    </SlideLayout.Center>
    {/*
// @ts-ignore */}
    <SlideLayout.Code
      language="typescript"
      theme={vsDark}
      // @ts-ignore
      codePaneProps={{
        highlightRanges: [6, 14],
      }}
    >
      {`import { Injectable } from '@nestjs/common';

@Injectable()
export class BackendService {

  getProducts() {
    return [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
      },
    ];
  }

}
`}
    </SlideLayout.Code>
    <SlideLayout.Center>
      <Text>
        We now have two modules working together, with clear separation of
        concerns.
      </Text>
      <Appear>
        <Text>
          One module is responsible for the business logic, and the other for
          communicating with an external service. This is a clear example of the
          Single Responsibility Principle.
        </Text>
      </Appear>
    </SlideLayout.Center>
  </>
);
