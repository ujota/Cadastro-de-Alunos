let table = document.createElement('table');
document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');

let heading_1 = document.createElement('th');
heading_1.innerHTML = "ID";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Nome";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "CPF";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Data Nascimento";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "Email";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "Telefone";
let heading_7 = document.createElement('th');
heading_7.innerHTML = '';


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
table.appendChild(row_1);

// let row_2 = document.createElement('tr');
// let row_2_data_1 = document.createElement('td');
// row_2_data_1.innerHTML = "1.";
// let row_2_data_2 = document.createElement('td');
// row_2_data_2.innerHTML = "João Pedro";
// let row_2_data_3 = document.createElement('td');
// row_2_data_3.innerHTML = "1997-01-31";
// let row_2_data_4 = document.createElement('td');
// row_2_data_4.innerHTML = "43495488820";
// let row_2_data_5 = document.createElement('td');
// row_2_data_5.innerHTML = "joao.silveerio@gmail.com";
// let row_2_data_6 = document.createElement('td');
// row_2_data_6.innerHTML = "11972247142";

// row_2.appendChild(row_2_data_1);
// row_2.appendChild(row_2_data_2);
// row_2.appendChild(row_2_data_3);
// row_2.appendChild(row_2_data_4);
// row_2.appendChild(row_2_data_5);
// row_2.appendChild(row_2_data_6);
// table.appendChild(row_2);

function excluirAluno(idAluno){
	var my_headers = new Headers();
	my_headers.append("Content-type", "application/json");


var requestOptions = {
	method: 'DELETE',
	headers: my_headers,
	redirect : 'follow'
	
};

	fetch("http://localhost:8080/aluno/" + idAluno,
	requestOptions)
		.then(result => {
			alert('EXCLUIDO COM SUCESSO!')
			location.reload()
		})
		.catch(error => alert(error))
}



var my_headers = new Headers();
my_headers.append("Content-type", "application/json");


var requestOptions = {
	method: 'GET',
	headers: my_headers,
	redirect : 'follow'
	
};

fetch("http://localhost:8080/aluno",
requestOptions).then(reponse => 
    reponse.json())
	.then(result => {
        result.forEach((item)=>{
			let row_2 = document.createElement('tr');	
			let row_2_data_1 = document.createElement('td');
			row_2_data_1.innerHTML = item["id"];
			let row_2_data_2 = document.createElement('td');
			row_2_data_2.innerHTML = item["nome"];
			let row_2_data_3 = document.createElement('td');
			row_2_data_3.innerHTML = item["cpf"];
			let row_2_data_4 = document.createElement('td');
			row_2_data_4.innerHTML = item["dataNascimento"];
			let row_2_data_5 = document.createElement('td');
			row_2_data_5.innerHTML = item["email"];
			let row_2_data_6 = document.createElement('td');
			row_2_data_6.innerHTML = item["telefone"];
			var botaoExcluir = document.createElement('button');
			var botaoEditar = document.createElement('a');
			botaoEditar.href = 'editar.html?id=' + item['id'];
			botaoEditar.innerHTML = '✏️'
			botaoEditar.classList.add('botao-editar');
			botaoExcluir.textContent = '🗑️';

			botaoExcluir.onclick= function(){excluirAluno(item['id'])};
			let row_2_data_7 = document.createElement('td');
			row_2_data_7.appendChild(botaoExcluir);
			row_2_data_7.appendChild(botaoEditar);
			row_2.appendChild(row_2_data_1);
			row_2.appendChild(row_2_data_2);
			row_2.appendChild(row_2_data_3);
			row_2.appendChild(row_2_data_4);
			row_2.appendChild(row_2_data_5);
			row_2.appendChild(row_2_data_6);
			row_2.appendChild(row_2_data_7);
			table.appendChild(row_2)
			
          })
		})
		.catch(error => alert(error))