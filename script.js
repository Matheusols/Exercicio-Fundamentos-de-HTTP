const tarefas = document.getElementById("listaCadastro");

fetch("https://crudcrud.com/api/f120e55359ad456da20b1bbe5aa14758/cadastro/",{
    
method: "GET"
})
.then(resposta => resposta.json())
.then((listaCadastro) => {

    listaCadastro.forEach(cadastro => {
        
        const item = document.createElement("li");
        item.innerHTML = `<h4>Nome:</h4> ${cadastro.nome} <h4>Email:</h4> ${cadastro.email}<button onclick="removerCadastro('${cadastro._id}')">X</button>`;

        tarefas.appendChild(item);
    });


});

document.getElementById("add").addEventListener("click", () => {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    

    fetch("https://crudcrud.com/api/f120e55359ad456da20b1bbe5aa14758/cadastro",{

        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({nome: nome, email: email}),
    })
    .then(resposta => resposta.json())
    .then((cadastro) =>{

        alert("Cadastro efetuado com sucesso!");
        const item = document.createElement("li");
        item.innerHTML = `<h4>Nome:</h4> ${cadastro.nome} <h4>Email:</h4> ${cadastro.email}<button onclick="removerCadastro('${cadastro._id}')">X</button>`;
    
        tarefas.appendChild(item);
    })
    

});

function removerCadastro(id) {
    fetch(`https://crudcrud.com/api/f120e55359ad456da20b1bbe5aa14758/cadastro/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        alert("Usuário removido com sucesso!");
        location.reload();
    })
    .catch((erro) => {
        console.error("Erro ao remover usuário:", erro);
    })
}