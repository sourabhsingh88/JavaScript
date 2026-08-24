let fetchData = async () => {
  try {
    let res = await fetch("https://fakestoreapi.com/products/");
    let finalData = await res.json();

    let box = document.getElementById("products");

    
    finalData.forEach((item) => {
      box.innerHTML += `
        <div class="card">
          <img src="${item.image}">
          <h4>${item.title}</h4>
          <p>$${item.price}</p>
        <!--  <p>$${item.description}</p> -->
        </div>
      `;
    });
    
  } catch (error) {
    console.log(error);
  }
};

fetchData();