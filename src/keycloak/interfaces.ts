import Keycloak, { KeycloakInitOptions } from 'keycloak-js';

export interface KeycloakAuthProviderProps {
  client: Keycloak;
  initOptions?: KeycloakInitOptions;
  children: any
}
