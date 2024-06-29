import "./style.css";
import { menu } from "./menu.js";
import { contact } from "./contact.js";
import { home } from "./home.js";

home();

const homeTab = document.getElementById("home");
const menuTab = document.getElementById("menu");
const contactTab = document.getElementById("contact");

homeTab.addEventListener("click", home);
menuTab.addEventListener("click", menu);
contactTab.addEventListener("click", contact);
