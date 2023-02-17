import { Hello } from "@components/Hello";
import { h } from "preact";
import { renderToString } from "preact-render-to-string";

console.log(renderToString(<Hello />)); // should print "<div>Hello from Preact !</div>"
