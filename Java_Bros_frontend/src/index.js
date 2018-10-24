const DTs_path = 'http://localhost:3000/api/v1/dream_teams'
const Ps_path = 'http://localhost:3000/api/v1/personas'
let frontTeams

document.addEventListener("DOMContentLoaded", () => {
  console.log("%c Word to your mother", "color: blue")

  const body = document.getElementById('main')
  const dts = document.getElementById('DreamTeams')
  const personae = document.getElementById('Personae')
  const teamForm = document.querySelector('.create-form')
  const addBtn = document.getElementById('new-team-btn')
  const addTeamArea = document.getElementById('add-team')
  const leaderSelect =document.getElementById("Leader-select")
  const personaeSelect =document.getElementsByClassName("Persona-select")
  const select1 = document.getElementById('team_1_select')
  const select2 = document.getElementById('team_2_select')
  const div1 = document.getElementById('T1')
  const div2 = document.getElementById('T2')
  const modal = document.getElementById('Personae')
  const roster = modal.firstElementChild

  let addTeam = false
  addBtn.addEventListener('click', () => {
    addTeam = !addTeam
    if (addTeam) {
      teamForm.style.display = 'block'
      addTeamArea.style.display = 'none'
    }
  })

  //Getting the personae and putting htem in the form selections...
  fetch(Ps_path).then(res => res.json()).then(json => {
    for(let Ps of json){
      if (Ps.Leader) {
        leaderSelect.innerHTML += `<option>${Ps.Name}</option>`
      }
      for(let pSelect of personaeSelect){
        pSelect.innerHTML += `<option>${Ps.Name}</option>`
      }
    }
  })

  //This is the logic for the team creation form
  teamForm.addEventListener('submit', event => {
    event.preventDefault();
    teamForm.style.display = 'none'
    addTeamArea.style.display = 'block'
    let teamselect = event.target.querySelectorAll('select')
    addTeam = false
    fetch(DTs_path, {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "Name":event.target.firstElementChild.value,
        "Leader":teamselect[0].value,
        "Member2":teamselect[1].value,
        "Member3":teamselect[2].value,
        "Member4":teamselect[3].value,
        "Member5":teamselect[4].value
      })
    }).then(res => res.json()).then(json => {
      frontTeams = json
      newteam = frontTeams[frontTeams.length-1]
      select1.innerHTML += `<option data-id=${newteam.id}>${newteam.Name}</option>`
      select2.innerHTML += `<option data-id=${newteam.id}>${newteam.Name}</option>`
    })
  })

  //Initial fetch request to load all teams
  fetch(DTs_path).then(res => res.json()).then(json => {
    //loading the teams into the select bars and assigning functionality...
    frontTeams = json
    for(let DT of json){
      select1.innerHTML += `<option data-id=${DT.id}>${DT.Name}</option>`
      select2.innerHTML += `<option data-id=${DT.id}>${DT.Name}</option>`
    }

    select1.addEventListener("change", (event) =>{
      let selectedTeam = frontTeams.find((t) => t.Name == event.target.value)
      div1.innerHTML = renderDT(selectedTeam)
      for(let P of selectedTeam.personas){
        document.getElementById(`Team${selectedTeam.id}`).innerHTML += renderPersona(P)
      }
    })

    select2.addEventListener("change", (event) =>{
      let selectedTeam = frontTeams.find((t) => t.Name == event.target.value)
      div2.innerHTML = renderDT(selectedTeam)
      for(let P of selectedTeam.personas){
        div2.querySelector(`#Team${selectedTeam.id}`).innerHTML += renderPersona(P)
      }
    })

    //Modal creation and logic
    document.addEventListener("click", event => {
      if(event.target.dataset.id){
        modal.style.display = "block";
        // console.log(roster)
        let selectedTeam = frontTeams.find((t) => t.id == event.target.dataset.id)
        // console.log(selectedTeam)
        roster.innerHTML = `<h3>${selectedTeam.Name}</h3>`
        for(let P of selectedTeam.personas){
          roster.innerHTML += renderPersona(P)
        }
        roster.innerHTML += `<li>Expected Power: ${selectedTeam.overall_power}</li>`
      }

      if(event.target.id === "Personae") {
        modal.style.display = "none";
      }
    })
  })

})

//functions for rendering teams and personae
const renderDT = function(DT){
  return `
  <ul id=Head${DT.id}>
    <li>${DT.Name}
      <ol id=Team${DT.id}></ol>
    </li>
    <li>Expected Power: ${DT.overall_power}</li>
  </ul>
  <button data-id=${DT.id}>Edit ${DT.Name}</button>`
}

const renderPersona = function(P){
  return `<li>${P.Name}</li>`
}
