const setPets = function(listaDePets){

    let cardPets = document.getElementById('cardPets')

    listaDePets.pets.forEach(function(item){

        let divCaixaPet        = document.createElement('div')
        let h2CaixaName           = document.createElement('h2')
        let textPet            = document.createTextNode(item.nome)
        let figureCaixaImagem     = document.createElement('figure')
        let img                   = document.createElement('img')

        let divCaixaCor        = document.createElement('div')
        let pCaixaCor          = document.createElement('p')
        let textCor           = document.createTextNode(item.cor)


        let divCaixaRaca        = document.createElement('div')
        let pCaixaRaca         = document.createElement('p')
        let textRaca           = document.createTextNode(item.raca)

        divCaixaPet.setAttribute('class', 'card-pet')
        h2CaixaName.setAttribute('class', 'caixa-nome')
        pCaixaCor.setAttribute('class', 'cor')
        pCaixaRaca.setAttribute('class', 'raca')
        img.setAttribute('src', item.image)
        img.setAttribute('alt', 'Fotos dos Pets')
        img.setAttribute('title', 'Foto de Pet')
        figureCaixaImagem.setAttribute('class', 'caixa-imagem')

        cardPets.appendChild(divCaixaPet)
        divCaixaPet.appendChild(h2CaixaName)
        h2CaixaName.appendChild(textPet)
        divCaixaPet.appendChild(figureCaixaImagem)
        figureCaixaImagem.appendChild(img)

        divCaixaPet.appendChild(divCaixaCor)
        divCaixaCor.appendChild(pCaixaCor)
        pCaixaCor.appendChild(textCor)

        divCaixaPet.appendChild(divCaixaRaca)
        divCaixaRaca.appendChild(pCaixaRaca)
        pCaixaRaca.appendChild(textRaca)

    });
}

const getPetsAPI = async function(){

    let url = 'https://app-avaliacao-brh0avd2ahegehac.brazilsouth-01.azurewebsites.net/projeto3/fecaf/listar/pets'

    let response = await fetch(url)

    let characterPersons = await response.json()

    setPets(characterPersons)

}

window.addEventListener('load', function(){
    getPetsAPI()
})