import * as Solid from "solid-js";
import { Route, Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";

function App(): Solid.JSXElement {
  return (
    <MetaProvider>
      <Router>
        <Route path="/">
          <div>
            <h3>Create your app here...</h3>
          </div>
        </Route>
      </Router>
    </MetaProvider>
  );
}

export default App as Solid.Component;
