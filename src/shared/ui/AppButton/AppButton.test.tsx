import { render, screen } from "@testing-library/react";
import { AppButton } from "./AppButton";

describe("AppButton", () => {
  test("Test render", () => {
    render(<AppButton>TEST</AppButton>);
    const button = screen.getByText("TEST");
    expect(button).toBeInTheDocument();
  });

  test("Test clear theme", () => {
    render(<AppButton variant="clear">TEST</AppButton>);
    const button = screen.getByText("TEST");
    expect(button).toHaveClass("clear");
  });
});
