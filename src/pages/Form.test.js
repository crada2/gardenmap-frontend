import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "Form";

describe("Form component", () => {
  it("calls submit method with title and content", () => {
    const submit = jest.fn();
    render(<Form submit={submit} />);

    const title = screen.getByLabelText(/title/i);
    userEvent.type(title, "My awesome post");

    const content = screen.getByLabelText(/description/i);
    userEvent.type(content, "Lorem ipsum dolor sit amet");

    const button = screen.getByRole("button", { name: /submit/i });
    userEvent.click(button);

    expect(submit).toHaveBeenCalledWith({
      title: "My awesome post",
      content: "Lorem ipsum dolor sit amet",
    });
  });
});