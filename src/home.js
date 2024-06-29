function home() {
  const home = document.getElementById("content");
  home.innerHTML = "";
  home.className = "home";
  home.innerHTML = `
            <h1>The Big Restaurant</h1>
            <p>
                Welcome to The Big Restaurant! We are a family-owned restaurant that has been serving the community for over 50 years. We offer a variety of dishes that are sure to please everyone in your party. Come in and enjoy our delicious food and friendly service today!
            </p>
        `;

  return home;
}

export { home };
