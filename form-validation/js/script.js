let item = []



let submit = () => {

    // let isimage, isproduct, iscategory, isprice, isstock, isoffer = false
    let isimage = false,
        isproduct = false,
        iscategory = false,
        isprice = false,
        isstock = false,
        isoffer = false


    // image
    //in
    let image = document.getElementById("image")
    //er
    let image_error = document.getElementById("image_error")
    //boolen
    //validation
    if (image.value === "") {
        image_error.innerText = "Enter the image url"
        image.style.border = "1px solid red"
        isimage = false
    }
    else {
        image_error.innerText = ""
        image.style.border = "1px solid black"
        isimage = true
    }

    //product
    //in
    let product = document.getElementById("product")
    //er
    let product_error = document.getElementById("product_error")
    //validation
    if (product.value === "") {
        product_error.innerText = "Enter the product name"
        product.style.border = "1px solid red"
        isproduct = false
    }
    else {
        product_error.innerText = ""
        product.style.border = "1px solid black"
        isproduct = true
    }

    //category
    //in
    let category = document.getElementById("category")
    //er
    let category_error = document.getElementById("category_error")
    //validation
    if (category.value === "") {
        category_error.innerText = "Enter the category"
        category.style.border = "1px solid red"
        iscategory = false
    }
    else {
        category_error.innerText = ""
        category.style.border = "1px solid black"
        iscategory = true
    }

    //price
    //in
    let price = document.getElementById("price")
    //er
    let price_error = document.getElementById("price_error")
    //validation
    if (price.value === "") {
        price_error.innerText = "Enter the price"
        price.style.border = "1px solid red"
        isprice = false
    }
    else {
        price_error.innerText = ""
        isprice = true
        price.style.border = "1px solid black"

    }

    //stock
    //in
    let stock = document.getElementById("stock")
    //er
    let stock_error = document.getElementById("stock_error")
    //validation
    if (stock.value === "") {
        stock_error.innerText = "Enter the stock"
        stock.style.border = "1px solid red"
        isstock = false
    }
    else {
        stock_error.innerText = ""
        isstock = true
        stock.style.border = "1px solid black"
    }

    //offer
    //in
    let offer = document.getElementById("offer")
    //er
    let offer_error = document.getElementById("offer_error")
    //validation
    if (offer.value === "") {
        offer_error.innerText = "Enter the offer"
        offer.style.border = "1px solid red"
        isoffer = false
    }
    else {
        offer_error.innerText = ""
        isoffer = true
        offer.style.border = "1px solid black"
    }

    if (isimage && isproduct && iscategory && isprice && isstock && isoffer) {

        let obj = {
            image: image.value,
            product: product.value,
            category: category.value,
            price: price.value,
            stock: stock.value,
            offer: offer.value
        }
        console.log(obj, " obj")

        item.push(obj)


        image.value = ""
        product.value = ""
        category.value = ""
        price.value = ""
        stock.value = ""
        offer.value = ""

        alert("successfully submitted")

    }

    console.log(item, "array")



}