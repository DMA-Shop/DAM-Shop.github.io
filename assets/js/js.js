function login( ) {
  d4 = parseInt(document.getElementById("login1").value);
  d5 = parseInt(document.getElementById("login2").value);
  var result = d4
  var result1 = d5
  if (result == 17 && result1 == 2005  ) {
    var url = 'https://dma-shop.github.io/admin.html';
    window.open(url);
  } else {
    alert("Неправильный пароль")
  }
}


function search() {
  let input = document.getElementById("inputSearch");
  let filter = input.value.toUpperCase("list");
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

