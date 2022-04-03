import * as React from 'react';

/**
 * Things you could try:
 *
 * JSX.Element - will work for elements with only one child (not with multiple children!)
 * JSX.Element | JSX.Element[];
 * React.ReactNode - this is the right one! It is built into React and allows for any type of child element (string, DOMElement, or React element which is essentially a DOMElement at the end!);
 * React.ReactChildren - this has a type, but it's actually an interface provided by React to help with dealing with child elements;
 * React.ReactChild[];
 */

type BoxProps = { children: React.ReactNode };

const Box = ({ children }: BoxProps) => {
  return (
    <section style={{ padding: '1em', border: '5px solid purple' }}>
      {children}
    </section>
  );
};

export default function Application() {
  return (
    <Box>
      Just a string.
      <p>Some HTML that is not nested.</p>
      <Box>
        <h2>Another React component with one child.</h2>
      </Box>
      <Box>
        <h2>A nested React component with two children.</h2>
        <p>The second child.</p>
      </Box>
    </Box>
  );
}
