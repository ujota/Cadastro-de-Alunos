const formulario = document.querySelector("#formCadastroCliente");
		    
formulario.addEventListener("submit", function(event){

    event.preventDefault();
	
	
    const nome = document.querySelector("#inputNome");
    const email = document.querySelector("#inputEmail");
    const telefone = document.querySelector("#inputTelefone");
    const cpf = document.querySelector("#inputCpf");
    const data_nascimento = document.querySelector("#inputDataNascimento");

	
    const nome_cliente = nome.value;
    const email_cliente = email.value;
    const telefone_cliente = telefone.value;
    const cpf_cliente = cpf.value;
    const data_cliente = data_nascimento.value;
    
    fetch('http://localhost:8080/aluno',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "nome" : nome_cliente,
            "email" : email_cliente,
            "telefone": telefone_cliente,
            "cpf" : cpf_cliente,
            "dataNascimento" : data_cliente,
        })
    })
    .then(querySet =>{
        alert('ALUNO CADASTRADO COM SUCESSO!', querySet);
        location.reload();
    }).catch(() =>{
        alert('Falhou')
    })
});