let link = "https://fakestoreapi.com/products"
// console.log(link)
async function fetchData(){
    let res = await fetch(link)
    let data = await res.json();
    let collection= document.querySelector(".collection")
    // console.log(data.results[0].name)

    data.results.forEach(element => {
        console.log(element);
    let product = document.createElement('img')
    product.src = element.image

    let  = document.createElement('h2')

        productP.innerText = element.price
        collection.append(product)
    });

}

fetchData()
