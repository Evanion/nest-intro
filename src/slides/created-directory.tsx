import { CodePane, Slide } from "spectacle";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

export const CreatedDirectory = () => (
  <>
    <Slide>
      <CodePane language="bash" theme={vsDark}>
        {`|- node_modules
|
|- src
|  | app.controller.spec.ts
|  | app.controller.ts
|  | app.module.ts
|  | app.service.ts
|  | main.ts
|
|- test
|  | app.e2e-spec.ts
|  | jest-e2e.json
|
| .eslintrc.js
| .gitignore
| .prettierrc
| nest-cli.json
| package.json
| README.md
| tsconfig.build.json
| tsconfig.json
| yarn.lock`}
      </CodePane>
    </Slide>
  </>
);
