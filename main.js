const form = document.getElementById('form-contatos');
let linhas = " ";


form.addEventListener("submit",function(event){
    event.preventDefault();

    const inputContato = document.getElementById('contato');
    const inputTelefone = document.getElementById('telefone');


    let linha = '<tr>';
    linha += `<td>${inputContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</td>'

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputContato.value = '';
    inputTelefone.value = ' ';
});
