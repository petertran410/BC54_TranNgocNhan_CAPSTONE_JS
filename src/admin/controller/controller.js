export let renderProductList = (productArr) => {
  var contentHTML = "";

  productArr.forEach((product) => {
    let { id, name, price, frontScreen, backScreen, screen, type, desc, img } =
      product;

    var trString = `<tr class="text-center">
                      <td>${id}</td>
                      <td>${name}</td>
                      <td>${price}</td>
                      <td>${screen}</td>
                      <td>${frontScreen}</td>
                      <td>${backScreen}</td>
                      <td>
                        <img src=${img} alt="Image" width="100px" height="100px"  class="text-center" />
                      </td>
                      <td>${desc}</td>
                      <td>${type}</td>
                      <td>
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
  document.querySelector("#productImage").value = img;
  document.querySelector("#productDescription").value = desc;
};
