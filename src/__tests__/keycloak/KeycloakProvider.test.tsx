import { render, screen } from "@testing-library/react";
import Keycloak from "keycloak-js";
import KeycloakProvider from "../../keycloak/KeycloakProvider";

describe("KeycloakProvider tests", () => {
  test("Should render child component", () => {
    render(
      <KeycloakProvider client={new Keycloak()}>
        <div>Test element</div>
      </KeycloakProvider>
    );

    expect(screen.getByText("Test element")).toBeInTheDocument();
  });
});
