const ProductInfo = () => {

    const products = [
        { id: 1, name: "Product A", description: "Description A", price: 19.99 },
        { id: 2, name: "Product B", description: "Description B", price: 29.99 },
        { id: 3, name: "Product C", description: "Description C", price: 39.99 }
    ];

    const numbers = [1,2,3,4,5,12];

    return (
        <section>
            <div>
                <h2>Available Products</h2>
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map( (product,key) => (
                            <tr key={key}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>${product.price.toFixed(2)}</td>
                                <td><button>Add to Cart</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <ul>
                    {products.map((prod) => (
                    <li key={prod.id}>
                        {prod.name} - {prod.description} - ${prod.price.toFixed(2)}
                        &nbsp;<button>Add to Cart</button>
                    </li>
                    ))}
                </ul>
            </div>

            <h3>Numbers</h3>
            <ul>
                {numbers.map( (number, index) => (
                    <li key={number}>{index} === {number}</li>
                ))}
            </ul>
        </section>
    );
}

export default ProductInfo;