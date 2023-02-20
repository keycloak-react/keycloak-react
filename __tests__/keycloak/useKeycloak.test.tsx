import React from "react";
import { act, render } from "@testing-library/react";
import { useKeycloak } from "../../keycloak/useKeycloak";
import Keycloak from "keycloak-js";
import KeycloakProvider from "../../keycloak/KeycloakProvider";

describe("useKeycloak hook tests", () => {
  test("should throw keycloak client not set error", () => {
    try {
      useKeycloak();
    } catch (err) {
      expect(err).not.toBeFalsy();
    }
  });

  test("should return keycloak instance and initialized flag", async () => {
    let ins = null;
    let init;
    const TestComp = function () {
      const { keycloak, initialized } = useKeycloak();
      ins = keycloak;
      init = initialized;
      return null;
    };
    await act(async () => {
      render(
        <KeycloakProvider client={new Keycloak()}>
          <TestComp />
        </KeycloakProvider>
      );
    });

    expect(ins).toBeInstanceOf(Keycloak);
    expect(typeof init).toBe("boolean");
  });
});
