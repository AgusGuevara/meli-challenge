const createDetailData = (item, desc) => {
  return [
    {
      author: {
        name: "Agustin Thomas",
        lastname: "Guevara",
      },
      item: {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currencey_id,
          amount: ((x) => {
            return x.toString().split(".")[0];
          })(item.price),
          decimals: ((x) => {
            return x.toString().split(".")[1];
          })(item.price),
        },
        category: item.attributes.filter((attr) => {
          return attr.attribute_group_name === "Principales";
        }),
        picture: item.pictures[0].url,
        condition: item.condition,
        free_shiping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: desc.text ? desc.text : desc.plain_text,
      },
    },
  ];
};

module.exports = {
  createDetailData,
};
