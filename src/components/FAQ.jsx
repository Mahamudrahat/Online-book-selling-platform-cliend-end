import React from 'react'

export default function FAQ() {
  return (
    <section class="my-20">
      <h1 class="text-center text-3xl my-20">FAQ Section</h1>
      <div class="collapse collapse-arrow bg-base-200 ">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div class="collapse-title text-xl font-medium">
          9.1 what is React.js and Explain the concept of "components" in React.{" "}
        </div>
        <div class="collapse-content">
          <p>
            React.js is a JavaScript library for building dynamic user
            interfaces. Its core concept is "components," which are reusable,
            self-contained blocks of code that define parts of the UI.
            Components manage their own state and logic, allowing for modular,
            efficient, and maintainable web applications.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          9.2 What is JSX in React, and how does it work?{" "}
        </div>
        <div class="collapse-content">
          <p>
            JSX (JavaScript XML) is a syntax extension for JavaScript used in
            React to describe what the UI should look like. It allows developers
            to write HTML-like code within JavaScript, making the code more
            readable and intuitive. JSX is compiled into regular JavaScript (via
            tools like Babel), transforming tags into React.createElement()
            calls.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          9.3 What is the Virtual DOM, and how does React use it to optimize
          performance?{" "}
        </div>
        <div class="collapse-content">
          <p>
            The Virtual DOM (VDOM) is a lightweight, in-memory representation of
            the actual DOM. React updates the VDOM when the UI changes, compares
            it with the previous version (diffing), and only updates the actual
            DOM where necessary. This process, called "reconciliation," boosts
            performance by minimizing expensive DOM operations.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          9.4 Explain the concept of "props" in React and how they are used.{" "}
        </div>
        <div class="collapse-content">
          <p>
            In React, props (short for "properties") are used to pass data from
            one component to another, typically from a parent to a child
            component. Props are read-only and immutable, allowing components to
            be reusable and dynamic. They enable components to receive values,
            functions, or data to render content dynamically based on external
            input.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          9.5 What is "state" in React, and how does it differ from props?{" "}
        </div>
        <div class="collapse-content">
          <p>
            In React, "state" refers to a component's internal data that can
            change over time, affecting rendering. It is managed within the
            component using useState or this.setState. In contrast, "props"
            (short for properties) are read-only inputs passed from parent to
            child components, used to configure them. State is mutable; props
            are immutable.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          9.6 Explain the useState hook and provide an example of how it is
          used.{" "}
        </div>
        <div class="collapse-content">
          <p>
            The useState hook in React allows functional components to manage
            state. It returns an array: the current state value and a function
            to update it.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          9.7 What is the purpose of the useEffect hook in React, and when would
          you use it?{" "}
        </div>
        <div class="collapse-content">
          <p>
            The useEffect hook in React is used to manage side effects in
            functional components, such as data fetching, subscriptions, or
            manually changing the DOM. It runs after the component renders and
            can be configured to run on specific state or prop changes. When to
            use it: Data Fetching: To fetch data from an API when the component
            mounts. Subscriptions: To set up and clean up subscriptions (e.g.,
            WebSocket). DOM Manipulation: To directly manipulate the DOM after
            rendering.
          </p>
        </div>
      </div>
    </section>
  );
}
