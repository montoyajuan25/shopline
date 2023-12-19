function buscar() {
  var input = document.getElementById('searchInput');
  var filter = input.value.toLowerCase();
  var products = document.getElementsByClassName('product');

  for (var i = 0; i < products.length; i++) {
    var productName = products[i].getElementsByTagName('h2')[0];
    if (productName.innerHTML.toLowerCase().indexOf(filter) > -1) {
      products[i].style.display = '';
    } else {
      products[i].style.display = 'none';
    }
  }
}