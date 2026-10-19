
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        const produto = card.dataset.produto;

        window.location.href =
            "produto.html?pizza=" + produto;
    });
});
