window.onload = function() {
    const btn = document.getElementById('btn');
    const card = document.getElementById('card');



    function createLeaf() {
        const leaf = document.createElement("div");

        leaf.classList.add("leaf");
        leaf.style.zIndex = "-"+Math.round(Math.random()*3-1)
        leaf.style.backgroundImage = "url(Media/petal"+Math.round(Math.random()*6)+".png)";

        leaf.style.left =
            Math.random() * window.innerWidth + "px";

        leaf.style.fontSize =
            (15 + Math.random() * 20) + "px";

        leaf.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        leaf.style.setProperty(
            "--drift",
            (Math.random() * 300 - 150) + "px"
        );

        container.appendChild(leaf);

        setTimeout(() => leaf.remove(), 10000);
    }
    setInterval(createLeaf,400)
    
    btn.addEventListener('click', () => {
        
        btn.style.display = 'none';
        card.style.display = 'block';

        setTimeout(() => {
            card.style.display = 'block';
        }, 300);
    });
}
