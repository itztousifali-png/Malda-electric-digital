function toggleMenu(){
  let d=document.getElementById("drawer");
  d.style.left = (d.style.left==="0px") ? "-220px" : "0px";
}

function notify(){
  alert("🔔 New services & updates coming soon!");
}

function whatsappAuto(){
  let msg =
  "Hello Malda Electric & Digital,%0A"+
  "I need your service.%0A"+
  "Please contact me.";

  window.open("https://wa.me/918250687140?text="+msg,"_blank");
}
