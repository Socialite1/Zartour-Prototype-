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
