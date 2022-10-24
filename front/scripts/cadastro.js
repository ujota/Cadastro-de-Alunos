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
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "nome" : nome_cliente,
            "email" : email_clinete,
            "telefone": telefone_cliente,
            "cpf" : cpf_cliente,
            "dataNascimento" : dataStrig,
        })
    })
    .then(querySet =>{
        alert('Sucesso!', querySet);
        location.reload();
    }).catch(() =>{
        alert('Falhou')
    })
});