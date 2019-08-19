
const DTs_path = 'http://localhost:3000/api/v1/dream_teams'
const Ps_path = 'http://localhost:3000/api/v1/personas'
const gifs = [["http://www.gamesfoda.net/wp-content/uploads/2013/05/guiltygear_holyshit_zps4541e85c.gif",4850],["https://i.kinja-img.com/gawker-media/image/upload/t_original/wnov10iugz7lmarrxurw.gif",2700],["https://66.media.tumblr.com/7bfa20230f06120beeedd6a2f5e7da93/tumblr_opam6ltGFp1r7sijxo1_500.gif",2800],["https://66.media.tumblr.com/0f3ce98faf205b5f1cee0fcfa6203998/tumblr_p4k89myD5L1uq6svio1_540.gif",3200],["https://i.imgur.com/gWqobtj.gif",3500],["https://66.media.tumblr.com/9fe4a825ea240dd070a4709eabaaf1be/tumblr_nnl30uwfkf1r7sijxo1_400.gif",3000],["https://66.media.tumblr.com/9fe4a825ea240dd070a4709eabaaf1be/tumblr_nnl30uwfkf1r7sijxo1_400.gif",3000],["https://i.makeagif.com/media/2-04-2015/ojkKBy.gif",8000],["https://orig00.deviantart.net/ed39/f/2011/228/4/2/bb_shadow__s_astral_finish_by_nightmarezenuki-d46ufju.gif",5200],["https://vignette.wikia.nocookie.net/dbxfanon/images/7/7a/Susano%27o_Astral_Heat.gif/revision/latest?cb=20180213191522",4000],["https://thumbs.gfycat.com/UnsteadyDarkIberianmidwifetoad-size_restricted.gif",8000],["http://images6.fanpop.com/image/photos/37700000/Mario-and-Charizard-clash-Gif-super-mario-bros-37744930-371-209.gif",4000],["https://i.kym-cdn.com/photos/images/original/000/768/731/710.gif",5800],["https://66.media.tumblr.com/596cde813346dd39047015255bc2c450/tumblr_n2af5uURYz1r7epm9o1_400.gif",3500],["https://i.redd.it/480pt79x1i5z.gif",4200],["https://78.media.tumblr.com/tumblr_m5lgugMMOo1rrlrnjo1_500.gif",2250],["https://thumbs.gfycat.com/SociableMessyIndusriverdolphin-size_restricted.gif",8500],["http://www.gogglebob.com/pics/xs/ep3/1038.gif",7500],["https://thumbs.gfycat.com/PoliticalBeneficialBergerpicard-small.gif",2600]]
let frontTeams
let frontPersonae
// ,["https://thumbs.gfycat.com/UnsteadyDarkIberianmidwifetoad-size_restricted.gif",8000],["http://i.imgur.com/93T3stl.gifv",2500],["http://images6.fanpop.com/image/photos/37700000/Mario-and-Charizard-clash-Gif-super-mario-bros-37744930-371-209.gif",4000],["https://i.kym-cdn.com/photos/images/original/000/768/731/710.gif",5800],["https://66.media.tumblr.com/596cde813346dd39047015255bc2c450/tumblr_n2af5uURYz1r7epm9o1_400.gif",3500],["https://i.redd.it/480pt79x1i5z.gif",5000],["https://78.media.tumblr.com/tumblr_m5lgugMMOo1rrlrnjo1_500.gif",2500],["https://thumbs.gfycat.com/SociableMessyIndusriverdolphin-size_restricted.gif",8500],["http://www.gogglebob.com/pics/xs/ep3/1038.gif",7500],["https://thumbs.gfycat.com/PoliticalBeneficialBergerpicard-small.gif",3000]
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
    let newroster = []
    for(selectnode of document.getElementsByClassName('create-form')[0].querySelectorAll('select')){
      !newroster.includes(selectnode.value) ? newroster.push(selectnode.value) : null
    }
    if(newroster.length < 5){
      alert("Teams must comprise 5 members, and each member can only be selected once.")
    }
    else{
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
        select1.innerHTML += `<option data-teamid=${newteam.id}>${newteam.Name}</option>`
        select2.innerHTML += `<option data-teamid=${newteam.id}>${newteam.Name}</option>`
      })
    }
  })

  //Initial fetch request to load all teams
  fetch(DTs_path).then(res => res.json()).then(json => {
    //loading the teams into the select bars and assigning functionality...
    frontTeams = json
    for(let DT of json){
      select1.innerHTML += `<option data-teamid=${DT.id}>${DT.Name}</option>`
      select2.innerHTML += `<option data-teamid=${DT.id}>${DT.Name}</option>`
    }

    //load teams on select and create matchup when 2 are selected
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
            roster.firstElementChild.insertAdjacentHTML('afterend',`<span class="list-leader">${renderTeamPersona(P)}</span>`)
          }
          else{
            roster.innerHTML += renderTeamPersona(P)
          }
        }
        roster.innerHTML += `<li>Expected Power: ${selectedTeam.overall_power}</li>
        <button data-deleteid=${selectedTeam.id}>Unmake ${selectedTeam.Name}...</button>`
        roster.innerHTML = `<center>${roster.innerHTML}</center>`
      }

      //Delete button functionality
      if(event.target.dataset.deleteid){
        let selectedTeam = frontTeams.find(t => t.id == Number(event.target.dataset.deleteid))
        let deletepath = DTs_path+"/"+selectedTeam.id
        fetch(deletepath, {
          method: "DELETE",
          headers: {
            "Accept": 'application/json',
            "Content-Type": "application/json"
          }}).then(res => res.json()).then(json => {frontTeams = json})
        roster.innerHTML = `<h3>${selectedTeam.Name} has been unmade...RIP</h3>`
        if(div1.firstElementChild.id == `Head${selectedTeam.id}`){
          div1.style.setProperty("left", "-50%")
          setTimeout(() => {div1.innerHTML=""}, 1500)
        }
        else if(div2.firstElementchild.id == `Head${selectedTeam.id}`){
          div2.style.setProperty("right", "-50%")
          setTimeout(() => {div2.innerHTML=""}, 1500)
        }
        for(let node of document.querySelectorAll(`[data-teamid=\"${String(selectedTeam.id)}\"]`)){
          node.parentElement.removeChild(node)
        }
      }

      //Individual Persona display
      if(event.target.dataset.pid){
        modal.style.display = "block";
        let selectedPersona = frontPersonae.find(p => p.id == Number(event.target.dataset.pid))
        roster.innerHTML = `
          <center><h3>${selectedPersona.Name}</h3>
          <p>${selectedPersona.typeclass}<br>Level ${selectedPersona.Power}<br>Team Role: ${selectedPersona.Role}</p>
          <p>Gameverse: ${selectedPersona.Origin}</p>
          <img class="indpersona" data-pid=${selectedPersona.id} src="${selectedPersona.Image}" height="450"></center>`
      }

      //Modal hide logic
      if(event.target.id === "Personae") {
        modal.style.display = "none";
      }

      //Team Form hide logic
      if(event.target.id === "hideform"){
        event.preventDefault()
        teamForm.style.display = 'none'
        addTeamArea.style.display = 'block'
      }

      //Fight button!
      if(event.target.className === "fight!"){
        let total = Number(event.target.dataset.team1power) + Number(event.target.dataset.team2power)
        let victory = Math.random()*total
        let team1 = select1.value
        let team2 = select2.value
        if(victory > Number(event.target.dataset.team1power)){
          victor = frontTeams.find(t => t.Name == team2)
        }
        else{
          victor = frontTeams.find(t => t.Name == team1)
        }
        modalgif(modal,roster,victor)
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

    })
  })
})

