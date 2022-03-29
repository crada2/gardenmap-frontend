import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

