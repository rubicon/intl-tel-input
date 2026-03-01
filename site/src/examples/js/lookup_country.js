const input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: (success, failure) => {
    fetch(`https://ipapi.co/json?token=${process.env.IPAPI_TOKEN}`)
      .then(res => res.json())
      .then(data => success(data.country_code))
      .catch(() => failure());
  },
  loadUtils: () => import("<%= cacheBust('/intl-tel-input/js/utils.js') %>"),
  searchInputClass: "form-control",
});
