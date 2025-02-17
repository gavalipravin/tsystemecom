var ProductService = /** @class */ (function () {
    function ProductService() {
        this.catalogs = [
            {
                "id": 1,
                "productName": "Basmati Biryani Rice",
                "description": "Rice",
                "price": 499.50,
                "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1qimQoBr7uKDwhoE2YW4OvJgtL2Z0LObBw&s"
            },
            {
                "id": 2,
                "productName": "Sprite",
                "description": "Coldring",
                "price": 85.00,
                "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAnnwihAEvO8avpuTzZyCcwdlgOINBD_Nyg&s"
            },
            {
                "id": 3,
                "productName": "Gemini Oil",
                "description": "Sunflower Oil.",
                "price": 129.30,
                "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsGIjlFQazYHCURcyFHkRx3XAdhssO6IVvQ&s"
            },
            {
                "id": 4,
                "productName": "Pohe",
                "description": "White Pohe",
                "price": 53.99,
                "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxu_dBGp5QcptnZAmE2LTyHDiLedFAjwSwlA&s"
            },
            {
                "id": 5,
                "productName": "Fortune Besan",
                "description": "Basan",
                "price": 89.99,
                "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EIhwHKHZJA7AXwgSM1Za34Ctnqbt7OOfyA&s"
            },
            {
                "id": 6,
                "productName": "Fortune Atta",
                "description": "Atta.",
                "price": 210.11,
                "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzPNn4suCk0Xxh1kXDr-OjOFD52eEMxnaXw&s"
            },
            {
                "id": 7,
                "productName": "Tata Salt",
                "description": "Salt.",
                "price": 34.99,
                "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5rEZO-WHtqCwaANRBf18ZkZOElV-0TaJcng&s"
            }
        ];
    }
    // Method to get all products
    ProductService.prototype.getCatalogs = function () {
        return this.catalogs;
    };
    // Method to get a product by its ID
    ProductService.prototype.getProductById = function (productId) {
        var products = null;
        for (var _i = 0, _a = this.catalogs; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.id === productId) {
                products = product;
                break;
            }
        }
        return products;
    };
    // Method to add a product to the cart (using sessionStorage)
    ProductService.prototype.addToCart = function (product) {
        var cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };
    ProductService.prototype.addToCartDetails = function (product) {
        var cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };
    return ProductService;
}());
 
