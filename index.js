
const apidataadd = (data) => {
    fetch("http://localhost:3001/products", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}
 

const aipmaker = (e) => {
    e.preventDefault()

    let data = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        image: document.getElementById("img").value
    }
    apidataadd(data)
    // console.log(data);
}

document.getElementById("formData").addEventListener("submit", aipmaker)