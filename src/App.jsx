import React from "react";
import ReadMore from "./Components/ReadMore";

const reactHooksDescription = `
  Hooks are a new addition to React that lets you use state and other React features without writing a class.
  They solve a wide variety of seemingly unconnected problems in React that we have encountered over five years
  of writing and maintaining tens of thousands of components. Hooks make it easier to reuse stateful logic between
  components, make complex components easier to understand, and avoid pitfalls caused by lifecycle methods.
  Hooks are completely optional. You can start using them without rewriting any existing code. By the way, it’s
  totally fine if you don’t understand all of this right now. This page provides an introduction to Hooks for
  experienced React users. If you’re not experienced with React, you might want to first check out the React tutorial.
`;

const App = () => {
  return (
    <div>
      <ReadMore reactHooksDescription={reactHooksDescription} />
    </div>
  );
};

export default App;
