const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const updateProfile = () => {
  // https://reqres.in/api/users/${id}
  // document.getElementById("nome").innerHTML = `${nome} ${sobrenome}`;
  // document.getElementById("avatar").src = avatar;

  fetch('https://jsonplaceholder.typicode.com/photos/' + getRandomInt(1, 5000))
    // .then(response => console.log(response))
    .then(response => response.json())
    .then(json => {
      console.log(json);
      document.getElementById("nome").innerHTML = `${json.title}`;
      document.getElementById("avatar").src = `${json.thumbnailUrl}`;

    })
}