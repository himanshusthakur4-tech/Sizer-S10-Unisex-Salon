/*
  SIZER S10 UNISEX SALON — CONFIGURATION
  Edit the values below before publishing. Keep WhatsApp number digits only:
  country code + number, no +, spaces or dashes (India example: 919876543210).
*/
const SALON_CONFIG = {
  whatsappNumber: "919136976555",
  phoneNumber: "9136976555",
  address: "Shantiwan-3, Shop No.1, Raheja Township, Malad (East), Mumbai - 400097
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Shantiwan-3%2C%20Shop%20No.1%2C%20Raheja%20Township%2C%20Malad%20East%2C%20Mumbai%20400097",
  googleReviewsUrl: "https://g.page/r/CZbIwJqlB2gIEBM/review",
  openingHours: "Monday - Saturday: 9:00 AM - 11:00 PM\nSunday: 8:00 AM - 11:30 PM"
};

const isPlaceholder = value => !value || value.startsWith("REPLACE_WITH_");

function setLink(id, url, fallbackText) {
  const element = document.getElementById(id);
  if (!element) return;
  if (!url || url === "#") {
    element.href = "#contact";
    element.addEventListener("click", event => {
      if (element.href.endsWith("#contact")) return;
    });
    if (fallbackText) element.textContent = fallbackText;
    element.classList.add("is-unconfigured");
    return;
  }
  element.href = url;
}

function configureSalon() {
  const address = document.getElementById("salon-address");
  const phone = document.getElementById("salon-phone");
  const hours = document.getElementById("salon-hours");
  const callLink = document.getElementById("call-link");
  const directions = document.getElementById("directions-link");
  const reviews = document.getElementById("google-reviews-link");
  const floating = document.getElementById("floating-whatsapp");

  if (!isPlaceholder(SALON_CONFIG.address)) address.textContent = SALON_CONFIG.address;
  if (!isPlaceholder(SALON_CONFIG.phoneNumber)) {
    phone.textContent = SALON_CONFIG.phoneNumber;
    callLink.href = `tel:${SALON_CONFIG.phoneNumber.replace(/[^\d+]/g, "")}`;
  } else {
    callLink.href = "#contact";
    callLink.addEventListener("click", e => { e.preventDefault(); alert("Please add the salon phone number in script.js first."); });
  }
  if (!isPlaceholder(SALON_CONFIG.openingHours)) hours.textContent = SALON_CONFIG.openingHours;
  if (!isPlaceholder(SALON_CONFIG.googleMapsUrl)) directions.href = SALON_CONFIG.googleMapsUrl;
  else directions.addEventListener("click", e => { e.preventDefault(); alert("Please add the salon Google Maps directions URL in script.js first."); });
  if (!isPlaceholder(SALON_CONFIG.googleReviewsUrl)) reviews.href = SALON_CONFIG.googleReviewsUrl;
  else reviews.addEventListener("click", e => { e.preventDefault(); alert("Please add the salon Google Reviews or Business Profile URL in script.js first."); });

  const waReady = !isPlaceholder(SALON_CONFIG.whatsappNumber);
  if (waReady) {
    floating.href = `https://wa.me/${SALON_CONFIG.whatsappNumber}`;
  } else {
    floating.href = "#contact";
    floating.addEventListener("click", e => { e.preventDefault(); document.getElementById("contact").scrollIntoView({behavior:"smooth"}); alert("Please add the salon WhatsApp number in script.js first."); });
  }
}

document.getElementById("booking-form").addEventListener("submit", function(event) {
  event.preventDefault();
  if (isPlaceholder(SALON_CONFIG.whatsappNumber)) {
    alert("Before booking can work, add the salon WhatsApp number in script.js.");
    return;
  }
  const data = new FormData(this);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const service = String(data.get("service") || "").trim();
  const date = String(data.get("date") || "").trim();
  const message = String(data.get("message") || "").trim();
  const lines = [
    "Hello Sizer S10 Unisex Salon! I'd like to enquire about an appointment.",
    `Name: ${name}`,
    `My phone: ${phone}`,
    `Service: ${service}`,
    date ? `Preferred date: ${date}` : "",
    message ? `Message: ${message}` : "",
    "Please confirm availability and price. Thank you!"
  ].filter(Boolean);
  const url = `https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const select = document.getElementById("service-choice");
    const serviceName = link.dataset.service;
    [...select.options].forEach(option => {
      if (option.value === serviceName || option.text === serviceName) select.value = option.value || option.text;
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menuToggle.textContent = open ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
configureSalon();
