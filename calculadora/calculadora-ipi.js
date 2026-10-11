/**
 * Calculadora do IPI — Ferramenta Conceitual
 *
 * ATENÇÃO: Esta é uma ferramenta conceitual, não um instrumento validado.
 * Os pesos atribuídos são hipóteses de trabalho.
 */

function calcular() {
    // Obter valores das dimensões
    const d1 = parseFloat(document.getElementById('d1').value) || 0;
    const d2 = parseFloat(document.getElementById('d2').value) || 0;
    const d3 = parseFloat(document.getElementById('d3').value) || 0;
    const d4 = parseFloat(document.getElementById('d4').value) || 0;
    const d5 = parseFloat(document.getElementById('d5').value) || 0;

    // Validar intervalo (0 a 10)
    const dimensoes = [d1, d2, d3, d4, d5];
    for (let i = 0; i < dimensoes.length; i++) {
        if (dimensoes[i] < 0 || dimensoes[i] > 10) {
            alert('Todas as notas devem estar entre 0 e 10.');
            return;
        }
    }

    // Calcular IPI
    const ipi = 0.25 * d1 + 0.20 * d2 + 0.20 * d3 + 0.20 * d4 + 0.15 * d5;

    // Exibir resultado
    document.getElementById('resultado').textContent = 'IPI = ' + ipi.toFixed(2);

    // Classificar
    let classificacao = '';
    if (ipi < 4) classificacao = 'Erosão crítica';
    else if (ipi < 6) classificacao = 'Erosão moderada';
    else if (ipi < 8) classificacao = 'Preservação moderada';
    else classificacao = 'Preservação elevada';

    document.getElementById('classificacao').textContent = 'Classificação: ' + classificacao;
}

// Calcular automaticamente ao alterar os valores
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(function(input) {
        input.addEventListener('change', calcular);
    });
});
