const products = 
[
  {
    image: 'images/prod-pic.jpg',
    name: 'Brown and black snickers',
    
    rating: 
    {
      stars: 4.5,
      count: 87
    },

    priceCents: 69950
  },
  {
    image: 'images/main-photo.jpg',
    name: 'half boot black snickers',
    
    rating: 
    {
      stars: 4.00,
      count: 189
    },

    priceCents: 75950
  },
  {
    image: 'images/hero-image.jpg',
    name: 'the Best snickers',
    
    rating: 
    {
      stars: 3.5,
      count: 79
    },

    priceCents: 65950
  }
  
];


let productsHTML = '';

products.forEach((product) => 
{
  productsHTML +=
  `
    <div class="product-container" >

        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          R${(product.priceCents/100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected="" value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
          Add to Cart
        </button>
            
    </div>`;

});

console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML ; 

