function toggleMenu(){
  let m=document.getElementById("menu");
  m.style.display=m.style.display==="flex"?"none":"flex";
}

function toggleSub(){
  let s=document.getElementById("submenu");
  s.style.display=s.style.display==="block"?"none":"block";
}

function goSection(id){
  document.getElementById(id).scrollIntoView();
}

function notify(){
  alert("🔔 Notification Enabled!");
}

function searchService(){
  let input=document.getElementById("searchInput").value.toLowerCase();
  let cards=document.getElementsByClassName("card");
  for(let i=0;i<cards.length;i++){
    cards[i].style.display=cards[i].innerText.toLowerCase().includes(input)?"block":"none";
  }
}
