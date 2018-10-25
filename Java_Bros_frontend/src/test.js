const DTs_path = 'http://localhost:3000/api/v1/dream_teams'
const Ps_path = 'http://localhost:3000/api/v1/personas'
let frontTeams
let frontPersonae

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
    frontPersonae = json
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
      switchTeam(div1, "left", selectedTeam)
      setTimeout(() => renderMatchup(div1, div2), 1800)
    })

    select2.addEventListener("change", (event) =>{
      let selectedTeam = frontTeams.find((t) => t.Name == event.target.value)
      switchTeam(div2, "right", selectedTeam)
      setTimeout(() => renderMatchup(div1, div2), 1800)
    })

    //Mouse clicks logic
    document.addEventListener("click", event => {
      //Modal show logic for teams
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

      if(event.target.dataset.pid){
        modal.style.display = "block";
        let selectedPersona = frontPersonae.find(p => p.id == Number(event.target.dataset.pid))
        roster.innerHTML = `<h3>${selectedPersona.Name}</h3>`
        roster.innerHTML += `<p>${selectedPersona.typeclass}<br>Level ${selectedPersona.Power}<br>Team Role: ${selectedPersona.Role}</p>`
        roster.innerHTML += `<p>Gameverse: ${selectedPersona.Origin}`
        roster.innerHTML += `<img data-pid=${selectedPersona.id} src="${selectedPersona.Image}" height="450">`
        roster.innerHTML = `<center>${roster.innerHTML}</center>`
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
        switchTeam(div1, "left", selectedTeam)
        setTimeout(() => renderMatchup(div1, div2), 1800)
      }

      //Random button 2
      if(event.target === randomTeam2) {
        let ranteam2 = frontTeams[Math.floor(Math.random() * frontTeams.length)]
        let selectedTeam = ranteam2
        select2.value = selectedTeam.Name
        switchTeam(div2, "right", selectedTeam)
        setTimeout(() => renderMatchup(div1, div2), 1800)
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
    <h3>${DT.Name}</h3>
    <ol id=Team${DT.id}></ol>
    <li>Expected Power: ${DT.overall_power}</li>
  </ul>
  <center><button data-id=${DT.id}>Edit ${DT.Name}</button></center>`
}

const renderPersona = function(P){
  return `
  <li>${P.Name}<br>${P.typeclass}<br>Level ${P.Power}</li>
  <img class="avatar" data-pid=${P.id} src="${P.Image}" height="50">
  `
}
const renderMatchup = function(div1, div2){
  if(div1.innerHTML && div2.innerHTML){
    let team1_id = div1.lastElementChild.firstElementChild.dataset.id
    let team2_id = div2.lastElementChild.firstElementChild.dataset.id
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

  const switchTeam = function(teamdiv, side, newTeam){
    if(teamdiv.style[side]=="0%"){
      teamdiv.style.setProperty("opacity","0")
      setTimeout(()=>{
        teamdiv.innerHTML = renderDT(newTeam)
        for(let P of newTeam.personas){
          if(newTeam.leader.id == P.id){
            teamdiv.querySelector(`#Team${newTeam.id}`).insertAdjacentHTML('afterbegin',`<span class="list-leader">${renderPersona(P)}</span>`)
          }
          else{
            teamdiv.querySelector(`#Team${newTeam.id}`).innerHTML += renderPersona(P)
          }
        }
      },1500)
    }
    else {
    teamdiv.innerHTML = renderDT(newTeam)
    for(let P of newTeam.personas){
      if(newTeam.leader.id == P.id){
        teamdiv.querySelector(`#Team${newTeam.id}`).insertAdjacentHTML('afterbegin',`<span class="list-leader">${renderPersona(P)}</span>`)
      }
      else{
        teamdiv.querySelector(`#Team${newTeam.id}`).innerHTML += renderPersona(P)
      }
    }
  }
    if(teamdiv.style[side]=="0%"){
      setTimeout(()=>{teamdiv.style.setProperty("opacity","1")},1500)
    }
    else{
      teamdiv.style.setProperty(side,"0%")
    }
  }
