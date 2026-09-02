// ------- Kategoriler -------
const categories = [
  { id: "tumu", label: "Tümü" },
  { id: "defter", label: "Defter & Kağıt" },
  { id: "kalem", label: "Kalem & Boyama" },
  { id: "dosya", label: "Dosyalama" },
  { id: "ofis", label: "Ofis" },
  { id: "sanat", label: "Sanat & Hobi" },
  { id: "okul", label: "Okul Çantası" },
  { id: "parti", label: "Parti & Hediye" },
  { id: "favoriler", label: "❤ Favorilerim" },
];

// Kategori bazlı gerçekçi görseller (ücretsiz stok - Pexels).
// Kendi ürün fotoğrafların olduğunda buradaki img alanlarını
// "urunler/dosya-adi.jpg" gibi kendi dosya yoluna çevirebilirsin.
const catImages = {
  defter: "https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=400",
  kalem:  "https://images.pexels.com/photos/32092473/pexels-photo-32092473.jpeg?auto=compress&cs=tinysrgb&w=400",
  dosya:  "https://images.pexels.com/photos/5668485/pexels-photo-5668485.jpeg?auto=compress&cs=tinysrgb&w=400",
  ofis:   "https://images.pexels.com/photos/6368847/pexels-photo-6368847.jpeg?auto=compress&cs=tinysrgb&w=400",
  sanat:  "https://images.pexels.com/photos/16698511/pexels-photo-16698511.jpeg?auto=compress&cs=tinysrgb&w=400",
  okul:   "https://images.pexels.com/photos/28503359/pexels-photo-28503359.jpeg?auto=compress&cs=tinysrgb&w=400",
  parti:  "https://images.pexels.com/photos/3508489/pexels-photo-3508489.jpeg?auto=compress&cs=tinysrgb&w=400",
};

const catFallbackIcon = {
  defter: "📓", kalem: "✏️", dosya: "📁", ofis: "🧮", sanat: "🎨", okul: "🎒", parti: "🎈"
};

const catDescriptions = {
  defter: "Okulda, ofiste veya günlük planlamada işine yarayacak kaliteli kağıt ürünü.",
  kalem: "Rahat yazım ve canlı renkler için günlük kullanıma uygun kalem/boyama ürünü.",
  dosya: "Evraklarını düzenli tutman için dayanıklı dosyalama malzemesi.",
  ofis: "Ofis masanda işini kolaylaştıracak pratik bir ekipman.",
  sanat: "Hobi ve sanat projelerin için canlı renkli, kaliteli malzeme.",
  okul: "Okul çağındaki çocuklar için dayanıklı ve şık okul ürünü.",
  parti: "Kutlamalarını renklendirecek eğlenceli parti malzemesi.",
};

// Mağaza WhatsApp numarası — kendi işletme numaranla değiştir (ülke kodu ile, boşluksuz)
const STORE_WHATSAPP_NUMBER = "905000000000";

