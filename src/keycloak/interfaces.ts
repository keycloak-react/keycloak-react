import Keycloak, { KeycloakInitOptions } from 'keycloak-js';

interface KeycloakAuthProviderProps {
  client: Keycloak;
  initOptions?: KeycloakInitOptions;
  children: any
}

export { KeycloakAuthProviderProps }