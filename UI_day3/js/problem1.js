var products = [];

class Product {
    constructor(productId, productName, productPrice, productDescription) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
    }
    printAllProduct() {
        console.log(this.productId);
        console.log(this.productName);
        console.log(this.productPrice);
        console.log(this.productDescription);
    }
}


var createProduct = () => {
    let productId = prompt("Enter Product Id");
    let productName = prompt("Enter Product Name");
    let productPrice = prompt("Enter Product price");
    let productDescription = prompt("Enter Product IDescription");

    const product = new Product(productId,productName,productPrice,productDescription);
    products.push(product);
    for (let p of products){
        console.log(p);
    }
    
}

(function () {
    console.log("Welcome");
    createProduct();
}

)();