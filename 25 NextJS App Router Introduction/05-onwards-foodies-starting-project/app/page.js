import React from 'react';
// DEFINE YOUR COMPONENT HERE
export function MainGoal() {
    <p>My main goal: Become React expert</p>;
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
        text.
      </p>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function &lt;MainGoal&gt;</code>
        ).
      </p>
      {/* OUTPUT YOUR COMPONENT HERE */}     
      <MainGoal/>
    </div>
  );
}
export default App;