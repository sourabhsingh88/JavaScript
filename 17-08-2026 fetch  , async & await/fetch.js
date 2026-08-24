let fetchData = fetch('https://fakestoreapi.com/products')

fetchData.then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
});


// fetch("https://fakestoreapi.com/products")
//     .then(res => res.json())
//     .then(data => console.log(data));

// fetch("https://dummyjson.com/products")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));