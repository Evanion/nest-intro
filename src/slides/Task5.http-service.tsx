import { Heading, SlideLayout, Text } from "spectacle";
/*
<Text>
  <code>HttpService</code> is a wrapper around the <code>axios</code>{" "}
  library.
</Text>
*/

export const Task5HttpService = () => (
  <>
    <SlideLayout.Center>
      <Heading>Task 5 - Using the HttpService</Heading>
      <Text>
        Lets refactor the <code>BackendService</code> to use the{" "}
        <code>HttpService</code> to fetch the data from the backend.
      </Text>
    </SlideLayout.Center>
  </>
);
