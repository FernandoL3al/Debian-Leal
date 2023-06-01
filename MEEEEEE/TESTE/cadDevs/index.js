let devInformations = []


const newTec = document.getElementById('newTec')
const cad = document.getElementById('cad')
const confirm = document.getElementById('confirm')


newTec.addEventListener('click', function(ev){
	ev.preventDefault()

	const labelTecnology = document.createElement('label')
	const inputTecnology = document.createElement('input')
	
	const labelExperiency = document.createElement('label')
	const labelExperiency1 = document.createElement('label')
	const labelExperiency2 = document.createElement('label')
	const labelExperiency3 = document.createElement('label')
	const inputExperiency1 = document.createElement('input')
	const inputExperiency2 = document.createElement('input')
	const inputExperiency3 = document.createElement('input')

	const remove = document.createElement('button')
		
	labelTecnology.for = 'tecnology' 
	labelTecnology.innerText = '\nTecnologia: '
	inputTecnology.id = 'tecnology'
	inputTecnology.type = 'text'
	labelTecnology.appendChild(inputTecnology)

	labelExperiency.for = 'experiency'
	labelExperiency.innerText = '\nTempo de experiência: '
	labelExperiency.id = 'experiency'

	labelExperiency1.for = 'experiency1'
	labelExperiency1.innerText = '0-2 anos'
	inputExperiency1.type = 'radio'
	inputExperiency1.name = 'experiency'
	inputExperiency1.id = 'experiency1'
	inputExperiency1.value = '0-2 anos'
	
	labelExperiency2.for = 'experiency2'
	labelExperiency2.innerText = '3-4 anos'
	inputExperiency2.type = 'radio'
	inputExperiency2.name = 'experiency'
	inputExperiency2.id = 'experiency2'
	inputExperiency2.value = '3-4 anos'
	
	labelExperiency3.for = 'experiency3'
	labelExperiency3.innerText = '5+ anos'
	inputExperiency3.type = 'radio'
	inputExperiency3.name = 'experiency'
	inputExperiency3.id = 'experiency3'
	inputExperiency2.value = '5+ anos'

	labelExperiency.append(
		inputExperiency1,
		labelExperiency1,
		inputExperiency2,
		labelExperiency2,
		inputExperiency3,
		labelExperiency3
	)

	cad.append(labelTecnology, labelExperiency, remove)

	remove.innerText = 'Remover'
	remove.addEventListener('click', function(ev){
		ev.preventDefault()

		cad.removeChild(labelTecnology)
		cad.removeChild(labelExperiency)
		cad.removeChild(remove)
	})

})

confirm.addEventListener('click', function(ev){
	ev.preventDefault()

	let i = devInformations.length

	if(i > 0){
		i++
	}
	devInformations[i] = {
		fullname: fullname.value,
		labelTecnology: tecnology.value,
		labelExperiency: experiency.name
	}

	document.getElementById('fullname').value = ''
	document.querySelector('input=[name="experiency"]').value = ''
	document.getElementById('tecnology').value = ''


	console.log(devInformations)
})





// ## Cadastro de Devs

// Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

// - A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
// - Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
//     - um campo de texto para o nome da tecnologia
//     - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
//     - um botão de remover que deve excluir essa linha.
// - O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()
// Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.
