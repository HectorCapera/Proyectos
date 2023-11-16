const OPTIONS = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "69afcab259msh332e24ee31b29dap1043a4jsnc913b6be9728",
    "X-RapidAPI-Host": "geocodeapi.p.rapidapi.com",
  },
};
const fetchIpInfo = (ip) => {
  return fetch(`https://geocodeapi.p.rapidapi.com/GetTimezone${ip}`, OPTIONS)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const $form = document.querySelector("#form");
const $input = document.querySelector("#input");
const $submit = document.querySelector("#submit");
const $results = document.querySelector("#results");

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { value } = $input;
  if (!value) return;

  $submit.setAttribute("disabled", "");
  $submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  $submit.removeAttribute("disabled");
  $submit.removeAttribute("aria-busy");
});
