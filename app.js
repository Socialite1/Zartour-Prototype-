function loadQuest(){

const params = new URLSearchParams(window.location.search)

const quest = params.get("quest")

const quests = {

tree:{
title:"Sacred Tree",
story:"This tree was used for community meetings and ceremonies."
},

bakone:{
title:"Bakone Heritage",
story:"Bakone healers passed knowledge through storytelling."
}

}

document.getElementById("questTitle").innerText = quests[quest].title
document.getElementById("questStory").innerText = quests[quest].story

}

function completeQuest(){

let points = localStorage.getItem("points") || 0

points = parseInt(points) + 10

localStorage.setItem("points",points)

document.getElementById("reward").innerText =
"Quest complete! +10 cultural points"

}

function loadFeed(){

const feed = document.getElementById("activityFeed")

const activities = [

{
user:"Anna",
action:"earned Cultural Explorer badge",
place:"Bakone Village",
time:"2 min ago"
},

{
user:"David",
action:"checked in",
place:"Sacred Tree",
time:"10 min ago"
},

{
user:"Lerato",
action:"completed a quest",
place:"Venda Drum Experience",
time:"30 min ago"
}

]

activities.forEach(a=>{

const card = document.createElement("div")

card.className="feed-card"

card.innerHTML=`

<div class="feed-user">${a.user}</div>

<div class="feed-action">${a.action} at <b>${a.place}</b></div>

<div class="feed-time">${a.time}</div>

`

feed.appendChild(card)

})

}