// ------- Ürünler (gerçek ürünlerinle / fotoğraflarınla değiştir) -------
const products = [
  { name: "Spiralli Defter A4 (100 yp.)", cat: "defter", price: 45, old: 65, rating: 4.6, badge: "%31" },
  { name: "Kraft Bloknot Seti (3'lü)", cat: "defter", price: 38, old: null, rating: 4.4, badge: "YENİ" },
  { name: "Fotokopi Kağıdı A4 (500'lü)", cat: "defter", price: 150, old: 190, rating: 4.8, badge: "%21" },
  { name: "Yapışkanlı Not Kağıdı", cat: "defter", price: 22, old: null, rating: 4.3, badge: null },
  { name: "Tükenmez Kalem Seti (12'li)", cat: "kalem", price: 60, old: 85, rating: 4.7, badge: "%29" },
  { name: "Kurşun Kalem HB (10'lu)", cat: "kalem", price: 25, old: null, rating: 4.5, badge: null },
  { name: "Keçeli Boya Kalemi Seti (24 Renk)", cat: "kalem", price: 85, old: 110, rating: 4.9, badge: "%23" },
  { name: "Sulu Boya Seti (18 Renk)", cat: "sanat", price: 130, old: 170, rating: 4.6, badge: "%24" },
  { name: "Silgi & Kalemtıraş Seti", cat: "kalem", price: 18, old: null, rating: 4.2, badge: null },
  { name: "Fosforlu Kalem Seti (6 Renk)", cat: "kalem", price: 42, old: 55, rating: 4.6, badge: "%24" },
  { name: "Telli Dosya (10'lu)", cat: "dosya", price: 18, old: null, rating: 4.3, badge: null },
  { name: "Kapaklı Klasör 2 Halka", cat: "dosya", price: 55, old: 70, rating: 4.5, badge: "%21" },
  { name: "Arşiv Kutusu", cat: "dosya", price: 65, old: null, rating: 4.4, badge: "YENİ" },
  { name: "Şeffaf Dosya Poşeti (100'lü)", cat: "dosya", price: 48, old: 60, rating: 4.4, badge: "%20" },
  { name: "Zımba Makinesi", cat: "ofis", price: 55, old: null, rating: 4.6, badge: null },
  { name: "Delgeç (2 Delikli)", cat: "ofis", price: 45, old: null, rating: 4.3, badge: null },
  { name: "Hesap Makinesi", cat: "ofis", price: 120, old: 150, rating: 4.7, badge: "%20" },
  { name: "Koli Bandı (6'lı)", cat: "ofis", price: 40, old: null, rating: 4.1, badge: null },
  { name: "Makas (Ofis Tipi)", cat: "ofis", price: 28, old: null, rating: 4.5, badge: null },
  { name: "Masa Üstü Organizer", cat: "ofis", price: 95, old: 120, rating: 4.6, badge: "%21" },
  { name: "Akrilik Boya Seti (12 Renk)", cat: "sanat", price: 145, old: 180, rating: 4.8, badge: "%19" },
  { name: "Origami Kağıdı (200'lü)", cat: "sanat", price: 35, old: null, rating: 4.4, badge: null },
  { name: "Maket Bıçağı Seti", cat: "sanat", price: 30, old: null, rating: 4.2, badge: null },
  { name: "İlkokul Okul Çantası", cat: "okul", price: 350, old: 450, rating: 4.7, badge: "%22" },
  { name: "Kalem Kutusu (Çok Bölmeli)", cat: "okul", price: 65, old: 85, rating: 4.5, badge: "%24" },
  { name: "Beslenme Çantası", cat: "okul", price: 90, old: null, rating: 4.6, badge: "YENİ" },
  { name: "Doğum Günü Balonu (20'li)", cat: "parti", price: 55, old: null, rating: 4.5, badge: null },
  { name: "Hediye Paketi Kağıdı", cat: "parti", price: 20, old: null, rating: 4.3, badge: null },
  { name: "Parti Süsleme Seti", cat: "parti", price: 75, old: 95, rating: 4.6, badge: "%21" },
  { name: "Kupa Kalem Kutusu", cat: "okul", price: 32, old: null, rating: 4.2, badge: null },
];

// ------- Şubeler -------
const branches = [
  { city: "Ankara — Çankaya", addr: "Atatürk Blv. No:24", hours: "09:00–20:00" },
  { city: "İstanbul — Kadıköy", addr: "Bahariye Cd. No:11", hours: "09:00–21:00" },
  { city: "İstanbul — Bakırköy", addr: "İstasyon Cd. No:8", hours: "09:00–21:00" },
  { city: "İzmir — Bornova", addr: "Kazımdirik Mh. No:5", hours: "09:00–20:00" },
  { city: "Bursa — Nilüfer", addr: "FSM Blv. No:120", hours: "09:00–19:30" },
  { city: "Antalya — Muratpaşa", addr: "Lara Cd. No:33", hours: "09:00–20:00" },
];

const catColors = {
  defter: "#FFE3D6", kalem: "#DFF3EA", dosya: "#EFE6FB",
  ofis: "#DCE7FB", sanat: "#FDECC8", okul: "#FBE0E6", parti: "#E2F4E8"
};

