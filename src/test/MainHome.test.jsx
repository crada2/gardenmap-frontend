import React from "react";
import { shallow } from "@testing-library/react";
import MainHome from "../components/MainHome";

it.skip("renders without crashing", () => {
  shallow(<MainHome />);
});
