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
      document.addEventListener("click", event => {
        if(event.target.dataset.id){
          let modal = document.getElementById('Personae')
          modal.style.display = "block";
          let roster = modal.firstElementChild
          console.log(roster)
          let selectedTeam = json.find((t) => t.id == event.target.dataset.id)
          console.log(selectedTeam)
          roster.innerHTML += `<h3>${selectedTeam.Name}</h3>`
          for(let P of selectedTeam.personas){
            roster.innerHTML += renderPersona(P)
          }
        }
      })
  })

})

const renderDT = function(DT){
  return `
  <ul id=Head${DT.id}>
    <li>${DT.Name}
      <ol id=Team${DT.id}></ol>
    </li>
  </ul>
  <button data-id=${DT.id}>Edit ${DT.Name}</button>`
}

const renderPersona = function(P){
  return `<li>${P.Name}</li>`
}
