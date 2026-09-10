import React from 'react';

// Step 1: Define an interface describing the shape of the props
// this component expects to receive. Here, `name` must be a string.
interface GreetingProps {
  name: string;
}

// Step 2: Annotate the destructured props parameter with the
// GreetingProps type. This lets TypeScript check, at compile time,
// that anyone using <Greeting /> passes a `name` prop of type string.
const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
