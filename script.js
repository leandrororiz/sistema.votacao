document.addEventListener('DOMContentLoaded', () => {
    const voteForm = document.getElementById('vote-form');
    const counts = {
        1: document.getElementById('count-1'),
        2: document.getElementById('count-2'),
        3: document.getElementById('count-3')
    };

    // Inicializa os votos
    let votes = { 1: 0, 2: 0, 3: 0 };

    voteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Obtém a opção selecionada
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            const value = selectedOption.value;
            
            // Atualiza os votos
            votes[value]++;
            
            // Atualiza a exibição dos votos
            for (const [key, countElement] of Object.entries(counts)) {
                countElement.textContent = votes[key];
            }
        } else {
            alert('Por favor, selecione uma opção antes de votar.');
        }
    });
});
