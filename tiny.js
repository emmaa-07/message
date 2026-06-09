window.onload = function() {
    let btn = document.getElementById('btn');
    let card = document.getElementById('card');

    btn.onclick = function() {
        btn.style.display = 'none';
        card.style.display = 'block';
    }
}