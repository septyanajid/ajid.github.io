var products = [
  {
    id: 1,
    name: "Nasi Goreng Ayam",
    price: 20000,
    active: false
  },
  {
    id: 2,
    name: "Nasi Goreng Bakso",
    price: 30000,
    active: false
  },
  {
    id: 3,
    name: "Nasi Goreng Telur",
    price: 12000,
    active: false
  },
  {
    id: 4,
    name: "Mie Goreng Ayam",
    price: 22000,
    active: false
  },
  {
    id: 5,
    name: "Mie Goreng Bakso",
    price: 33000,
    active: false
  },
  {
    id: 6,
    name: "Mie Goreng Telur",
    price: 18000,
    active: false
  },
];

var total = 0;
var $app = document.querySelector(".app");

function renderTitle(container) {
  var $title = document.createElement("h1");
  $title.innerHTML = "Silakan Pesan";
  container.appendChild($title);
}

function addTotal(product, total, isAdd) {
  if (isAdd) {
    total += product.price;
  } else {
    total -= product.price;
  }
  return total;
}

function renderList(container, products) {
  var $orderList = document.createElement("ul");

  products.forEach(function(product) {
    var $product = document.createElement("li");
    var $productPrice = document.createElement("span");

    $productPrice.innerHTML = currency(product.price);
    $product.innerHTML = product.name;
    $product.appendChild($productPrice);

    $orderList.appendChild($product);

    $product.addEventListener("click", function(event) {

      var isAdd = !hasClass($product, "is-active");

      if (isAdd) {
        addClass($product, "is-active");
      } else {
        removeClass($product, "is-active");
      }

      total = addTotal(product, total, isAdd);

      var $total = document.querySelector(".total span");
      $total.innerHTML = currency(total);
    });
  });

  container.appendChild($orderList);
}

function renderTotalContainer(container, total) {
  var $totalContainer = document.createElement("div");
  addClass($totalContainer, "total");

  $totalContainer.innerHTML = "Total: ";

  var $total = document.createElement("span");
  $total.innerHTML = currency(total);
  $totalContainer.appendChild($total);

  container.appendChild($totalContainer);
}

renderTitle($app);
renderList($app, products);
renderTotalContainer($app, total);