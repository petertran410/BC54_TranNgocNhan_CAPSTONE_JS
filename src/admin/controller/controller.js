export let renderProductList = (productArr) => {
  var contentHTML = "";

  productArr.forEach((product) => {
    let {id, name, price, frontScreen, backScreen, screen, type, desc, img} = product;

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