// ------- State (localStorage ile kalıcı) -------
let cart = JSON.parse(localStorage.getItem("kalemhane_cart") || "{}");       // { productName: qty }
let favorites = JSON.parse(localStorage.getItem("kalemhane_favs") || "[]"); // [productName, ...]

function saveState() {
  localStorage.setItem("kalemhane_cart", JSON.stringify(cart));
  localStorage.setItem("kalemhane_favs", JSON.stringify(favorites));
}

// ------- DOM referansları -------
const grid = document.getElementById("product-grid");
const pillRow = document.getElementById("pill-row");
const branchGrid = document.getElementById("branch-grid");
const marqueeTrack = document.getElementById("marquee-track");
const searchInput = document.getElementById("searchInput");
const favBtn = document.getElementById("favBtn");
const favCount = document.getElementById("favCount");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const closeCart = document.getElementById("closeCart");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mainNav = document.getElementById("mainNav");
const sortSelect = document.getElementById("sortSelect");
const priceRange = document.getElementById("priceRange");
const maxPriceLabel = document.getElementById("maxPriceLabel");
const whatsappOrderBtn = document.getElementById("whatsappOrderBtn");
const productModalOverlay = document.getElementById("productModalOverlay");
const productModal = document.getElementById("productModal");

let currentFilter = "tumu";
let currentSearch = "";
let currentSort = "default";
let currentMaxPrice = 400;

