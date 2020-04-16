export default class Component extends HTMLElement
{
  get active() { return this._active; }

  constructor()
  {
    super();
    this._active = false;
  }

  activate()
  {
    this._active = true;
  }

  deactivate()
  {
    this._active = false;
  }
  
  on(name, handler)
  {
    this.addEventListener(name, handler, true);
  }
  
  off (name, handler)
  {
    this.removeEventListener(name, handler, true);
  }
  
  emit(event)
  {
    this.dispatchEvent(event);
  }

  onKeyUp(event) { }
  onKeyDown(event) { }
}
