const menu = [
    {
        name: "La Master",
        price: 12.99,
        description: "Hamburguesa con lechuga, cebolla morada, pepinillos y queso cheddar",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/La%20Master-IzSuhfrRzck9eIPJynU4fOnIB2Wkrt.jpeg",
        category: "hamburguesa"
    },
    {
        name: "Doble Carne",
        price: 15.99,
        description: "Doble carne, doble queso, lechuga y tomate con salsa especial",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doble%20Carne-x5mYZbBS4OJrlsElok2ecCHZB7Fqeo.jpeg",
        category: "hamburguesa"
    },
    {
        name: "Doble Queso",
        price: 14.99,
        description: "Hamburguesa con tocino y doble queso, lechuga y salsa especial",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doble%20Queso-A3BIkrKi0TRrhkH14DDrrQeL6ZP9Hb.jpeg",
        category: "hamburguesa"
    },
    {
        name: "Byte Triple",
        price: 16.99,
        description: "Triple carne, queso, lechuga, tomate, cebolla y pepinillos",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Byte%20Triple-FdJNdZG9i7iO1vbmqjHMSJZByAuceS.jpeg",
        category: "hamburguesa"
    },
    {
        name: "Clásica",
        price: 11.99,
        description: "Hamburguesa con queso, lechuga, tomate y pepinillos",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clasica-43d7iMw4NwDJWWhe7kxmo5Sks4S9F4.jpeg",
        category: "hamburguesa"
    },
    {
        name: "Sprite",
        price: 2.99,
        description: "Refresco Sprite 355ml",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sprite-MBsd7gBwbKDzEkbnVdKLR4c25ZWI5U.jpeg",
        category: "bebida"
    },
    {
        name: "Pepsi",
        price: 2.99,
        description: "Refresco Pepsi 355ml",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pepsi-VPFChdKzFTyyAHyicHHCH3nAxkjVXR.jpeg",
        category: "bebida"
    },
    {
        name: "Coca-Cola",
        price: 2.99,
        description: "Refresco Coca-Cola 355ml",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coca-Cola-B8svVz0PbqS45vU3lN17yz5dMQC2kC.jpeg",
        category: "bebida"
    },
    {
        name: "Fanta",
        price: 2.99,
        description: "Refresco Fanta 355ml",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fanta-GaANCxhsqzy7vgITArCIxtSFbybtfn.jpeg",
        category: "bebida"
    },
    {
        name: "Agua Minalba",
        price: 1.99,
        description: "Agua mineral natural 500ml",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Minalba-OWxI6CwOufhQftlR7HiPRZyhUgPeaT.jpeg",
        category: "bebida"
    }
];

let currentFilter = 'all';

function filterMenu(category) {
    currentFilter = category;
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || category === itemCategory) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });

    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function displayMenu() {
    const menuElement = document.getElementById("menu");
    menuElement.innerHTML = '';
    
    menu.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.className = "menu-item";
        itemElement.setAttribute('data-category', item.category);
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="description">${item.description}</p>
            <p class="price">$${item.price.toFixed(2)}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Agregar al carrito</button>
        `;
        menuElement.appendChild(itemElement);
    });

    filterMenu(currentFilter);
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();

    const notification = document.createElement("div");
    notification.textContent = "¡Agregado al carrito!";
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.backgroundColor = "var(--color-naranja)";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.animation = "fadeIn 0.3s, fadeOut 0.3s 2s forwards";

    document.body.appendChild(notification);
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 2300);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

document.getElementById("checkout-btn")?.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("El carrito está vacío");
        return;
    }
    alert("¡Gracias por tu pedido! Total: $" + document.getElementById("cart-total").textContent);
    cart.length = 0;
    updateCart();
});


document.addEventListener("DOMContentLoaded", displayMenu);

const style = document.createElement("style");
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(20px); }
}
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterMenu(button.getAttribute('data-category'));
        });
    });
});

const cart = [];