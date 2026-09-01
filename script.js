const products = [
  {
    id: 1,
    name: "0.5mm Fineliner Çizim Kalemi Seti",
    category: "Yazı Gereçleri",
    price: 149.90,
    image: "https://images.unsplash.com/photo-1585336261026-7f41b3127393?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Noktalı Bullet Journal Defter (A5)",
    category: "Defter & Kağıt",
    price: 219.00,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "24'lü Akrilik Boya Seti",
    category: "Sanat & Hobi",
    price: 349.50,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "Metalik Masaüstü Kalemlik & Düzenleyici",
    category: "Masaüstü",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    name: "Pastel Renkli Fosforlu Kalem (6'lı)",
    category: "Yazı Gereçleri",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    name: "Vintage Çizim & Eskiz Defteri",
    category: "Defter & Kağıt",
    price: 185.00,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&auto=format&fit=crop&q=60"
  }
];

let cart = [];
const productsGrid = document.getElementById("productsGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");

function displayProducts(items) {
  productsGrid.innerHTML = "";
  if (items.length === 0) {
    productsGrid.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>Ürün bulunamadı.</p>";
    return;
  }
  
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-bottom">
          <span class="product-price">${product.price.toFixed(2)} ₺</span>
          <button class="add-to-cart" onclick="addToCart(${product.id})">Sepete Ekle</button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

function addToCart(productId) {
  const item = products.find(p => p.id === productId);
  cart.push(item);
  cartCount.textContent = cart.length;
}

categoryFilters.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    const category = e.target.dataset.category;
    
    if (category === "all") {
      displayProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      displayProducts(filtered);
    }
  }
});

searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const searched = products.filter(p => 
    p.name.toLowerCase().includes(term) || 
    p.category.toLowerCase().includes(term)
  );
  displayProducts(searched);
});

displayProducts(products);