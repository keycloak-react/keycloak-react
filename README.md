# Simple Keycloak React

Simple keycloak react has been built on top of keycloak-js extending all of its functionalities to provide a global authentication support for your react applications.

## Installation

Using npm :

`npm i simple-keycloak-react`

## Example

- Step 1

  Just wrap your application inside the given provider.

  ```
  import { KeycloakProvider } from "simple-keycloak-react";

  <KeycloakProvider client={authInstance} />
  ```

  Here "authInstance" is a Keycloak instance having proper configuration of realm, clientIds, urls of keycloak
  and can be initialized like:

  ```
  const authInstance = new Keycloak(keycloakSetting)
  ```

  where

  ```
  const keycloakSetting = {
    url: keycloakUrl[environment],
    realm: keycloakRealm[environment],
    clientId: keycloakClientId[environment]
  };
  ```

- Step 2

  Next, you can use provided custom hook to check the authentication status for all your private routes/components as:

  ```
    import { useKeycloak } from "simple-keycloak-react";

    const { keycloak, initialized } = useKeycloak();
  ```

  - check if user is authenticated or not:

  ```
    const authenticated = keycloak.authenticated
  ```

  - If user is not authenticated then this will lead to login page of keycloak:

  ```
    keycloak.login()
  ```

## Why do we need this package ?

- To simplify usage of keycloak-js within React applications.
- Because it provides simple access management solution for
  modern React applications.

## What problems did we solve here ?

- We made use of existing keycloak-js library to build a custom hook and made the whole development React friendly.
- We have created a Context Provider called <b>KeycloakProvider</b> which provides global user authentication management system that can be used at private route levels.
