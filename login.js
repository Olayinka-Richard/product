// document.addEventListener('DOMContentLoaded', () => {
//     const apiUrl = 'https://fakestoreapi.com/products';
//     const searchInput = document.getElementById('searchInput');
//     const searchButton = document.getElementById('searchButton');
//     const productsContainer = document.getElementById('productsContainer');

//     // Function to fetch and display products
//     const fetchProducts = async () => {
//         try {
//             const response = await fetch(apiUrl);
//             const products = await response.json();
//             displayProducts(products);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     // Function to display products
//     const displayProducts = (products) => {
//         productsContainer.innerHTML = ''; // Clear previous products
//         products.forEach(product => {
//             const productDiv = document.createElement('div');
//             productDiv.classList.add('product');
//             productDiv.innerHTML = `
//                 <h3>${product.title}</h3>
//                 <img src="${product.image}" alt="${product.title}">
//                 <p>${product.description}</p>
//                 <p>Price: $${product.price}</p>
//             `;
//             productsContainer.appendChild(productDiv);
//         });
//     };

//     // Search functionality
//     const searchProducts = () => {
//         const query = searchInput.value.toLowerCase();
//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(products => {
//                 const filteredProducts = products.filter(product =>
//                     product.title.toLowerCase().includes(query)
//                 );
//                 displayProducts(filteredProducts);
//             })
//             .catch(error => console.error('Error searching products:', error));
//     };

//     searchButton.addEventListener('click', searchProducts);

//     // Initial fetch
//     fetchProducts();
// });
