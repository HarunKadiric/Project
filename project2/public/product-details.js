$(document).ready(function() {
    // Function to parse URL parameters
    function getParameterByName(name, url) {
         var params=new URLSearchParams(url ?? window.location.search);
         return params.get(name)
    }

    var productId = getParameterByName('id');
    if (productId !== null && productId !== '') {
        // Simulate fetching product details from an API or database
        var product = getProductDetails(productId); 

        // Populate product details
        var productDetailsHtml = `<div class="col-md-6">
                                     <img src="${product.image}" class="img-fluid" alt="${product.name}">
                                 </div>
                                 <div class="col-md-6">
                                     <h2>${product.name}</h2>
                                     <p>${product.description}</p>
                                     <p>Price: $${product.price}</p>
                                     <p>Availability: ${product.availability}</p>
                                     <a href="#" class="btn btn-primary">Add to Cart</a>
                                 </div>`;

        $('#productDetails').html(productDetailsHtml);
    } else {
        $('#productDetails').html('<p>Product not found.</p>');
    }
});

// Function to simulate fetching product details 
function getProductDetails(productId) {
    var products = [
        {
            id: '1',
            name: 'Product 1',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s',
            description: 'Description of Product 1.',
            price: '19.99',
            availability: 'In Stock'
        },
        {
            id: '2',
            name: 'Product 2',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s',
            description: 'Description of Product 2.',
            price: '24.99',
            availability: 'Out of Stock'
        },
        {
            id: '3',
            name: 'Product 3',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s',
            description: 'Description of Product 2.',
            price: '59.99',
            availability: 'In Stock'
        },
        {
            id: '4',
            name: 'Product 4',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s',
            description: 'Description of Product 2.',
            price: '199.99',
            availability: 'In Stock'
        },
        {
            id: '5',
            name: 'Product 5',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s',
            description: 'Description of Product 2.',
            price: '249.99',
            availability: 'In Stock'
        },
        {
            id: '6',
            name: 'Product 6',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s',
            description: 'Description of Product 2.',
            price: '49.99',
            availability: 'In Stock'
        },
        {
            id: '7',
            name: 'Product 7',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s',
            description: 'Description of Product 2.',
            price: '99.99',
            availability: 'In Stock'
        },
        {
            id: '8',
            name: 'Product 8',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s',
            description: 'Description of Product 2.',
            price: '39.99',
            availability: 'In Stock'
        },
        {
            id: '9',
            name: 'Product 9',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s',
            description: 'Description of Product 2.',
            price: '24.99',
            availability: 'In Stock'
        },
        {
            id: '10',
            name: 'Product 10',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s',
            description: 'Description of Product 2.',
            price: '79.99',
            availability: 'Out of Stock'
        },
    ];

    // Find the product by ID
    var product = products.find(function(prod) {
        return prod.id === productId;
    });

    return product;
}
