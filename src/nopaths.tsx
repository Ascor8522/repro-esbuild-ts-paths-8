import { h } from "preact";
import { renderToString } from "preact-render-to-string";

import { Hello } from "./components/Hello";

console.log(renderToString(<Hello />)); // should print "<div>Hello from Preact !</div>"
