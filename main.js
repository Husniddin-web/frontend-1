const container = document.querySelector(".root");

container.innerHTML = ` <div class="loading">
        <h1>Loading...</h1>
    </div>`

fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((data) => {
        container.innerHTML = ""
        data.users.forEach((user) => {
            container.innerHTML += `
      <div class="user-card">
        <img class="user-image" src="${user.image}" alt="${user.firstName}" />
        <h3>${user.firstName}</h3>
        <p>Email: ${user.email}</p>
        <p>Role: ${user.role}</p>
      </div>
      `;
        });
    })
    .catch((error) => console.error("error", error));