//functions for rendering teams and personae
const modalgif = function(modal, roster, victor) {
  let sample = Math.floor(Math.random()*gifs.length)
  console.log(gifs[sample])
  modal.style.display = "block"
  roster.width = "auto"
  roster.innerHTML = `<center><img src=${gifs[sample][0]} class="fightgif"></center>`
  setTimeout(() => {
    roster.innerHTML = `<center><h1>${victor.Name} victory!</h1><br>
    <div class="victoryleader"><img class="vimage" src=${victor.leader.Image}></div></center>`}, gifs[sample][1])
}

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
  <span class="listpersona">
  <img class="avatar" data-pid=${P.id} src="${P.Image}" height="50">
  <p class="personastats">${P.Name}<br>${P.typeclass}<br>Level ${P.Power}</p>
  </span>
  `
}

const renderTeamPersona = function(P){
  return `
  <span class="modallistpersona">
  <img class="avatar" data-pid=${P.id} src="${P.Image}" height="50">
  <p class="personastats">${P.Name}<br>${P.typeclass}<br>Level ${P.Power}</p>
  <p>Team Role:<br>${P.Role}</p>
  </span>
  `
}

const renderMatchup = function(div1, div2){
  if(div1.innerHTML && div2.innerHTML){
    let team1_id = div1.lastElementChild.firstElementChild.dataset.id
    let team2_id = div2.lastElementChild.firstElementChild.dataset.id
    let team1 = frontTeams.find(t => t.id == team1_id)
    let team2 = frontTeams.find(t => t.id == team2_id)
    let favored = team2
    let underdog = team1
    if(Number(team1.overall_power) > Number(team2.overall_power)){
        favored = team1
        underdog = team2
    }
    matchup.innerHTML = `
    <p><h3>${team1.Name} versus ${team2.Name}</h3></p>
    <h4>${favored.Name} favored: ${favored.overall_power} to ${underdog.overall_power}</h4>
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
