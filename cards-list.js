import Card from './card.js';

export default class CardsList {
    constructor (data = []) {
      this.data = data;
      this.render();
      this.renderCards();
    }
  
    getTemplate () {
      return `
        <div>
          <div class="products-list" data-element="body">
             <!--Cards list-->
          </div>
        </div>
      `;
    }
    render () {
      const wrapper = document.createElement('div');
  
      wrapper.innerHTML = this.getTemplate();
  
      this.element = wrapper.firstElementChild;
    }
    renderCards () {
      const cards = this.data.map(item => {
        const card = new Card(item);
       // removeAllChildNodes(body)
        return card.element;
      });
      const body = this.element.querySelector('[data-element="body"]');
      body.innerHTML = '';
     // removeAllChildNodes(body);
      body.append(...cards);
  
    }
    update (data = []) {
      this.data = data;
  
      this.renderCards();
    }
  }
  