// Khởi tạo bản đồ tại Hà Nội (tọa độ [21.0285, 105.8542])
var map = L.map('map').setView([21.0285, 105.8542], 13);

// Thêm layer bản đồ từ OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Danh sách quán ăn (tọa độ mẫu)
var foodPlaces = [
    { name: "Phở Bát Đàn", coords: [21.035, 105.85] },
    { name: "Bún Chả Hàng Mành", coords: [21.033, 105.847] },
    { name: "Cơm Tấm Sài Gòn", coords: [21.03, 105.86] }
];

// Vẽ marker lên bản đồ
foodPlaces.forEach(place => {
    L.marker(place.coords).addTo(map)
        .bindPopup(`<b>${place.name}</b>`);
});
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
