
/* ================= script.js ================= */
function scrollToBook(){
  document.getElementById('book').scrollIntoView({behavior:'smooth'});
}

// REALISTIC TRAIN DATA
const trains = [
  {name:"Green Line Express", from:"Lahore", to:"Karachi", time:"10:00 AM", price:5500},
  {name:"Tezgam", from:"Karachi", to:"Lahore", time:"08:00 PM", price:4500},
  {name:"Khyber Mail", from:"Peshawar", to:"Karachi", time:"06:00 AM", price:6000},
  {name:"Pakistan Express", from:"Sialkot", to:"Lahore", time:"03:00 PM", price:1200}
];

function searchTrains(){
  let from = document.getElementById('from').value.toLowerCase().trim();
  let to = document.getElementById('to').value.toLowerCase().trim();

  let results = document.getElementById('results');
  results.innerHTML="";

  if(!from || !to){
    alert("Please enter both From and To");
    return;
  }

  let found = trains.filter(t =>
    t.from.toLowerCase().includes(from) &&
    t.to.toLowerCase().includes(to)
  );

  if(found.length === 0){
    results.innerHTML = `<p style='color:red'>No trains found. Try Lahore, Karachi, Sialkot, Peshawar</p>`;
    return;
  }

  found.forEach(t => {
    let div = document.createElement('div');
    div.className="card";
    div.innerHTML = `
      <h3>${t.name}</h3>
      <p>${t.from} → ${t.to}</p>
      <p>${t.time}</p>
      <p>Rs ${t.price}</p>
      <button onclick="bookTicket('${t.name}','${t.from}','${t.to}','${t.time}','${t.price}')">Book Now</button>
    `;
    results.appendChild(div);
  });
}

function bookTicket(name,from,to,time,price){
  let box = document.getElementById('ticketBox');
  let id = Math.floor(Math.random()*99999);

  box.style.display="block";
  box.innerHTML = `
    <h2>🎟 Ticket Confirmed</h2>
    <p><b>ID:</b> ${id}</p>
    <p>${name}</p>
    <p>${from} → ${to}</p>
    <p>${time}</p>
    <p>Rs ${price}</p>
  `;
}

function submitContact(e){
  e.preventDefault();
  document.getElementById('contactMsg').innerText = "Message sent successfully ✅";
}
