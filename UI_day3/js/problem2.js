var products = [];

function Product(productId, productName, productPrice, productDescription) {
    this.productId = productId;
    this.productName = productName;
    this.productPrice = productPrice;
    this.productDescription = productDescription;
}
Product.prototype.printAllProduct = function () {
    console.log(this.productId);
    console.log(this.productName);
    console.log(this.productPrice);
    console.log(this.productDescription);
}


function Product1(productType, productId, productName, productPrice, productDescription) {
    this.productType = productType;
    Product.call(this, productId, productName, productPrice, productDescription);
}
function Product2(productCategory, productId, productName, productPrice, productDescription) {
    Product.call(this, productId, productName, productPrice, productDescription);
    this.productCategory = productCategory;
}

Product1.prototype.printAllProduct = function () {
    console.log(this.productType);
    Product.prototype.printAllProduct.call(this);

}




var createProduct = () => {
 
    let productId = prompt("Enter Product Id");
    let productName = prompt("Enter Product Name");
    let productPrice = prompt("Enter Product price");
    let productDescription = prompt("Enter Product IDescription");
    let choiceOfProduct = prompt("Enter Your choice of Product");
    switch (choiceOfProduct) {
        case "1": 
            let productType = prompt("Enter Product type");
            let product1 = new Product1(productType, productId, productName, productPrice, productDescription);
            products.push(product1);
            break;
        case '2': 
             let productCategory = prompt("Enter Product Category");
            let product2 = new Product2(productCategory, productId, productName, productPrice, productDescription);
            products.push(product2);
            break;
        default:
            alert("Wrong Choice");
    }
    
    for (let p of products) {
        console.log(p);
    }

}

(function () {
    console.log("Welcome");
    createProduct();
}

)();