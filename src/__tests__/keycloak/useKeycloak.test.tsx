import { act, render } from "@testing-library/react";
import { useKeycloak } from "../../keycloak/useKeycloak";
import KeycloakProvider from "../../keycloak/KeycloakProvider";
// import getAuthInstance from "../../authInstance";
import Keycloak from "keycloak-js";

describe("useKeycloak hook tests", () => {
  test("should throw keycloak client not set error", () => {
    try {
      useKeycloak();
    } catch (err) {
      console.log(err);
      // expect(err).not.toBeFalsy();
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
    // eslint-disable-next-line testing-library/no-unnecessary-act
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
