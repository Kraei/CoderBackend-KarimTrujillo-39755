// Segundo desafío Karim Trujillo comisión 39755

console.log('Segundo desafío Karim Trujillo comisión 39755');

class ProductManager {
    #products
    constructor() {
        this.#products = [];
        //this.loadProducts();
    }

    //Método que retorna los productos agregados al arreglo
    getProducts = () => {
        return this.#products;
    };
    //Método que genera un id de manera automática sin repetirse
    #getID = () => {
        let id
        if (this.#products.length === 0) {id = 1}
        else {id = this.#products[this.#products.length-1].id + 1}
        return id;
    }

    //Agrega el producto a un arreglo
    addProduct = (title, description, price, thumbnail, code, stock) => {

        //Valida que el campo code no se repita
        if(this.#products.some(product => product.code === code)) {
            throw new Error(`El código "${code}" ya está en uso`)
        }

        let id = this.#getID();
        let newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.#products.push(newProduct)
    }
    //Valida la existencia del id y devuelve el producto, de lo contrario regresa un error
    getProductById(id) {
        const productById = this.#products.find(product => product.id === id);
        if (productById) {console.log(productById)}
        else {
            throw new Error(`El producto "${id}" no se entontró en la base de datos`)
        }
    }

    //Actualiza el campo de un producto con el id dado
    updateProduct(id, field, newValue) {
        const productIndex = this.#products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            throw new Error(`El producto con id "${id}" no se encontró en la base de datos`);
        }
        
        //Valida que no se cambie el campo "id"
        if (field === "id") {
            throw new Error(`No es posible cambiar el campo "id"`);
        }
        
        //Actualiza el campo del producto
        this.#products[productIndex][field] = newValue;
        console.log(`El campo "${field}" del producto con id "${id}" ha sido actualizado a "${newValue}"`);
    }

    deleteProduct(code) {
        const index = this.#products.findIndex(product => product.code === code);
        if (index !== -1) {
            this.#products.splice(index, 1);
            return console.log(`El producto con código: ${code} ha sido eliminado`)
        } else {
            throw new Error(`El producto con código "${code}" no se encontró en la base de datos`);
        }
    }
}

let newProduct = new ProductManager;
newProduct.addProduct('producto prueba', 'Este es un producto prueba', '200', 'Sin imagen', 'abc123', '25');
// newProduct.addProduct('producto prueba', 'Este es un producto prueba', '200', 'Sin imagen', 'abc123', '25');
newProduct.addProduct('producto dos', 'Este es un producto adicional', '600', 'Sin imagen', 'abc124', '10');
console.log(newProduct.getProducts());
console.log(newProduct.getProductById(2));
// console.log(newProduct.getProductById(3));
newProduct.updateProduct(1, 'stock', '11')
newProduct.deleteProduct('abc124');
console.log(newProduct.getProducts());