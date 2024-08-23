
// array list //
const Products_Details = [
    {
        url: "Images/gyro-sandwich.png",
        name: "Gyro Sandwich",
        price: "$15.00"
    },
    {
        url: "Images/enchilada.png",
        name: "Enchilada",
        price: "$25.50"
    },
    {
        url: "Images/green-beans.png",
        name: "Green Beans",
        price: "$12.00"
    },
    {
        url: "Images/pizza-with-mushroom.png",
        name: "Pizza",
        price: "$18.50"
    },
    {
        url: "Images/Chicken-Pot-Pie.png",
        name: "Chicken Pot Pie",
        price: "$25.00"
    },
    {
        url: "Images/green-salad.png",
        name: "Green Salad",
        price: "$15.00"
    },
    {
        url: "Images/gyro-sandwich.png",
        name: "Gyro Sandwich",
        price: "$15.00"
    },
    {
        url: "Images/enchilada.png",
        name: "Enchilada",
        price: "$25.50"
    },
    {
        url: "Images/green-beans.png",
        name: "Green Beans",
        price: "$12.00"
    }
];


// Track the current state of the button //
let TOGGLE = false;

function toggleProducts() {
    const products_container = document.getElementById("products_id");
    const button = document.querySelector(".see-more button");

    if (TOGGLE) {
        while (products_container.children.length > 6) {
            products_container.removeChild(products_container.lastChild);
        }
        button.textContent = "See More Products";
        // for a smooth transition //
        products_container.scrollIntoView({ behavior: 'smooth' });
    }
    else {
        for (let i = 0; i < Products_Details.length; i++) {
            const productDivImage = document.createElement("div");
            productDivImage.classList.add("product-card");
            productDivImage.innerHTML = `
                <img src="${Products_Details[i].url}" alt="${Products_Details[i].name}">
                <h3>${Products_Details[i].name}</h3>
                <p>${Products_Details[i].price}</p>
                <button>Add To Cart</button>
            `;
            products_container.appendChild(productDivImage);
        }

        button.textContent = "Show Less";
    }
    
    TOGGLE = !TOGGLE;
}



//
function Subscribe_handler(event) {
    event.preventDefault();  
    const emailInput = event.target.mail;
    const email = emailInput.value;

    const new_div = document.getElementById("subscribe_message");
    new_div.innerHTML = '';  

    const msg_for_subscriber = document.createElement("p");

    if (emailInput.checkValidity()) {
        msg_for_subscriber.innerText = `Thank you for subscribing with ${email}!`;
    } else {
        msg_for_subscriber.innerText = 'Please enter a valid email address.';
    }

    new_div.appendChild(msg_for_subscriber);
}








//----------------------------------------------------------//
//Same functionality by EventListener// 

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.inxput').addEventListener('submit', function(event) {
//         event.preventDefault(); 
        
//         var email = document.getElementById('inxp').value;
//         var messageDiv = document.getElementById('subscribe_message');
        
//         if (email) {
//             messageDiv.textContent = 'Thank you for subscribing with ' + email + '!';
//         } else {
//             messageDiv.textContent = 'Please enter a valid email address.';
//         }
//     });
// });

//------------------------------------------------------------//
