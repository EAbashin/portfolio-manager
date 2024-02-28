import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar", () => {
  test("test render", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    renderWithTranslation(<Sidebar />);
    const sidebar = screen.getByTestId("sidebar");
    const toggleButton = screen.getByTestId("sidebar-toggle");
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass("collapsed");
  });
});
