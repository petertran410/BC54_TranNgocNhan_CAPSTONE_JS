let getData = (idValue) => document.querySelector(idValue).value;

export let getDataFromForm = () => {
  let id = getData("#productID");
  let name = getData("#productName");
  let type = getData("#type");
  let price = getData("#productPrice");
  let screen = getData("#productScreen");
  let frontScreen = getData("#productFrontScreen");
  let backScreen = getData("#productBackScreen");
  let img = getData("#productImage");
  let desc = getData("#productDescription");

  return {
    id,
    name,
    type,
    price,
    screen,
    frontScreen,
    backScreen,
    img,
    desc,
  };
};
