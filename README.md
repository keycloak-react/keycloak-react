# Keycloak React Web

Keycloak React Web has been built on top of keycloak-js extending all of its functionalities to provide a global authentication support for your react applications.

## Installation

Using npm :

```
npm i keycloak-react-web
```

## Uses

- Wrap your application inside the given provider.

  ```
  import { KeycloakProvider } from "keycloak-react-web";

  <KeycloakProvider client={authInstance} initOptions={{initOptions}}>
    <YOUR APP CODE GOES HERE>
  </KeycloakProvider>
  ```

  Here "authInstance" is a Keycloak instance having proper configuration of realm, clientIds, urls of keycloak
  and can be initialized like:

  ```
  const authInstance = new Keycloak(keycloakSetting)
  ```

  where

  ```
  const keycloakSetting = {
    url: <keycloak base url>,
    realm: <keycloak realm name>,
    clientId: <keycloak client id>
  };
  
  ```
  ```
  initOptions: <optional>
  ```
    This is an optional field. Refer option parameter of init function https://www.keycloak.org/docs/latest/securing_apps/index.html#methods


- You can use provided custom hook to check the authentication status for all your private routes/components as:

  ```
    import { useKeycloak } from "keycloak-react-web";

    const { keycloak, initialized } = useKeycloak();
  ```

  check if user is authenticated or not:

  ```
    const authenticated = keycloak.authenticated
  ```

  Getting tokens

  ```
    const token = keycloak.token;
    const refreshToken = keycloak.refreshToken;
  ```
  refer https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter for all available properties present on keycloak instance.


## Example:

  Expample shows private route which will be accessible to authenticated users

  ```
  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import { KeycloakProvider, useKeycloak } from "keycloak-react-web"
  import Keycloak from 'keycloak-js';

  const keycloakSetting = {
      url: <keycloak base url>,
      realm: <keycloak realm name>,
      clientId: <keycloak client id>
    };

  const authInstance = new Keycloak(keycloakSetting)

  function App() {
    return (
      <KeycloakProvider client={authInstance}>
        <Router>
          <Routes>
            <Route
              path={'/'}
              element={<PrivateRoute component={Component} />}
            />
          </Routes>
        </Router>
      </KeycloakProvider>
    );
  }

  const PrivateRoute = ({ component: Component }) => {
    const { keycloak, initialized } = useKeycloak();
    const context = useContext(UserContext);

    useEffect(() => {
      if (initialized) {
        if (!keycloak.authenticated) {
          keycloak.login();
        }
      }
    }, [initialized]);

    if (!initialized) {
      return <p>Loading...</p>;
    }

    if (!keycloak.authenticated) {
      return <p>Authenticating...</p>;
    }

    return (
      <Component />
    );
  };
  ```
## Why do we need this package ?

- To simplify usage of keycloak-js within React applications.
- Because it provides simple access management solution for
  modern React applications.

## What problems did we solve here ?

- We made use of existing keycloak-js library to build a custom hook and made the whole development React friendly.
- We have created a Context Provider called <b>KeycloakProvider</b> which provides global user authentication management system that can be used at private route levels.
