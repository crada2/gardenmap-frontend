import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; //imita el comportamiendo del usuario con eventos
import GardenForm from "../components/GardenForm";

describe("Form component", () => {
  it("calls submit method with title and content", () => {
    const submitHandler = jest.fn();  //funcion fake js que es la q pasaremos por submit
    render(<GardenForm onSubmit={submitHandler} />);

    //getbylabeltext nos busca el input de una label
    //fireevent emite  evento de change. se le pasa el contenido
    const titleInput = screen.getByLabelText(/title/i);
     userEvent.type(titleInput, "My awesome title");

    // const usernameInput = screen.getByLabelText(/username/i);
    // userEvent.type(usernameInput, "Medina");
    

    const button = screen.getByRole("button", { name: /submit/i });
    userEvent.click(button);
  

    expect(submit).toHaveBeenCalledWith({
      title: "My awesome title",
      // userName: "Medina",
    });
  });
});