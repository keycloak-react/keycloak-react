import { useContext } from 'react';
import { keycloakContext } from './keycloakContext';

export function useKeycloak() {
  const context = useContext(keycloakContext);

  if (!context.client) {
    throw new Error('keycloak client has not been assigned to KeycloakProvider');
  }

  const { client, initialized } = context;
  return {
    initialized,
    keycloak: client
  };
}
