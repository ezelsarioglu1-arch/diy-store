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
];

// ------- Ürünler (gerçek ürünlerinle / fotoğraflarınla değiştir) -------
const products = [
  { name: "Spiralli Defter A4 (100 yp.)", cat: "defter", icon: "📓", price: 45, old: 65, rating: 4.6, badge: "%31" },
  { name: "Kraft Bloknot Seti (3'lü)", cat: "defter", icon: "📔", price: 38, old: null, rating: 4.4, badge: "YENİ" },
  { name: "Fotokopi Kağıdı A4 (500'lü)", cat: "defter", icon: "📄", price: 150, old: 190, rating: 4.8, badge: "%21" },
  { name: "Yapışkanlı Not Kağıdı", cat: "defter", icon: "🗒️", price: 22, old: null, rating: 4.3, badge: null },
  { name: "Tükenmez Kalem Seti (12'li)", cat: "kalem", icon: "✒️", price: 60, old: 85, rating: 4.7, badge: "%29" },
  { name: "Kurşun Kalem HB (10'lu)", cat: "kalem", icon: "✏️", price: 25, old: null, rating: 4.5, badge: null },
  { name: "Keçeli Boya Kalemi Seti (24 Renk)", cat: "kalem", icon: "🖍️", price: 85, old: 110, rating: 4.9, badge: "%23" },
  { name: "Sulu Boya Seti (18 Renk)", cat: "sanat", icon: "🎨", price: 130, old: 170, rating: 4.6, badge: "%24" },
  { name: "Silgi & Kalemtıraş Seti", cat: "kalem", icon: "🧽", price: 18, old: null, rating: 4.2, badge: null },
  { name: "Fosforlu Kalem Seti (6 Renk)", cat: "kalem", icon: "🖊️", price: 42, old: 55, rating: 4.6, badge: "%24" },
  { name: "Telli Dosya (10'lu)", cat: "dosya", icon: "📁", price: 18, old: null, rating: 4.3, badge: null },
  { name: "Kapaklı Klasör 2 Halka", cat: "dosya", icon: "🗂️", price: 55, old: 70, rating: 4.5, badge: "%21" },
  { name: "Arşiv Kutusu", cat: "dosya", icon: "📦", price: 65, old: null, rating: 4.4, badge: "YENİ" },
  { name: "Şeffaf Dosya Poşeti (100'lü)", cat: "dosya", icon: "🧾", price: 48, old: 60, rating: 4.4, badge: "%20" },
  { name: "Zımba Makinesi", cat: "ofis", icon: "📎", price: 55, old: null, rating: 4.6, badge: null },
  { name: "Delgeç (2 Delikli)", cat: "ofis", icon: "🕳️", price: 45, old: null, rating: 4.3, badge: null },
  { name: "Hesap Makinesi", cat: "ofis", icon: "🧮", price: 120, old: 150, rating: 4.7, badge: "%20" },
  { name: "Koli Bandı (6'lı)", cat: "ofis", icon: "📏", price: 40, old: null, rating: 4.1, badge: null },
  { name: "Makas (Ofis Tipi)", cat: "ofis", icon: "✂️", price: 28, old: null, rating: 4.5, badge: null },
  { name: "Masa Üstü Organizer", cat: "ofis", icon: "🗄️", price: 95, old: 120, rating: 4.6, badge: "%21" },
  { name: "Akrilik Boya Seti (12 Renk)", cat: "sanat", icon: "🖌️", price: 145, old: 180, rating: 4.8, badge: "%19" },
  { name: "Origami Kağıdı (200'lü)", cat: "sanat", icon: "🎏", price: 35, old: null, rating: 4.4, badge: null },
  { name: "Maket Bıçağı Seti", cat: "sanat", icon: "🔪", price: 30, old: null, rating: 4.2, badge: null },
  { name: "İlkokul Okul Çantası", cat: "okul", icon: "🎒", price: 350, old: 450, rating: 4.7, badge: "%22" },
  { name: "Kalem Kutusu (Çok Bölmeli)", cat: "okul", icon: "🖍️", price: 65, old: 85, rating: 4.5, badge: "%24" },
  { name: "Beslenme Çantası", cat: "okul", icon: "🍱", price: 90, old: null, rating: 4.6, badge: "YENİ" },
  { name: "Doğum Günü Balonu (20'li)", cat: "parti", icon: "🎈", price: 55, old: null, rating: 4.5, badge: null },
  { name: "Hediye Paketi Kağıdı", cat: "parti", icon: "🎁", price: 20, old: null, rating: 4.3, badge: null },
  { name: "Parti Süsleme Seti", cat: "parti", icon: "🎉", price: 75, old: 95, rating: 4.6, badge: "%21" },
  { name: "Kupa Kalem Kutusu", cat: "okul", icon: "🖊️", price: 32, old: null, rating: 4.2, badge: null },
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

const grid = document.getElementById("product-grid");
const pillRow = document.getElementById("pill-row");
const branchGrid = document.getElementById("branch-grid");
const marqueeTrack = document.getElementById("marquee-track");

function renderProducts(filter) {
  grid.innerHTML = "";
  const list = filter === "tumu" ? products : products.filter(p => p.cat === filter);
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    const stars = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
    card.innerHTML = `
      <div class="thumb" style="background:${catColors[p.cat] || '#eee'}">
        ${p.badge ? `<span class="badge ${p.badge === 'YENİ' ? 'new' : ''}">${p.badge}</span>` : ""}
        ${p.icon}
      </div>
      <div class="p-body">
        <h3>${p.name}</h3>
        <div class="price-row">
          <span class="price">${p.price} TL</span>
          ${p.old ? `<span class="price-old">${p.old} TL</span>` : ""}
        </div>
        <div class="stars">${stars} <span>(${p.rating})</span></div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderPills() {
  categories.forEach(c => {
    const pill = document.createElement("button");
    pill.className = "pill" + (c.id === "tumu" ? " active" : "");
    pill.textContent = c.label;
    pill.onclick = () => {
      document.querySelectorAll(".pill").forEach(el => el.classList.remove("active"));
      pill.classList.add("active");
      renderProducts(c.id);
    };
    pillRow.appendChild(pill);
  });
}

function renderBranches() {
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

renderPills();
renderProducts("tumu");
renderBranches();
renderMarquee();