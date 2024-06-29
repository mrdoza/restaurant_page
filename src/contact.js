function contact() {
  const contact = document.getElementById("content");
  contact.innerHTML = "";
  contact.className = "contact";
  contact.innerHTML = `
          <h1>Conact Us</h1>
          <ul>
              <li>123 Main St., Downtown</li>
              <li>867-5309</li>
              <li>jenny@thebigrestaurant.com</li>
          </ul>
      `;

  return contact;
}

export { contact };
