fetch("http://localhost:8080/products")
.then(data=>data.json())
.then(data=>{
    console.log(data)
    data._embedded.products.forEach(product => {
        
        // document.write(`<h1>${product.productName}</h1>`)

        const a=document.createElement("a")
        a.textContent=product.productName;
        document.body.appendChild(a);
        console.log(product._links.self.href);
        // set atttributes me pahle jo attributes banana hai woh likhen ge phir links
        a.setAttribute("href",product._links.self.href)

        a.addEventListener("click",(event)=>{
            event.preventDefault();
            fetch(product._links.self.href,{method:"Delete"})
            .then(data=>data.json())
            .then(data=>console.log("deleted products"+data))
        })

        


    });
})