export const itemService = {
  getItems
}

function getItems() {
  return [
    {
      title: 'Seared Salmon Fillet',
      desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
      imgUrl: '../assets/img/homepage/menu-items/menu-item1.jpg'
    },
    {
      title: 'Rosemary Filet Mignon',
      desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
      imgUrl: '../assets/img/homepage/menu-items/menu-item2.jpg'

    },
    {
      title: 'Summer Fruit Chocolate Mousse',
      desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
      imgUrl: '../assets/img/homepage/menu-items/menu-item3.jpg'
    },

  ]
}