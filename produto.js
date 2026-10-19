
const pizzas = {
    calabresa: {
        nome: "Pizza de Calabresa",
        descricao: "Calabresa, mussarela, cebola e molho de tomate.",
        preco: "R$ 39,90"
    },

    mussarela: {
        nome: "Pizza de Mussarela",
        descricao: "Mussarela, molho de tomate e orégano.",
        preco: "R$ 34,90"
    },

    portuguesa: {
        nome: "Pizza Portuguesa",
        descricao: "Presunto, ovo, cebola e azeitonas.",
        preco: "R$ 44,90"
    }
};

const parametros = new URLSearchParams(window.location.search);
const idPizza = parametros.get("pizza");

const pizza = pizzas[idPizza];

if (pizza) {
    document.getElementById("nome").textContent = pizza.nome;
    document.getElementById("descricao").textContent = pizza.descricao;
    document.getElementById("preco").textContent = pizza.preco;
} else {
    document.getElementById("nome").textContent = "Pizza não encontrada";
    document.getElementById("descricao").textContent = "Volte ao cardápio e escolha uma pizza.";
    document.getElementById("preco").textContent = "";
}
