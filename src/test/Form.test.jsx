import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import Form from "../pages/Form";
//import GardernForm from "../components/GardenForm"


//elemento click funciona
test('click', () => {
  render(
    <div>
      <label htmlFor="checkbox">Check</label>
      <input id="checkbox" type="checkbox" />
    </div>,
  )

  userEvent.click(screen.getByText('Check'))
  expect(screen.getByLabelText('Check')).toBeChecked()
})




// describe("When user fills in and submits form", () => {
//   it("submit method is called with title and content", () => {
//     const submit = jest.fn();
//     render(<GardernForm submit={submit} />);

//      const titleInput = screen.getByLabelText(/Title/i);
//      userEvent.type(titleInput, "My awesome post");

//      const observationsInput = screen.getByLabelText(/Observations/i);
//      userEvent.type(observationsInput, "Lorem ipsum dolor sit amet");

//      const priceInput = screen.getByLabelText(/Price/i);
//     userEvent.type(priceInput, "2");

//     const button = screen.getByRole("button", { name: /Submit/i });
//     userEvent.click(button);

//      expect(submit).toHaveBeenCalledWith({
//        title: "My awesome post",
//        observations: "Lorem ipsum dolor sit amet",
//        price:"2",
//      });
//   });
// });
