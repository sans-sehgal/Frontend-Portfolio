import {
  render,
  fireEvent,
  screen,
  cleanup,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import characters2 from "./testing/mock/characters-2";
import characters1 from "./testing/mock/characters";

import { describe, expect, test, afterEach, beforeEach } from "vitest";

describe("<App />", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  describe("loading character", () => {
    test('renders the title "Characters"', async () => {
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent("Characters");
    });
    test("renders a list of 10 characters", async () => {});
  });
  describe("loading more characters", () => {
    test('has a "Load More Characters" button', async () => {
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Load More Characters");
    });

    test("clicking load more gets 10 more characters", async () => {
      let charactersInit = await screen.findAllByText("name");
      const button = screen.getByRole("button");

      expect(charactersInit.length).toBe(10);

      charactersInit.forEach((character, idx) => {
        const parentElement = character.parentElement;
        expect(parentElement).toHaveTextContent(
          characters1[idx].name === ""
            ? characters1[idx].aliases[0]
            : characters1[idx].name
        );
      });

      fireEvent.click(button);

      await waitFor(() => {
        const charactersFin = screen.getAllByText("name");
        expect(charactersFin.length).toBe(10);

        charactersFin.forEach((character, idx) => {
          const parentElement = character.parentElement;
          console.log(parentElement?.textContent);
          expect(parentElement).toHaveTextContent(
            characters2[idx].name === ""
              ? characters2[idx].aliases[0]
              : characters2[idx].name
          );
        });
      });
    });
    test("clicking load more increases the page number", async () => {
      const button = screen.getByRole("button");
      const div = screen.getByText("Next Page: 1");
      fireEvent.click(button);
      expect(div).toHaveTextContent("Next Page: 2");
    });
  });
});
