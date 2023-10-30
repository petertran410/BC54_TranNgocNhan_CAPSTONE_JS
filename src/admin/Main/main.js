import { getDataFromForm } from "../Product/product.js";
import https from "../Service/service.js";
import { renderProductList } from "../controller/controller.js";

let fetchProductList = () => {
  https
    .get(`/product`)
    .then((res) => {
      console.log(res.data);
      renderProductList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchProductList();

window.deleteProduct = (id) => {
  https
    .delete(`/product/${id}`)
    .then((res) => {
      fetchProductList();
    })
    .catch((err) => {
      console.log("Fail to delete");
    });
};

window.addProduct = () => {
  let product = getDataFromForm();

  https
    .post(`/product`, product)
    .then((res) => {
      $("#exampleModal").modal("hide");
      Swal.fire("Product added success");
      console.log(res);
      fetchProductList();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.editProduct = (id) => {
  $("exampleModal").modal("show");
  https
    .get(`/product/${id}`)
}
