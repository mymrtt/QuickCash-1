(function() {
  var menuItem = document.querySelectorAll(".menu-item");
  var menuOpen = document.querySelector(".menu-list");

  var menuMobile = document.querySelector(".menu-mobile");
  var fecharMenu = document.querySelector(".fechar-menu");

  var formOpen = document.getElementById("div-form");
  var formClose = document.getElementById("div-form");

  document.getElementById("menu-mobile").addEventListener("click", openMenu);
  document.getElementById("fechar-menu").addEventListener("click", openMenu);
  document.getElementById("menu-item").addEventListener("click", closeMenu);
  document.getElementById("menu-item1").addEventListener("click", closeMenu);
  document.getElementById("menu-item2").addEventListener("click", closeMenu);

  document
    .getElementById("box-product--Cash")
    .addEventListener("click", showCashToCash);

  document
    .getElementById("box-product--Card")
    .addEventListener("click", showCashToCard);

  document
    .getElementById("box-product--Account")
    .addEventListener("click", showCashToAccount);

  document.getElementById("btnForm").addEventListener("click", openForm);
  document.getElementById("close-form").addEventListener("click", closeForm);

  function showCashToCash() {
    let cashToCash = document.getElementById("OurProducts-Inside-1");
    let cashToCard = document.getElementById("OurProducts-Inside-2");
    let cashToAccount = document.getElementById("OurProducts-Inside-3");

    let openCash;

    if (!openCash) {
      openCash = true;
      cashToCash.style.display = "block";
      cashToCard.style.display = "none";
      cashToAccount.style.display = "none";
    }
  }

  function showCashToCard() {
    let cashToCash = document.getElementById("OurProducts-Inside-1");
    let cashToCard = document.getElementById("OurProducts-Inside-2");
    let cashToAccount = document.getElementById("OurProducts-Inside-3");

    let openCard;

    if (!openCard) {
      openCard = true;

      cashToCard.style.display = "block";
      cashToCash.style.display = "none";
      cashToAccount.style.display = "none";
    }
  }

  function showCashToAccount() {
    let cashToCash = document.getElementById("OurProducts-Inside-1");
    let cashToCard = document.getElementById("OurProducts-Inside-2");
    let cashToAccount = document.getElementById("OurProducts-Inside-3");

    let openAccount;

    if (!openAccount) {
      openAccount = true;

      cashToAccount.style.display = "block";
      cashToCash.style.display = "none";
      cashToCard.style.display = "none";
    }
  }

  // document
  //   .getElementById("box-product")
  //   .addEventListener("click", openProducts);
  // document
  //   .getElementById("box-product1")
  //   .addEventListener("click", openProducts);
  // document
  //   .getElementById("box-product2")
  //   .addEventListener("click", openProducts);

  // document
  //   .getElementById("box-product")
  //   .addEventListener("click", closeProduct);
  // document
  //   .getElementById("box-product1")
  //   .addEventListener("click", closeProduct);
  // document
  //   .getElementById("box-product2")
  //   .addEventListener("click", closeProduct);

  // document.getElementById('box-product').addEventListener("click", openProduct);

  // 	Menu

  function openMenu() {
    menuOpen.classList.toggle("--menuOpen");
    menuMobile.classList.toggle("--menuMobile");
    fecharMenu.classList.toggle("--menuClose");
    menuItem.forEach(element => {
      element.classList.add("--openItem");
    });
  }

  function closeMenu() {
    menuOpen.classList.remove("--isOpen");
  }

  //  Form
  function openForm() {
    formOpen.classList.toggle("--isOpen");
  }

  function closeForm() {
    formClose.classList.remove("--isOpen");
  }

  //   function openProducts() {
  //     console.log("oioioi");
  //     boxProducts.classList.toggle("-show");
  //     boxProducts1.classList.toggle("-show");
  //     boxProducts2.classList.toggle("-show");
  //   }

  //   function closeProduct() {
  //     boxProducts.classList.remove("-show");
  //     boxProducts1.classList.remove("-show");
  //     boxProducts2.classList.remove("-show");
  //   }
})();

let cashToCash = document.getElementById("OurProducts-Inside-1");

function showCashToCash() {
  let openCash;

  if (!openCash) {
    openCash = true;
    cashToCash.style.display = "block";
    // cashToCard.style.display = "none";
    // cashToAccount.style.display = "none";
  }
}
