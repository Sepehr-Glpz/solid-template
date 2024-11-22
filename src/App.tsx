import * as Solid from "solid-js";
import "@/App.scss";
import { Route, Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";

function App(): Solid.JSXElement {
  return (
    <MetaProvider>
      <Router>
        <Route
          path="/"
          component={() => (
            <>
              <div class="def">
                <h3>Create your app here...</h3>
              </div>
            </>
          )}
        />
      </Router>
    </MetaProvider>
  );
}

export default App as Solid.Component;
