// script.js
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;

    alert(`Terima kasih, ${name}! Anda telah terdaftar untuk ${service}.`);
});
