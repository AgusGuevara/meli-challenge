const createListData = (obj, categories) => {
  let arr = [
    {
      author: {
        name: "Agustin Thomas",
        lastname: "Guevara",
      },
      categories: categories,
      items: [],
    },
  ];

  obj.map((item) =>
    arr[0].items.push({
      id: item.id,
      title: item.title,
      price: [
        {
          currency: item.currency_id,
          amount: ((x) => {
            return x.toString().split(".")[0];
          })(item.price),
          decimals: ((x) => {
            return x.toString().split(".")[1];
          })(item.price),
        },
      ],
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      address: item.address.state_name,
    })
  );
  return arr;
};

module.exports = { createListData };
