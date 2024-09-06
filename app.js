function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

if (campoPesquisa == "" || !campoPesquisa.trim()){
    section.innerHTML =` 
    <div class="item-resultado">
      <p class="descricao-meta">Nenhum piloto ou equipe encontrados.</p>
    </div>`
    
    return
   }

   campoPesquisa = campoPesquisa.toLowerCase()

let resultados=""; 
let titulo="", descricao="";

for (let dado of dados){ 
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
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
  } else  {
    resultadosNegativos = `
    <div class="item-resultado">
          <p class="descricao-meta">
            Nenhum piloto ou equipe encontrados com esse. Pesquise novamente
          </p>
        </div>
`

  }

}
if (!resultados){
  resultados = `
    <div class="item-resultado">
          <p class="descricao-meta">
            Nenhum piloto ou equipe encontrados com esse. Pesquise novamente
          </p>
        </div>
`
} 
  
section.innerHTML = resultados


}

