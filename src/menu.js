function menu() {
  const menu = document.getElementById("content");
  menu.innerHTML = "";
  menu.className = "menu";
  menu.innerHTML = `
        <h1>Menu</h1>
        <ul>
            <li>Appetizers</li>
            <li>Entrees</li>
            <li>Desserts</li>
        </ul>
    `;

  return menu;
}

export { menu };
