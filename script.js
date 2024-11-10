let url = "https://openapi.programming-hero.com/api/phones?search";
let search_btn = document.querySelector("#btn");
let showAllBtn = document.querySelector("#showAllBtn");
let phone_display_div = document.querySelector("#phoneList");
let phonename = document.querySelector("#searchInput");

async function phoneSearch(query) {
  phone_display_div.innerHTML = "";
  let res = await fetch(url + query);
  let data = await res.json();
  let phonearr = data.data;

  let phonesToShow = phonearr.slice(0, 6);
  renderPhones(phonesToShow);

  if (phonearr.length > 6) {
    showAllBtn.style.display = "block";
    showAllBtn.onclick = () => {
      renderPhones(phonearr);
      showAllBtn.style.display = "none";
    };
  } else {
    showAllBtn.style.display = "none";
  }
}

function renderPhones(phones) {
  phone_display_div.innerHTML = "";
  for (let phone of phones) {
    let box = document.createElement("div");
    box.className = "phone-item";
    box.innerHTML = `
      <img src="${phone.image}" alt="${phone.phone_name}">
      <h2 class="name">${phone.phone_name}</h2>
      <p class="discription">There are many variations of passages of available, but the majority have suffered</p>
      <button class="btn" id="show-btn">Show Details</button>
    `;
    phone_display_div.appendChild(box);

    let showBtn = box.querySelector("#show-btn");
    showBtn.addEventListener("click", () => {
      document.getElementById("popup-img").src = phone.image;
      document.getElementById("popup-title").innerText = phone.phone_name;
      document.getElementById("popup-description").innerText =
        "There are many variations of passages of available, but the majority have suffered";
      document.getElementById("popup").style.display = "flex";
    });
  }
}
let showBtn = document.querySelectorAll("#show-btn");
for (phone of showBtn) {
  phone.addEventListener("click", () => {
    document.getElementById("popup-description").innerText =
      "There are many variations of passages of available, but the majority have suffered";
    document.getElementById("popup").style.display = "flex";
  });
}

document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

search_btn.addEventListener("click", () => {
  phoneSearch(phonename.value);
});

phonename.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    phoneSearch(phonename.value);
  }
});
