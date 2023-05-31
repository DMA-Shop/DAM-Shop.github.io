function login( d4) {
  d4 = parseInt(document.getElementById("login1").value);
  d5 = parseInt(document.getElementById("login2").value);
  var result = d4
  var result1 = d5
  if (result == 17 && result1 == 2005  ) {
    prompt("Ссылка на админку", "http://127.0.0.1:5500/admin.html");
  } else {
    alert("Неправильный пароль")
  }
 
}

function search() {
  let input = document.getElementById("inputSearch");
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("list");
  let li = ul.getElementsByTagName("li");

  // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
  for (let i = 0; i < li.length; i++) {
      let p = li[i].getElementsByTagName("p")[0];
      if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

document.addEventListener('keyup', search);

