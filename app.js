function addFeedActivity(user,action,place){

let feed = JSON.parse(localStorage.getItem("feed") || "[]")

feed.unshift({

user:user,
action:action,
place:place,
time:"just now"

})

localStorage.setItem("feed",JSON.stringify(feed))

}

function loadFeed(){

const feedBox = document.getElementById("activityFeed")

let feed = JSON.parse(localStorage.getItem("feed") || "[]")

feed.forEach(a=>{

let card = document.createElement("div")

card.className="feed-card"

card.innerHTML = `

<div class="feed-user">${a.user}</div>
<div class="feed-action">${a.action} at <b>${a.place}</b></div>
<div class="feed-time">${a.time}</div>

`

feedBox.appendChild(card)

})

}

function loadPassport(){

let user = JSON.parse(localStorage.getItem("zartourUser"))

const passport = document.getElementById("passportStamps")

for(let i=0;i<user.questsCompleted;i++){

let stamp = document.createElement("div")

stamp.className="stamp"

stamp.innerText="✔"

passport.appendChild(stamp)

}

}


let feed = JSON.parse(localStorage.getItem("feed")||"[]")

feed.unshift({
user:"You",
action:"completed a quest",
place:data.title,
time:"just now"
})

localStorage.setItem("feed", JSON.stringify(feed))function loadQuest(){

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

function initUser(){

let user = JSON.parse(localStorage.getItem("zartourUser"))

if(!user){

let name = prompt("Welcome Explorer! Enter your name:")

user = {
name:name,
points:0,
level:"Village Explorer",
questsCompleted:0
}

localStorage.setItem("zartourUser", JSON.stringify(user))

}

}

initUser()

function updateLevel(){

let user = JSON.parse(localStorage.getItem("zartourUser"))

if(user.points >= 100){

user.level = "Cultural Guardian"

}

if(user.points >= 200){

user.level = "Heritage Champion"

}

localStorage.setItem("zartourUser", JSON.stringify(user))

}

function completeQuest(place){

let user = JSON.parse(localStorage.getItem("zartourUser"))

user.points += 10
user.questsCompleted += 1

localStorage.setItem("zartourUser", JSON.stringify(user))

updateLevel()

addFeedActivity(user.name,"completed a quest",place)

alert("Quest complete! +10 points")

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
