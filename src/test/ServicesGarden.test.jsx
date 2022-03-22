/*import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ServicesGarden from "../components/ServicesGarden";

const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

describe("ServicesGarden", () => {
  it("Must display a title", () => {
    const props = {
      title: "title",
      observations:"observations",
      price: 20,
      onDelete:"click",
    };

    const screen = render(<ServicesGarden {...props} />, { wrapper: Wrapper });

    expect(screen.getByText(`por dia: ${props.price}$`)).toBeInTheDocument();
    expect(screen.getByText(props.observations)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();

  });
});*/