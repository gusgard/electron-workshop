"use strict";
const ipc = require("electron").ipcRenderer;

document.addEventListener("DOMContentLoaded", function () {
  let version = process.version;
  let e = document.getElementById("info");
  e.textContent = "I'm running Node.js version: " + version;

  let btn = document.getElementById("clickme");

  btn.addEventListener("click", function () {
    ipc.send("show-dialog", { message: "I was clicked 😂" } );
  });
});
