export default class Card {
    constructor (someProduct = {}) {
      this.state = someProduct;
      this.myRender();
    }
  
    getTemplate () {
      const result =  `
      <article class="product">
      <div class="product-image" style="background-image:
      url( ${this.state.images[0]})">
     </div>
  <div class="rating-price">
    <div class="rating">
      <button class="btn-f">
        ${this.state.rating}
        <img src="../img/Star1.svg" alt="photo" />
      </button>
    </div>
    <div class="price">${this.state.price}</div>
  </div>
  <h5 class="card-list">>${this.state.title} </h5>
  <p class="card-line">${this.state.category}</p>
  <footer class="product-footer">
  <button class="btn-card" data-element="addToCartBtn">ADD TO CART</button>
  </footer>
  </article>
      `;
  
      return result
    }
  
    update(data = {}) {
      this.state = data;
      this.componentElement.innerHTML = this.getTemplate();
    }
  
    myRender () {
      const wrapper = document.createElement('div');
  
      wrapper.innerHTML = this.getTemplate();
  
      this.element = wrapper.firstElementChild;
    }
  }
  