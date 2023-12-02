async function fetchApp() {
  const app = await fetch("text.json");
  if (app.ok === true) {
    return app.json().then((data) => {
      console.log(data);
      document.getElementById("ville").innerHTML = data.tmp;
    });
  }
  throw new Error("impossible d'acceder au serveur");
}
fetchApp().then((res) => console.log(res));

// async function fetchUser() {
//   let app = await fetch("text.json");
//   if (app.ok === true) {
//     return app.text();
//   }
//   throw new Error("Impossible d'acceder au serveur. Verifiez votre url");
// }

// fetchUser().then(res => console.log(res))
