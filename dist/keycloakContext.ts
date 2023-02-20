import Keycloak from 'keycloak-js';
import { createContext } from 'react';

export type IAuthContextProps = {
  client?: Keycloak;
  initialized: boolean;
};

export function createAuthContext(
  initialContext?: Partial<IAuthContextProps>
): React.Context<IAuthContextProps> {
  return createContext({
    initialized: false,
    ...initialContext
  });
}

export default createAuthContext;

export const keycloakContext = createAuthContext();

export const KeycloakContextConsumer = keycloakContext.Consumer;
