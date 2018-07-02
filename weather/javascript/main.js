function gen (lst) {
  var rand = Math.floor((Math.random() * 10))
  document.getElementById('bg').style.backgroundImage = lst[rand]
}

function generror (lst) {
  var rand = Math.floor((Math.random() * 10))
  document.getElementById('error').style.backgroundImage = lst[rand]
}