function getFilteredProducts() {
  let list = products;
  if (currentFilter === "favoriler") {
    list = list.filter(p => favorites.includes(p.name));
  } else if (currentFilter !== "tumu") {
    list = list.filter(p => p.cat === currentFilter);
  }
  if (currentSearch.trim()) {
    const q = currentSearch.trim().toLocaleLowerCase("tr");
    list = list.filter(p => p.name.toLocaleLowerCase("tr").includes(q));
  }
  list = list.filter(p => p.price <= currentMaxPrice);

  list = [...list];
  if (currentSort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (currentSort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (currentSort === "rating-desc") list.sort((a, b) => b.rating - a.rating);
  if (currentSort === "discount-desc") {
    const discount = p => p.old ? (p.old - p.price) / p.old : 0;
    list.sort((a, b) => discount(b) - discount(a));
  }
  return list;
}

function renderProducts() {
  grid.innerHTML = "";
  const list = getFilteredProducts();

  if (list.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;color:#9aa5b1;padding:30px 0;">Bu filtrede ürün bulunamadı.</p>`;
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    const stars = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
    const isFav = favorites.includes(p.name);
    const imgUrl = catImages[p.cat];
    const fallback = catFallbackIcon[p.cat] || "📦";

    card.innerHTML = `
      <div class="thumb" style="background:${catColors[p.cat] || '#eee'}">
        ${p.badge ? `<span class="badge ${p.badge === 'YENİ' ? 'new' : ''}">${p.badge}</span>` : ""}
        <img src="${imgUrl}" alt="${p.name}" loading="lazy"
             onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'${fallback}',style:'font-size:3rem'}))">
      </div>
      <div class="p-body">
        <h3>${p.name}</h3>
        <div class="price-row">
          <span class="price">${p.price} TL</span>
          ${p.old ? `<span class="price-old">${p.old} TL</span>` : ""}
        </div>
        <div class="stars">${stars} <span>(${p.rating})</span></div>
        <div class="p-actions">
          <button class="fav-btn ${isFav ? 'active' : ''}" data-name="${p.name}" aria-label="Favorile">${isFav ? "♥" : "♡"}</button>
          <button class="add-btn" data-name="${p.name}">Sepete Ekle</button>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openProductModal(p.name));
    grid.appendChild(card);
  });

  // Favori butonları
  grid.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const name = btn.dataset.name;
      if (favorites.includes(name)) {
        favorites = favorites.filter(n => n !== name);
      } else {
        favorites.push(name);
      }
      saveState();
      updateCounts();
      renderProducts(); // kalp durumunu / favoriler filtresini güncelle
    });
  });

  // Sepete ekle butonları
  grid.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const name = btn.dataset.name;
      cart[name] = (cart[name] || 0) + 1;
      saveState();
      updateCounts();
      renderCartDrawer();
      btn.textContent = "Eklendi ✓";
      btn.classList.add("added");
      setTimeout(() => { btn.textContent = "Sepete Ekle"; btn.classList.remove("added"); }, 900);
    });
  });
}

// ------- Ürün Detay Modalı -------
function addToCartByName(name) {
  cart[name] = (cart[name] || 0) + 1;
  saveState();
  updateCounts();
  renderCartDrawer();
}

function openProductModal(name) {
  const p = findProduct(name);
  if (!p) return;
  const isFav = favorites.includes(p.name);
  const similar = products.filter(x => x.cat === p.cat && x.name !== p.name).slice(0, 3);

  productModal.innerHTML = `
    <button class="modal-close" id="modalCloseBtn">✕</button>
    <img class="modal-img" src="${catImages[p.cat]}" alt="${p.name}">
    <h2>${p.name}</h2>
    <div class="modal-price-row">
      <span class="price" style="font-size:1.3rem;">${p.price} TL</span>
      ${p.old ? `<span class="price-old">${p.old} TL</span>` : ""}
      <span class="stars">${"★".repeat(Math.round(p.rating))}${"☆".repeat(5 - Math.round(p.rating))} (${p.rating})</span>
    </div>
    <p class="modal-desc">${catDescriptions[p.cat] || ""}</p>
    <div class="p-actions" style="margin-top:16px;">
      <button class="fav-btn ${isFav ? 'active' : ''}" id="modalFavBtn">${isFav ? "♥ Favoride" : "♡ Favorile"}</button>
      <button class="add-btn" id="modalAddBtn">Sepete Ekle</button>
    </div>
    ${similar.length ? `
      <div class="modal-similar">
        <h4>Benzer ürünler</h4>
        <div class="modal-similar-grid">
          ${similar.map(s => `
            <div class="modal-similar-item" data-name="${s.name}">
              <img src="${catImages[s.cat]}" alt="${s.name}">
              ${s.name}
            </div>
          `).join("")}
        </div>
      </div>
    ` : ""}
  `;

  document.getElementById("modalCloseBtn").addEventListener("click", closeProductModal);
  document.getElementById("modalAddBtn").addEventListener("click", () => addToCartByName(p.name));
  document.getElementById("modalFavBtn").addEventListener("click", () => {
    if (favorites.includes(p.name)) favorites = favorites.filter(n => n !== p.name);
    else favorites.push(p.name);
    saveState();
    updateCounts();
    renderProducts();
    openProductModal(p.name); // modalı güncel favori durumuyla yeniden çiz
  });
  productModal.querySelectorAll(".modal-similar-item").forEach(el => {
    el.addEventListener("click", () => openProductModal(el.dataset.name));
  });

  productModalOverlay.classList.remove("hidden");
}

function closeProductModal() {
  productModalOverlay.classList.add("hidden");
}
productModalOverlay.addEventListener("click", (e) => {
  if (e.target === productModalOverlay) closeProductModal();
});

function renderPills() {
  pillRow.innerHTML = "";
  categories.forEach(c => {
    const pill = document.createElement("button");
    pill.className = "pill" + (c.id === currentFilter ? " active" : "");
    pill.textContent = c.label;
    pill.onclick = () => {
      currentFilter = c.id;
      document.querySelectorAll(".pill").forEach(el => el.classList.remove("active"));
      pill.classList.add("active");
      renderProducts();
    };
    pillRow.appendChild(pill);
  });
}

function renderBranches() {
  branchGrid.innerHTML = "";
  branches.forEach(b => {
    const card = document.createElement("div");
    card.className = "branch-card";
    card.innerHTML = `<h4>${b.city}</h4><p>${b.addr}</p><p>Saatler: ${b.hours}</p>`;
    branchGrid.appendChild(card);
  });
}

function renderMarquee() {
  const msgs = [
    "🎉 Okula dönüş kampanyası — seçili ürünlerde %40'a varan indirim",
    "🚚 150 TL üzeri alışverişlerde ücretsiz kargo",
    "🆕 Sanat & hobi kategorisine yeni ürünler eklendi",
    "🏬 55 şube ile Türkiye genelinde hizmetinizdeyiz",
  ];
  marqueeTrack.textContent = msgs.join("      •      ");
}

// ------- Sepet Drawer -------
function findProduct(name) { return products.find(p => p.name === name); }

function renderCartDrawer() {
  const entries = Object.entries(cart).filter(([, qty]) => qty > 0);
  if (entries.length === 0) {
    cartItemsEl.innerHTML = `<div class="drawer-empty">Sepetin boş.<br>Ürün eklemek için "Sepete Ekle"ye tıkla.</div>`;
    cartTotalEl.textContent = "0 TL";
    return;
  }
  let total = 0;
  cartItemsEl.innerHTML = entries.map(([name, qty]) => {
    const p = findProduct(name);
    if (!p) return "";
    total += p.price * qty;
    return `
      <div class="drawer-item">
        <img src="${catImages[p.cat]}" alt="${p.name}" onerror="this.style.display='none'">
        <div class="di-info">
          <h4>${p.name}</h4>
          <div class="di-qty">
            <button data-name="${name}" data-action="dec">−</button>
            <span>${qty}</span>
            <button data-name="${name}" data-action="inc">+</button>
            <span style="margin-left:auto;color:var(--red);font-weight:600;">${p.price * qty} TL</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
  cartTotalEl.textContent = total + " TL";

  cartItemsEl.querySelectorAll("button[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      if (btn.dataset.action === "inc") cart[name] = (cart[name] || 0) + 1;
      if (btn.dataset.action === "dec") {
        cart[name] = (cart[name] || 0) - 1;
        if (cart[name] <= 0) delete cart[name];
      }
      saveState();
      updateCounts();
      renderCartDrawer();
    });
  });
}

