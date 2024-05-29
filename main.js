let link = "https://fakestoreapi.com/products"
// console.log(link)
async function fetchData(){
    let res = await fetch(link)
    let data = await res.json();
    let collection= document.querySelector(".collection")
    console.log(data)

    data.forEach(element => {
        console.log(element);
    let product = document.createElement('img')
    product.src = element.image

    let  = document.createElement('h2')

        product.innerText = element.price
        collection.append(product)
    });

}

fetchData()
