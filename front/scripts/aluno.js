let table = document.createElement('table');
document.getElementById('body').appendChild(table);
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Nome";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "CPF";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Data Nascimento";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Email";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "Telefone";
let heading_6 = document.createElement('th');
heading_6.innerHTML = 'excluir/editar';

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
table.appendChild(row_1);


function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

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
			alert('ALUNO EXCLUIDO COM SUCESSO!')
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
			row_2_data_1.innerHTML = item["nome"];

			let row_2_data_2 = document.createElement('td');
			row_2_data_2.innerHTML = item["cpf"];

			let row_2_data_3 = document.createElement('td');
			let data = new Date(item["dataNascimento"]);
			
			let dia = ("0" + (data.getDate() + 1)).slice(-2);
			let mes = ("0" + (data.getMonth() + 1)).slice(-2);
			let ano = (data.getFullYear());
			let dataFormatada = dia + "/" + mes + "/" + ano;
			
			data = new Date(data.getTime() + ((60*60*60*1000)/24))
			console.log(data);
			
			row_2_data_3.innerHTML = formatDate(data);//.setHours(time.getHours() + 2);

			let row_2_data_4 = document.createElement('td');
			row_2_data_4.innerHTML = item["email"];

			let row_2_data_5 = document.createElement('td');
			row_2_data_5.innerHTML = item["telefone"];
			
			var botaoExcluir = document.createElement('button');
			var botaoEditar = document.createElement('a');
			botaoEditar.href = 'editar.html?id=' + item['id'];
			botaoEditar.textContent ='✏️';
			botaoEditar.classList.add('botao-editar');
			botaoExcluir.textContent ='🗑️';

			botaoExcluir.onclick= function(){excluirAluno(item['id'])};
			let row_2_data_6 = document.createElement('td');
			row_2_data_6.appendChild(botaoExcluir);
			row_2_data_6.appendChild(botaoEditar);
			row_2.appendChild(row_2_data_1);
			row_2.appendChild(row_2_data_2);
			row_2.appendChild(row_2_data_3);
			row_2.appendChild(row_2_data_4);
			row_2.appendChild(row_2_data_5);
			row_2.appendChild(row_2_data_6);
			table.appendChild(row_2)
			
          })
		})
		.catch(error => alert(error))