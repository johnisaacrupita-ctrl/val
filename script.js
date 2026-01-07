function sendSMS() {
  const phoneNumber = "sms:+639937311236";
  const message = encodeURIComponent(
    "Happy Valentine’s Day 💖 I made this website just for you 🥰"
  );

  window.location.href = `${phoneNumber}?body=${message}`;
}
