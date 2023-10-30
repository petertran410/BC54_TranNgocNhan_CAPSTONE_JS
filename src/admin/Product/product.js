let getData = (idValue) => document.querySelector(idValue).value;

export let getDataFromForm = () => {
  let id = getData("#productName");
  let type = getData("#type");
  let productPrice = getData("#productPrice");
  let productScreen = getData("#productScreen");
  let productFrontScreen = getData("#productFrontScreen");
  let productBackScreen = getData("#productBackScreen");
  let productImage = getData("#productImage");
  let productDescription = getData("#productDescription");

  return {
    id,
    type,
    productPrice,
    productScreen,
    productFrontScreen,
    productBackScreen,
    productImage,
    productDescription,
  };
};
