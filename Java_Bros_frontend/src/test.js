const DTs_path = 'http://localhost:3000/api/v1/dream_teams'
const Ps_path = 'http://localhost:3000/api/v1/personas'
const solaire = 'https://pre00.deviantart.net/537a/th/pre/i/2017/009/6/8/solaire_of_astora_by_emortal982-d8sal2b.jpg'
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
  const randomTeam1 = document.getElementById('random-btn1')
  const randomTeam2 = document.getElementById("random-btn2")
  const randomPersona = document.getElementById("random-all-personae")
  const div1 = document.getElementById('T1')
  const div2 = document.getElementById('T2')
  const matchup = document.getElementById('matchup')
  const modal = document.getElementById('Personae')
  const roster = modal.firstElementChild

  //Form toggle
  let addTeam = false
  addBtn.addEventListener('click', () => {
    addTeam = !addTeam
    if (addTeam) {
      teamForm.style.display = 'block'
      addTeamArea.style.display = 'none'
    }
  })

  //Getting the personae and putting them in the form selections...
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

  //This is the logic for the team creation form submission
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

    //load teams on select and create matchup
    select1.addEventListener("change", (event) =>{
      let selectedTeam = frontTeams.find((t) => t.Name == event.target.value)
      div1.innerHTML = renderDT(selectedTeam)
      for(let P of selectedTeam.personas){
        if(selectedTeam.leader.id == P.id){
          div1.querySelector(`#Team${selectedTeam.id}`).insertAdjacentHTML('afterbegin',`<span class="list-leader">${renderPersona(P)}</span>`)
        }
        else{
          div1.querySelector(`#Team${selectedTeam.id}`).innerHTML += renderPersona(P)
        }
      }
      renderMatchup(div1, div2)
    })

    select2.addEventListener("change", (event) =>{
      let selectedTeam = frontTeams.find((t) => t.Name == event.target.value)
      div2.innerHTML = renderDT(selectedTeam)
      for(let P of selectedTeam.personas){
        if(selectedTeam.leader.id == P.id){
          div2.querySelector(`#Team${selectedTeam.id}`).insertAdjacentHTML('afterbegin',`<span class="list-leader">${renderPersona(P)}</span>`)
        }
        else{
          div2.querySelector(`#Team${selectedTeam.id}`).innerHTML += renderPersona(P)
        }
      }
      renderMatchup(div1, div2)
    })

    //Mouse clicks logic
    document.addEventListener("click", event => {
      //Modal show logic
      if(event.target.dataset.id){
        modal.style.display = "block";
        let selectedTeam = frontTeams.find((t) => t.id == event.target.dataset.id)
        roster.innerHTML = `<h3>${selectedTeam.Name}</h3>`
        for(let P of selectedTeam.personas){
          if(selectedTeam.leader.id == P.id){
            roster.firstElementChild.insertAdjacentHTML('afterend',`<span class="list-leader">${renderPersona(P)}</span>`)
          }
          else{
            roster.innerHTML += renderPersona(P)
          }
        }
        roster.innerHTML += `<li>Expected Power: ${selectedTeam.overall_power}</li>`
      }

      //Modal hide logic
      if(event.target.id === "Personae") {
        modal.style.display = "none";
      }

      //Fight button!
      if(event.target.className === "fight!"){
        console.log("This gon' be a good one")
        let total = Number(event.target.dataset.team1power) + Number(event.target.dataset.team2power)
        let victory = Math.random()*total
        let team1 = select1.value
        let team2 = select2.value
        if(victory > Number(event.target.dataset.team1power)){
          alert(`${team2} has triumphed!`)
        }
        else{
          alert(`${team1} has triumphed`)
        }
      }

      // Random button 1
      if(event.target === randomTeam1) {
        let ranteam1 = frontTeams[Math.floor(Math.random() * frontTeams.length)]
        let selectedTeam = ranteam1
        select1.value = selectedTeam.Name
        div1.innerHTML = renderDT(selectedTeam)
        for(let P of selectedTeam.personas){
          if(selectedTeam.leader.id == P.id){
            div1.querySelector(`#Team${selectedTeam.id}`).insertAdjacentHTML('afterbegin',`<span class="list-leader">${renderPersona(P)}</span>`)
          }
          else{
            div1.querySelector(`#Team${selectedTeam.id}`).innerHTML += renderPersona(P)
          }
        }

      renderMatchup(div1, div2)
      }

      //Random button 2
      if(event.target === randomTeam2) {
        let ranteam2 = frontTeams[Math.floor(Math.random() * frontTeams.length)]
        let selectedTeam = ranteam2
        select2.value = selectedTeam.Name
        div2.innerHTML = renderDT(selectedTeam)
        for(let P of selectedTeam.personas){
          if(selectedTeam.leader.id == P.id){
            div2.querySelector(`#Team${selectedTeam.id}`).insertAdjacentHTML('afterbegin',`<span class="list-leader">${renderPersona(P)}</span>`)
          }
          else{
            div2.querySelector(`#Team${selectedTeam.id}`).innerHTML += renderPersona(P)
          }
        }

        renderMatchup(div1, div2)
      }
      //RANDOMIZE Persona Button
      if(event.target === randomPersona) {

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
  return `
  <li>${P.Name}</li>
  <img src="${P.Image}" height="50">
  `
}
const renderMatchup = function(div1, div2){
  if(div1.innerHTML && div2.innerHTML){
    let team1_id = div1.lastElementChild.dataset.id
    let team2_id = div2.lastElementChild.dataset.id
    let team1 = frontTeams.find(t => t.id == team1_id)
    let team2 = frontTeams.find(t => t.id == team2_id)
    console.log(`${team1.Name} versus ${team2.Name}`)
    matchup.innerHTML = `
    <p><h3>${team1.Name} versus ${team2.Name}</h3></p>
    <h4>${team1.overall_power} power against ${team2.overall_power}</h4>
    <p>Will ${team1.leader.Name} triumph against ${team2.leader.Name}?</p>
    <button class="fight!" data-team1power=${team1.overall_power} data-team2power=${team2.overall_power}>Aggrieve!</button>
    `
  }}
