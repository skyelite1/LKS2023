let cart = [];

function addToCart() {
// Get product details
let produk = event.target.parentNode;
let nama = produk.querySelector("h3").innerText;
let harga = parseInt(produk.querySelector("p").innerText.split(" ")[1]);
// Add product to cart
let item = cart.find(item => item.nama === nama);
if (item) {
	item.jumlah += 1;
} else {
	cart.push({ nama: nama, harga: harga, jumlah: 1 });
}

// Update cart table
let table = document.getElementById("keranjang");
let row = table.insertRow(-1);
let cellNama = row.insertCell(0);
let cellHarga = row.insertCell(1);
let cellJumlah = row.insertCell(2);
let cellTotal = row.insertCell(3);
cellNama.innerHTML = nama;
cellHarga.innerHTML = harga;
cellJumlah.innerHTML = item ? item.jumlah : 1;
cellTotal.innerHTML = item ? item.harga * item.jumlah : harga;

// Update total
let total = cart.reduce((total, item) => total + item.harga * item.jumlah, 0);
document.getElementById("total").innerText = `Total: Rp ${total}`;
}

function checkout() {
// Redirect to checkout page
window.location.href = "checkout.html";
}