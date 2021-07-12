function calcularTabuada() {
    let tabuada = document.querySelector("#tabuada");
    let valorA = parseInt(document.querySelector("#number").value);

    tabuada.innerHTML = '';

    for (let valorB = 0; valorB <= 10; valorB++) {

        let resultado = valorA * valorB;
        let template = `
        <tr>
            <td>${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        </tr>
        `;
        
        let tr = document.createElement('tr');

        tr.innerHTML = template;

        tabuada.appendChild(tr);
    }
}
calcularTabuada();
document.querySelector("#number").addEventListener('change', calcularTabuada);