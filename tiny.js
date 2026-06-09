window.onload = function() {
    const btn = document.getElementById('btn');
    const card = document.getElementById('card');


    btn.addEventListener('click', () => {
        btn.style.display = 'none';
        card.style.display = 'block';
        setTimeout(() => {
            card.style.display = 'block';
            btn.style.display = 'none';
        }, 300);
    }
    );
}