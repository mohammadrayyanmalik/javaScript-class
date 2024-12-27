fetch("http://localhost:8080/products")
.then(data=>data.json())
.then(data=>{
    console.log(data)
    data._embedded.products.forEach(products=>{
        document.write(`<h1>${products.productName}</h1>`) // plus lagane ki jhanjhat nahi rahegi
        document.write(products._links.self.href)
    })


    document.write(`<p>${data.page.number}</p>`)

//    data.page.forEach(products=>{
//     document.write(`<p>${products}</p>`)
//    })

})