const products = [
  {name_ar: 'تيشيرت رياضي', name_en: 'Sports T-shirt', price: 350, img: 'https://source.unsplash.com/200x200/?sportswear'},
  {name_ar: 'حذاء رياضي', name_en: 'Sport Shoes', price: 650, img: 'https://source.unsplash.com/200x200/?running-shoes'},
  {name_ar: 'جاكيت تدريب', name_en: 'Training Jacket', price: 500, img: 'https://source.unsplash.com/200x200/?jacket'},
  {name_ar: 'شورت رياضي', name_en: 'Sport Shorts', price: 280, img: 'https://source.unsplash.com/200x200/?shorts'},
  {name_ar: 'سويت شيرت', name_en: 'Sweatshirt', price: 400, img: 'https://source.unsplash.com/200x200/?sweatshirt'},
  {name_ar: 'بنطلون رياضي', name_en: 'Track Pants', price: 370, img: 'https://source.unsplash.com/200x200/?trackpants'},
  {name_ar: 'طقم تدريب', name_en: 'Training Set', price: 600, img: 'https://source.unsplash.com/200x200/?gymwear'},
  {name_ar: 'قفازات رياضية', name_en: 'Sport Gloves', price: 250, img: 'https://source.unsplash.com/200x200/?gloves'},
  {name_ar: 'جوارب رياضية', name_en: 'Sport Socks', price: 180, img: 'https://source.unsplash.com/200x200/?socks'},
  {name_ar: 'قبعة رياضية', name_en: 'Sport Cap', price: 300, img: 'https://source.unsplash.com/200x200/?cap'},
];

let isArabic = true;
let cart = [];
const productsContainer = document.getElementById('products');
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const langToggle = document.getElementById('lang-toggle');
const cartTitle = document.getElementById('cart-title');
const checkoutBtn = document.getElementById('checkout-btn');

function renderProducts() {
  productsContainer.innerHTML = '';
  products.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<img src="${p.img}"><h3>${isArabic ? p.name_ar : p.name_en}</h3><p>${p.price} ${isArabic ? 'جنيه' : 'EGP'}</p><button onclick="addToCart(${i})">${isArabic ? 'أضف للسلة' : 'Add to cart'}</button>`;
    productsContainer.appendChild(div);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${isArabic ? item.name_ar : item.name_en} - ${item.price} ${isArabic ? 'جنيه' : 'EGP'}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalElement.textContent = `${isArabic ? 'الإجمالي: ' : 'Total: '} ${total} ${isArabic ? 'جنيه' : 'EGP'}`;
}

langToggle.addEventListener('click', () => {
  isArabic = !isArabic;
  document.body.dir = isArabic ? 'rtl' : 'ltr';
  langToggle.textContent = isArabic ? 'English' : 'العربية';
  cartTitle.textContent = isArabic ? 'سلة المشتريات' : 'Shopping Cart';
  checkoutBtn.textContent = isArabic ? 'إتمام الشراء' : 'Checkout';
  renderProducts();
  updateCart();
});

checkoutBtn.addEventListener('click', () => {
  alert(isArabic ? 'ميزة إتمام الشراء قيد التطوير.' : 'Checkout feature coming soon.');
});

renderProducts();
