const DTs_path = 'http://localhost:3000/api/v1/dream_teams'
const Ps_path = 'http://localhost:3000/api/v1/personas'


document.addEventListener("DOMContentLoaded", () => {
  console.log("%c Word to your mother", "color: blue")

  const body = document.getElementById('main')
  const dts = document.getElementById('DreamTeams')
  const personae = document.getElementById('Personae')
  const select1 = document.getElementById('team_1_select')
  const select2 = document.getElementById('team_2_select')
  const div1 = document.getElementById('T1')
  const div2 = document.getElementById('T2')

  fetch(DTs_path).then(res => res.json()).then(json => {
      for(let DT of json){
        select1.innerHTML += `<option data-id=${DT.id}>${DT.Name}</option>`
        select2.innerHTML += `<option data-id=${DT.id}>${DT.Name}</option>`
        }
      select1.addEventListener("change", (event) =>{
        console.log(event.target.value)
        let selectedTeam = json.find((t) => t.Name == event.target.value)
        console.log(selectedTeam)
        console.log(div1)
        div1.innerHTML = renderDT(selectedTeam)
        for(let P of selectedTeam.personas){
          document.getElementById(`Team${selectedTeam.id}`).innerHTML += renderPersona(P)
        }
      })
      select2.addEventListener("change", (event) =>{
        console.log(event.target.value)
        let selectedTeam = json.find((t) => t.Name == event.target.value)
        console.log(selectedTeam)
        console.log(div2)
        div2.innerHTML += renderDT(selectedTeam)
        for(let P of selectedTeam.personas){
          document.getElementById(`Team${selectedTeam.id}`).innerHTML += renderPersona(P)
        }
      })
  })

  fetch(Ps_path).then(res => res.json()).then(json => {
    personae.innerHTML += `<h4>Dramatis Personae</h4>`
    for(let P of json){
      personae.innerHTML += `<ul><li>${P.Name}</li></ul>`
    }
  })

})

const renderDT = function(DT){
  return `
  <ul id=Head${DT.id}>
    <li>${DT.Name}
      <ol id=Team${DT.id}></ol>
    </li>
  </ul>`
}

const renderPersona = function(P){
  return `<li>${P.Name}</li>`
}
