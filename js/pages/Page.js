import Component from "../components/Component";

export default class Page extends HTMLElement
{
  connectedCallback()
  {
    document.addEventListener('keyup', this.onKeyUp.bind(this), true);
    document.addEventListener('keydown', this.onKeyDown.bind(this), true);
  }
  
  disconnectedCallback()
  {
    document.removeEventListener('keyup', this.onKeyUp.bind(this), true);
    document.removeEventListener('keydown', this.onKeyDown.bind(this), true);
  }
  
  onKeyUp(event)
  {
    Object.getOwnPropertyNames(this)
      .filter(key => this[key] instanceof Component)
      .filter(key => this[key].active === true)
      .forEach(key => this[key].onKeyUp(event));
  }
  
  onKeyDown(event)
  {
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].indexOf(event.key) > -1)
      event.preventDefault();

    Object.getOwnPropertyNames(this)
      .filter(key => this[key] instanceof Component)
      .filter(key => this[key].active === true)
      .forEach(key => this[key].onKeyDown(event));
  }
}
