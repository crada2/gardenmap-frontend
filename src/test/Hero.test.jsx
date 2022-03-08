import React from 'react'
import { render } from '@testing-library/react'
import BtnSlider from '../components/Hero/BtnSlider';



test.todo(
  'should render a button, checks for href attribute'
)

it('should render a button', () => {
    render(<BtnSlider />)
  })


/*describe("BtnSlider", () => {


    it("Must display a title", () => {
        const props = {
            direction, 
            moveSlide 
        };
  
        const screen = render(<BtnSlider {...props} />);

  expect(screen.getByDisplayValue(props.direction)).toBeInTheDocument();
  
  expect(screen.getByText(props.moveSlide)).toBeInTheDocument();
 
    });

})*/