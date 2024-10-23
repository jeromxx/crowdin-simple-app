import "./App.css";
import React, { useState } from "react";
import { Trans, Plural } from "@lingui/macro";

import { locales, dynamicActivate } from "./i18n";
import { useLingui } from "@lingui/react";

function App() {
  const [count, setCount] = useState(0);
  const { i18n } = useLingui();

  // Function to get the welcome message based on the user's name
  const getWelcomeMessage = (username: string) => {
    return i18n._(`app.welcome_message`, { username });
  };

  // Example username
  const username = "Jerome";

  return (
    <div className="App">
      <header className="App-header">
        <img
          className="App-logo"
          src="https://avatars3.githubusercontent.com/u/11225539?s=200&v=4"
          alt="App logo"
        />
        <h3 data-testid="h3-title">
          <Trans>Language switcher example: </Trans>
        </h3>
        <div className="lang-container">
          {Object.values(locales).map((locale, index) => (
            <button
              type="button"
              onClick={() => dynamicActivate(Object.keys(locales)[index])}
              key={locale}
            >
              {locale}
            </button>
          ))}
        </div>

        <h3>
          <Trans>Plurals example: </Trans>
        </h3>
        <div className="lang-container">
          <button type="button" onClick={() => setCount((state) => state + 1)}>
            <Trans>Increment</Trans>
          </button>
          <button type="button" onClick={() => setCount((state) => state - 1)}>
            <Trans>Decrement</Trans>
          </button>
        </div>
        <Plural
          value={count}
          zero={"There are no books"}
          one={"There's one book"}
          other={"There are # books"}
        />
        <h3>
          <Trans>Date formatter example:</Trans>
        </h3>
        <div>
          <Trans>Today is {i18n.date(new Date(), {})}</Trans>
        </div>
        <h3>
          <Trans>Number formatter example:</Trans>
        </h3>
        <div>
          <Trans>
            I have a balance of{" "}
            {i18n.number(1_000_000, { style: "currency", currency: "EUR" })}
          </Trans>
        </div>

        {/* Welcome message example */}
        <h3>
          <Trans>{getWelcomeMessage(username)}</Trans>
        </h3>
        {/* Example of displaying the items count in the cart */}
        <div>
          <Trans>
            {i18n._(`app.items_count`, { count: count })}
          </Trans>
        </div>
      </header>
    </div>
  );
}

export default App;
