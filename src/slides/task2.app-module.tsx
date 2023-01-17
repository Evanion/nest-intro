import { CodePane, Slide, Text } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const Task2AppModule = () => (
  <>
    <Slide>
      <Text>
        <code>AppModule</code> will be updated with the new{" "}
        <strong>Product</strong> module.
      </Text>
      <CodePane language="typescript" theme={vsDark}>
        {`import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}`}
      </CodePane>
    </Slide>
  </>
);
