document.addEventListener("DOMContentLoaded", function() {
    $('#imageModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget); // Button that triggered the modal
        const largeImageSrc = button.data('large'); // Extract info from data-* attributes
        const imageCaption = button.attr('alt');

        const modal = $(this);
        modal.find('#modal-img').attr('src', largeImageSrc);
        modal.find('#caption').text(imageCaption);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetId = button.getAttribute('data-target'); // Get the data-target attribute value
            var target = document.querySelector(targetId); // Select the target element by its ID
            
            // Toggle the display style of the target element
            if (window.getComputedStyle(target).display === 'none') {
                target.style.display = 'block';
            } else {
                target.style.display = 'none';
            }
        });
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        // Function to change theme
        function changeTheme(theme) {
            console.log("coa")
            document.body.className = theme; 
            localStorage.setItem('theme', theme); // Store theme in localStorage
        }

        // Theme switcher handling
        const themeSwitcherLinks = document.querySelectorAll('.dropdown-item');

        themeSwitcherLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); 
                const theme = link.getAttribute('data-theme');
                changeTheme(theme);
            });
        });

        // Set theme based on localStorage on page load
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            changeTheme(storedTheme);
        }
    });

document.addEventListener("DOMContentLoaded", function() {
    // Bootstrap accordion initialization
    $('#faqAccordion').on('show.bs.collapse', function (e) {
        $(e.target).prev().find('button').addClass('active');
    });

    $('#faqAccordion').on('hide.bs.collapse', function (e) {
        $(e.target).prev().find('button').removeClass('active');
    });
});


    // product data 
    var products = [
        { id: 1, name: "Product 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s" ,description: "Description of Product 1." },
        { id: 2, name: "Product 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s" ,description: "Description of Product 1." },
        { id: 3, name: "Product 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s" ,description: "Description of Product 1." },
        { id: 4, name: "Product 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s" ,description: "Description of Product 1." },
        { id: 5, name: "Product 5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s" ,description: "Description of Product 1." },
        { id: 6, name: "Product 6", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s" ,description: "Description of Product 1." },
        { id: 7, name: "Product 7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s" ,description: "Description of Product 1." },
        { id: 8, name: "Product 8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s" ,description: "Description of Product 1." },
        { id: 9, name: "Product 9", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s" ,description: "Description of Product 1." },
        { id: 10, name: "Product 10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMUdWJbcbKrf5TGsCKOcasvsZUIuPtnhW5g&s",description: "Description of Product"}
        
    ];

    var productsPerPage = 6; // Number of products to display per page
    var currentPage = 1; // Current page

    // Function to display products for the given page
    function displayProducts(page) {
        var startIndex = (page - 1) * productsPerPage;
        var endIndex = startIndex + productsPerPage;
        var pageProducts = products.slice(startIndex, endIndex);

        $('#productGallery').empty();
        pageProducts.forEach(function(product) {
            var productHtml = `<div class="col-md-4 mb-4">
                                  <div class="card">
                                    <img src="${product.image}" class="card-img-top img-thumbnail" alt="${product.name}" data-toggle="modal" data-target="#imageModal" data-large="${product.image}" data-caption="${product.name}">
                                    <div class="card-body">
                                      <h5 class="card-title">${product.name}</h5>
                                      <a onclick="setParam('id','${product.id}');navigateTo('product-details')" class="btn btn-primary">View More</a>
                                    </div>
                                  </div>
                                </div>`;
            $('#productGallery').append(productHtml);
        });
    }

    // Function to display pagination
function displayPagination() {
    var totalPages = Math.ceil(products.length / productsPerPage);
    var paginationHtml = '';

    for (var i = 1; i <= totalPages; i++) {
        var activeClass = (i === currentPage) ? 'active' : '';
        paginationHtml += `<li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
    }

    $('#pagination').html(paginationHtml);

    // Pagination click event
    $('#pagination .page-link').on('click', function(e) {
        e.preventDefault();
        var page = parseInt($(this).data('page'));
        currentPage = page;
        displayProducts(currentPage);

        // Scroll to top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update active class
        $('#pagination .page-item').removeClass('active');
        $(this).parent().addClass('active');
    });
}

// Function to initialize the modal with image and caption
$('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var largeImageSrc = button.data('large');
    var imageCaption = button.data('caption');

    var modal = $(this);
    modal.find('#modal-img').attr('src', largeImageSrc);
    modal.find('#caption').text(imageCaption);
});

// Initial display
displayProducts(currentPage);
displayPagination();


    function setParam(name,value){
        var url=new URL(window.location)
        url.searchParams.delete(name)
        url.searchParams.append(name,value)
        window.history.pushState({path:url.toString()},'',url.toString())
    }