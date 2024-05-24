import React from "react";
import { createRoot } from "react-dom/client";
import FormComponent from "./Components/form-component";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<FormComponent />);
