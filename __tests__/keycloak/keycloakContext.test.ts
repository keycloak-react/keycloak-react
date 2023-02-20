import { keycloakContext, KeycloakContextConsumer } from './../../keycloak/keycloakContext';

describe('keycloakContext tests', () => {
  test('should have react keycloak context', () => {
    expect(keycloakContext).toBeInstanceOf(Object);
  });

  test('should have react keycloak consumer', () => {
    expect(KeycloakContextConsumer).toBeInstanceOf(Object);
  });
});
