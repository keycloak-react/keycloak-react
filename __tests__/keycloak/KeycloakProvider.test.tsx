import React from "react";
import { render, screen } from "@testing-library/react";
import KeycloakProvider from "../../keycloak/KeycloakProvider";
import Keycloak from "keycloak-js";

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
