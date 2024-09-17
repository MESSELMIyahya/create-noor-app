import { createRoot, renderRoot } from "@noorjs/core";
import "./style.css";
import App from "./app";

// create the root
const root = createRoot();

// render the app component to the root
renderRoot(root, [<App />]);
