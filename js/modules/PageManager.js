import { InvalidOperationError } from "../errors";
import Page from "../pages/Page";

export default class PageManager
{
  static get page() { return this._stack[this._stack.length - 1]; }
  
  static push(page)
  {
    this._stack = this._stack || [];
    if (!(page instanceof Page))
        throw new InvalidOperationError();
    this._stack.push(page);

    document.body.innerHTML = '';
    document.body.appendChild(page);
  }
}
