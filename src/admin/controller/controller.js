export let renderProductList = (productArr) => {
  var contentHTML = "";

  productArr.forEach((product) => {
    let { id, name, price, frontScreen, backScreen, screen, type, desc, img } =
      product;

    var trString = `<tr>
                      <td>${id}</td>
                      <td>${name}</td>
                      <td>${price}</td>
                      <td>${screen}</td>
                      <td>${frontScreen}</td>
                      <td>${backScreen}</td>
                      <td>${img}</td>
                      <td>${desc}</td>
                      <td>${type}</td>
                      <td class="d-flex">
                        <button class="btn btn-danger" onclick=deleteProduct(${id})>Delete</button>
                        <button class="btn btn-success" onclick=editProduct(${id})>Edit</button>
                      </td>
                    </tr>`;

    contentHTML += trString;
  });

  document.getElementById("tbodyProductList").innerHTML = contentHTML;
};

const forIphone = "Iphone";
const forSamsung = "Samsung";
const Iphone = true;

export let showDataForm = (product) => {
  let { id, name, price, frontScreen, backScreen, screen, type, desc, img } =
    product;

  document.querySelector("#productID").value = id;
  document.querySelector("#productName").value = name;
  document.querySelector("#type").value = type == Iphone ? forIphone : forSamsung;
  document.querySelector("#productPrice").value = price;
  document.querySelector("#productScreen").value = screen;
  document.querySelector("#productFrontScreen").value = frontScreen;
  document.querySelector("#productBackScreen").value = backScreen;
  document.querySelector("#productImage").src = img;
  document.querySelector("#productDescription").value = desc;
};
