function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

let resultados = ""

console.log(section)

for (let dado of dados){ 
resultados += `
    <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a
            href=${dado.link}
            target="_blank"> Mais Informações
          </a>
        </div>
`
}

section.innerHTML = resultados
}

