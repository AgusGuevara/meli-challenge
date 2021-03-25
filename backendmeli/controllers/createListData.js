const createListData = (obj, cat) => {
  let arr = [
    {
      author: {
        name: "Agustin Thomas",
        lastname: "Guevara",
      },
      categories: cat,
      items: [],
    },
  ];

  obj.map((a) =>
    arr[0].items.push({
      id: a.id,
      title: a.title,
      price: [
        {
          currency: a.currency_id,
          amount: ((x) => {
            return x.toString().split(".")[0];
          })(a.price),
          decimals: ((x) => {
            return x.toString().split(".")[1];
          })(a.price),
        },
      ],
      picture: a.thumbnail,
      condition: a.condition,
      free_shipping: a.shipping.free_shipping,
    })
  );
  return arr;
};

module.exports = { createListData };
