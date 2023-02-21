# Simple Keycloak React

Simple keycloak react provide a global app authentication support which actually extends a functionality or keycloak-js.

## Installation

Using npm :

`npm i simple-keycloak-react`

## Example

- Step 1
  Just use below Provider at app level.

  ```
  import KeycloakProvider from "simple-keycloak-react/dist/keycloak/KeycloakProvider.js";

  <KeycloakProvider client={$authInstance}/>
  ```

  Here "authInstance" is a Keycloak instance with proper configuration of realm, clientIds,Urls of keycloak.

- Step 2
  In Private paths or Private Components , you can use custom hook of useKeycloak for finding a status of authentication with keycloak

  ```
    import { useKeycloak } from "simple-keycloak-react/dist/keycloak/useKeycloak";

    const { keycloak, initialized } = useKeycloak();
  ```

  Like here ,

  - keycloak.authenticated will give response user authentiated or not.
  - keycloak.login() will give response user logged in or not.

## Why we needed this package ?

- To solve problem of app level user auth management with keycloak
- keycloak-js original modules are not providing simplicity to handle auth at app level

## What problem we solved here ?

- We inherited usecases of keycloak-js and modified for simplicity
- We have created a Context Provider called KeycloakProvider to solve global user auth management which can be used for private route level
