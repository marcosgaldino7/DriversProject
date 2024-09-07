// Função para realizar a pesquisa de pilotos e equipes
function pesquisar(){
    // Obtém a seção onde os resultados serão exibidos e o valor digitado no campo de pesquisa
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

// Verifica se o campo de pesquisa está vazio. Se estiver, exibe uma mensagem informando que não foram encontrados resultados.
if (campoPesquisa == "" || !campoPesquisa.trim()){
    section.innerHTML =` 
    <div class="item-resultado">
      <p class="descricao-meta">Nenhum piloto ou equipe encontrados.</p>
    </div>`
    
    return
   }
   // Converte a pesquisa para minúsculas para facilitar a comparação com os dados
   campoPesquisa = campoPesquisa.toLowerCase()
// Inicializa variáveis para armazenar os resultados da pesquisa
let resultados=""; 
let titulo="", descricao=""; tag="";

// Itera sobre os dados, comparando a pesquisa com o título, descrição e tag de cada item
for (let dado of dados){ 
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  tag = dado.tag.toLowerCase()
  
  if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
    // Verifica se é um piloto
    if (dado.tag === 'Pilotos') { 
        resultados += `
            <<div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">
          Número de corrida : ${dado.numero}<br>  
          ${dado.descricao}
          </p>
          <a
            href=${dado.link}
            target="_blank"> Mais Informações
          </a>
        </div>
        `;
      // Verifica se é uma equipe  
    } else if (dado.tag === 'Equipes') { 
        resultados += `
            <div class="item-resultado equipe">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">
                     ${dado.descricao} <br>
                     Sede: ${dado.cidadeSede} <br>
                     País: ${dado.pais} <br>
                     Títulos: ${dado.titulosConstrutores}<br>
                     Piloto: <a href="#" onclick="pesquisarPiloto('${dado.pilotos1}')">${dado.pilotos1}</a> <br>
                     Piloto: <a href="#" onclick="pesquisarPiloto('${dado.pilotos2}')">${dado.pilotos2}</a> 
                </p>
                <a href=${dado.link} target="_blank"> Mais Informações </a>
            </div>
        `;
    }
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
// Verifica se foram encontrados resultados e atualiza a seção com os resultados ou uma mensagem de "nenhum resultado encontrado"
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
//No resultado de equipes gera uma nova pesquisa para o piloto daquela equipe
function pesquisarPiloto(nomePiloto) {
  // Limpa os resultados anteriores
  let section = document.getElementById("resultados-pesquisa");
  section.innerHTML = "";

  // Filtra os dados para encontrar o piloto
  let piloto = dados.find(dado => dado.titulo.toLowerCase() === nomePiloto.toLowerCase());

  if (piloto) {
      // Exibe as informações do piloto
      section.innerHTML = `
          <div class="item-resultado">
              <h2>${piloto.titulo}</h2>
              <p class="descricao-meta">
                  Número de corrida: ${piloto.numero}<br>
                  ${piloto.descricao}
              </p>
              <a href=${piloto.link} target="_blank"> Mais Informações </a>
          </div>
      `;
  } else {
      // Exibe uma mensagem de erro
      section.innerHTML = `
          <div class="item-resultado">
              <p class="descricao-meta">Nenhum piloto encontrado.</p>
          </div>
      `;
  }
}

