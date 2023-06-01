function addPlayer(){
  const teamList = document.getElementById('teamList')

  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value

  const newLi = document.createElement('li')
  newLi.id = 'player-' + number
  newLi.innerText = position + ": " + name + " (" + number + ")"

  const confirmation = confirm("Escalar o jogador " + newLi.innerText + " ?")

  if(confirmation){
    teamList.appendChild(newLi)
    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }
}

function removePlayer(){
  const numberToRemove = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById('player-' + numberToRemove)
  const teamList = document.getElementById('teamList')
  teamList.removeChild(playerToRemove)
  document.getElementById('numberToRemove').value = ''
}