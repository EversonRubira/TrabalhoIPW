document.addEventListener("DOMContentLoaded", function () {
    const pacoteCards = document.querySelectorAll('.card');

    const pacotes = [
        {
            "id": 1,
            "nome": "Pacote 5 noites premium",
            "preco": "1500,00 €",
            "descricao": "Explore a cidade e desfrute de uma estadia de luxo por 5 noites.",
            "inclusoes": ["Café da manhã incluso", "Wi-Fi", "Passeio incluso"],
            "imagem": "assets/paris.jpeg"
        },
        {
            "id": 2,
            "nome": "Pacote 10 dias em Miami Beach",
            "preco": "1200,00 €",
            "descricao": "Aproveite o sol e as praias de Miami por 10 dias.",
            "inclusoes": ["Café da manhã incluso", "Wi-Fi", "Passeio incluso"],
            "imagem": "assets/miami.jpeg"
        },
        {
            "id": 3,
            "nome": "Pacote 4 noites em Berlim",
            "preco": "1400,00 €",
            "descricao": "Descubra a história e a cultura de Berlim durante uma estadia de 4 noites.",
            "inclusoes": ["Café da manhã incluso", "Wi-Fi", "Passeio incluso"],
            "imagem": "assets/berlim.jpeg"
        },
        {
            "id": 4,
            "nome": "7 dias em Fortaleza",
            "preco": "500,00 €",
            "descricao": "Relaxe nas praias de Fortaleza durante uma semana de férias.",
            "inclusoes": ["Café da manhã incluso", "Wi-Fi", "Passeio"],
            "imagem": "assets/fortaleza.jpg"
        },
        {
            "id": 5,
            "nome": "Pacote 14 dias em Jericoacoara",
            "preco": "200,00 €",
            "descricao": "Explore as belezas naturais de Jericoacoara durante duas semanas.",
            "inclusoes": ["Café da manhã incluso", "Wi-Fi", "Passeio de buggy"],
            "imagem": "assets/jeri.jpg"
        },
        {
            "id": 6,
            "nome": "Pacote 14 dias em Moraine lake, Canada",
            "preco": "1200,00 €",
            "descricao": "Desfrute de paisagens deslumbrantes no Moraine Lake, Canadá, por 14 dias.",
            "inclusoes": ["Café da manhã incluso", "Wi-Fi", "Passeio"],
            "imagem": "assets/canada.jpg"
        }
    ];

    pacoteCards.forEach(card => {
        card.addEventListener('click', function () {
            const pacoteId = card.dataset.pacoteId;
            const detalhesPacote = card.querySelector('.detalhes-pacote');

            const pacoteSelecionado = pacotes.find(pacote => pacote.id == pacoteId);

            detalhesPacote.innerHTML = `
                <h2>${pacoteSelecionado.nome}</h2>
                <p>${pacoteSelecionado.descricao}</p>
                <p>Preço: ${pacoteSelecionado.preco}</p>
                <ul>
                    ${pacoteSelecionado.inclusoes.map(inclusao => `<li>${inclusao}</li>`).join('')}
                </ul>
                <img src="${pacoteSelecionado.imagem}" alt="${pacoteSelecionado.nome}">
            `;
        });
    });
});
