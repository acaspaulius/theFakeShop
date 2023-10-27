const API_ENDPOINT = 'https://fakestoreapi.com/products';

// variables
const productContainerElement = document.querySelector('#product-cards');

// functions
const getProductData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayProductCard = (productsArray, location) => {
  productsArray.forEach((product) => {
    const productCard = document.createElement('div');
    const productImage = document.createElement('img');
    const productTitle = document.createElement('h3');
    const productPrice = document.createElement('p');
    const productDescription = document.createElement('p');

    productCard.classList.add('product-card');
    productImage.src = product.image;

    productTitle.classList.add('product-title');
    productTitle.innerText = product.title;

    productPrice.classList.add('product-price');
    productPrice.innerText = `$${product.price}`;

    productDescription.classList.add('product-description');
    productDescription.innerText = product.description;

    productCard.append(productImage, productTitle, productPrice, productDescription);
    location.appendChild(productCard);
  });
};

// events
document.addEventListener('DOMContentLoaded', async () => {
  const products = await getProductData(API_ENDPOINT);
  displayProductCard(products, productContainerElement);
});
