function bookService(){
let b={name:bname.value,phone:bphone.value,msg:bmsg.value};
let list=JSON.parse(localStorage.getItem("bookings"))||[];
list.push(b);
localStorage.setItem("bookings",JSON.stringify(list));
window.open("https://wa.me/918250687140?text=New Booking Received");
}

function paymentDone(){
window.open("https://wa.me/918250687140?text=Payment Completed");
}

function addReview(){
let r={name:rname.value,msg:rmsg.value};
let list=JSON.parse(localStorage.getItem("reviews"))||[];
list.push(r);
localStorage.setItem("reviews",JSON.stringify(list));
loadReviews();
}

function loadReviews(){
reviewList.innerHTML=(JSON.parse(localStorage.getItem("reviews"))||[])
.map(r=>`<p>⭐ <b>${r.name}</b>: ${r.msg}</p>`).join("");
}
loadReviews();
