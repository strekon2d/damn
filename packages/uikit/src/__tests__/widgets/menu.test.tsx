import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { renderWithProvider } from "../../testHelpers";
import { Menu, menuConfig, Language } from "../../widgets/Menu";
import { footerLinks } from "../../components/Footer/config";
import { SubMenuItemsType } from "../../components/SubMenuItems/types";

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `en${i}-locale`,
}));

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(
    <BrowserRouter>
      <Menu
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="en-US"
        cakePriceUsd={0.23158668932877668}
        links={menuConfig}
        subLinks={menuConfig[0].items as SubMenuItemsType[]}
        footerLinks={footerLinks}
        activeItem="Trade"
        activeSubItem="Exchange"
        buyCakeLabel="Buy CAKE"
        buyCakeLink="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
      >
        body
      </Menu>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});
