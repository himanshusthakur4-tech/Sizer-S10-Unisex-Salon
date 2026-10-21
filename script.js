/* SIZER S10 — WEBSITE INTERACTIONS */

document.addEventListener("DOMContentLoaded", () => {

  // MOBILE MENU
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
      });
    });
  }

  // COPYRIGHT YEAR
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // SERVICE SELECTION
  document.querySelectorAll("[data-service]").forEach(link => {
    link.addEventListener("click", () => {
      const service = document.getElementById("service-choice");
      if (service) {
        service.value = link.dataset.service;
      }
    });
  });

  // PREVENT PAST-DATE BOOKINGS
  const dateInput = document.getElementById("preferred-date");

  if (dateInput) {
    const now = new Date();
    const localDate = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0")
    ].join("-");

    dateInput.min = localDate;
  }

  // WHATSAPP APPOINTMENT REQUEST
  const bookingForm = document.getElementById("booking-form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", event => {
      event.preventDefault();

      if (!bookingForm.reportValidity()) return;

      const name = document.getElementById("customer-name").value.trim();
      const phone = document.getElementById("customer-phone").value.trim();
      const service = document.getElementById("service-choice").value;
      const date = document.getElementById("preferred-date").value;
      const time = document.getElementById("preferred-time").value;
      const notes = document.getElementById("customer-message").value.trim();

      if (!name || !phone || !service || !date || !time) {
        alert("Please fill in all required fields.");
        return;
      }

      const selectedDate = new Date(date + "T00:00:00");
      const formattedDate = selectedDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });

      const message = [
        "Hello Sizer S10 Unisex Salon!",
        "",
        "I would like to request an appointment.",
        "",
        "*Name:* " + name,
        "*Phone:* " + phone,
        "*Service:* " + service,
        "*Preferred Date:* " + formattedDate,
        "*Preferred Time:* " + time,
        ...(notes ? ["*Special Request:* " + notes] : []),
        "",
        "Please confirm availability.",
        "I understand my appointment is not confirmed until approved by the salon."
      ].join("\n");

      const salonNumber = "919136976555";
      const whatsappURL =
        "https://wa.me/" +
        salonNumber +
        "?text=" +
        encodeURIComponent(message);

      window.location.href = whatsappURL;
    });
  }

});
