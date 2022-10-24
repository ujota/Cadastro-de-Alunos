function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split("&");
    keyValuePairs.forEach(function(keyValuePair) {
        keyValuePair = keyValuePair.split('=');
        result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
    });
    return result;
}
var myParam = queryObj();
console.log(myParam);

var my_headers = new Headers();
my_headers.append("Content-type", "application/json");


var requestOptions = {
	method: 'GET',
	headers: my_headers,
	redirect : 'follow'
	
};

fetch("http://localhost:8080/aluno/" + myParam['id'],
requestOptions).then(reponse => 
    reponse.json())
	.then(result => {
        document.querySelector("#inputNome").value = result["nome"];
        document.querySelector("#inputEmail").value = result["email"];
        document.querySelector("#inputTelefone").value = result["telefone"];
        document.querySelector("#inputCpf").value = result["cpf"];
        var formData = result["dataNascimento"].split('T')[0];
        document.querySelector("#inputDataNascimento").value = formData;

    }).catch(error => alert(error))

    const formulario = document.querySelector("#formCadastroCliente");
		    
formulario.addEventListener("submit", function(event){

    event.preventDefault();
	
	
    const nome = document.querySelector("#inputNome");
    const email = document.querySelector("#inputEmail");
    const telefone = document.querySelector("#inputTelefone");
    const cpf = document.querySelector("#inputCpf");
    const data_nascimento = document.querySelector("#inputDataNascimento");

	
    const nome_cliente = nome.value;
    const email_clinete = email.value;
    const telefone_cliente = telefone.value;
    const cpf_cliente = cpf.value;
    const data_cliente = data_nascimento.value;
    let dataStrig = new Date(data_cliente);
	console.log(data_cliente);
	
    fetch('http://localhost:8080/aluno',{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "id" : myParam['id'],
            "nome" : nome_cliente,
            "email" : email_clinete,
            "telefone": telefone_cliente,
            "cpf" : cpf_cliente,
            "dataNascimento" : dataStrig,
        })
    })
    .then(querySet =>{
        alert('Sucesso!', querySet);
        location.href = 'aluno.html';
    }).catch(() =>{
        alert('Falhou')
    })
});