function updateCounts() {
  const totalCartQty = Object.values(cart).reduce((a, b) => a + b, 0);
  cartCount.textContent = totalCartQty;
  favCount.textContent = favorites.length;
}

function openDrawer() {
  cartDrawer.classList.add("open");
  drawerOverlay.classList.remove("hidden");
}
function closeDrawer() {
  cartDrawer.classList.remove("open");
  drawerOverlay.classList.add("hidden");
}

cartBtn.addEventListener("click", () => { renderCartDrawer(); openDrawer(); });
closeCart.addEventListener("click", closeDrawer);
drawerOverlay.addEventListener("click", closeDrawer);

favBtn.addEventListener("click", () => {
  currentFilter = "favoriler";
  renderPills();
  renderProducts();
  document.getElementById("urunler").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderProducts();
});

// ------- Mobil hamburger menü -------
hamburgerBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

// ------- Sıralama & fiyat filtresi -------
sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderProducts();
});
priceRange.addEventListener("input", (e) => {
  currentMaxPrice = Number(e.target.value);
  maxPriceLabel.textContent = currentMaxPrice + " TL";
  renderProducts();
});

// ------- WhatsApp'tan sipariş -------
whatsappOrderBtn.addEventListener("click", () => {
  const entries = Object.entries(cart).filter(([, qty]) => qty > 0);
  if (entries.length === 0) {
    alert("Sepetin boş, önce ürün ekle.");
    return;
  }
  let total = 0;
  const lines = entries.map(([name, qty]) => {
    const p = findProduct(name);
    const lineTotal = p.price * qty;
    total += lineTotal;
    return `• ${name} x${qty} — ${lineTotal} TL`;
  });
  const message = `Merhaba, Kalemhane'den sipariş vermek istiyorum:\n\n${lines.join("\n")}\n\nToplam: ${total} TL`;
  const url = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

// ------- Başlat -------
renderPills();
renderProducts();
renderBranches();
renderMarquee();
updateCounts();