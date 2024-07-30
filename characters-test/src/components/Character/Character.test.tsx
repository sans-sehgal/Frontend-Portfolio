import { describe, expect, test, beforeEach, afterEach } from "vitest";
import Character from "./Character";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";

describe("<Character />", () => {
  beforeEach(() => {
    render(<Character character={mockCharacter} />);
  });

  afterEach(() => {
    cleanup();
  });

  const mockCharacter = {
    url: "https://www.anapioficeandfire.com/api/characters/1",
    name: "",
    gender: "Female",
    culture: "Braavosi",
    born: "",
    died: "",
    titles: [""],
    aliases: ["The Daughter of the Dusk"],
    father: "",
    mother: "",
    spouse: "",
    allegiances: [],
    books: ["https://www.anapioficeandfire.com/api/books/5"],
    povBooks: [],
    tvSeries: [""],
    playedBy: [""],
  };

  test('shows fields for "name" and "culture"', async () => {
    const screenChar = screen.getAllByRole("strong");
    expect(screenChar[0]).toHaveTextContent("name");
    expect(screenChar[1]).toHaveTextContent("culture");
  });
  test("shows culture if it is present", async () => {
    const screenChar = screen.getByText("culture");
    const cultureDiv = screenChar.parentElement;
    expect(cultureDiv).toHaveTextContent(mockCharacter.culture);
  });
  test("shows alias if no name is present", async () => {
    if (mockCharacter.name === "") {
      const nameDiv = screen.getByText("name").parentElement;
      expect(nameDiv).toHaveTextContent(mockCharacter.aliases[0]);
    } else {
      const nameDiv = screen.getByText("name").parentElement;
      expect(nameDiv).toHaveTextContent(mockCharacter.name);
    }
  });
  test("shows how many books this characters made an appearance in", async () => {
    const bookDiv = screen.getByText("Number of Books:").parentElement;
    expect(bookDiv).toHaveTextContent(mockCharacter.books.length.toString());
  });
});
