/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { shallow } from "@testing-library/react";
import Header from "../components/Header";

it.skip("renders without crashing", () => {
    shallow(<Header />);
  });

