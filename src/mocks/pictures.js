const pictures = [
  {
    id: 1,
    url: {
      main: 'img/desktop_slide_1.jpg',
      mini: 'img/desktop_slide_min_1.jpg',
    },
    description: 'Черная машина с включенными фарами',
  },
  {
    id: 2,
    url: {
      main: 'img/desktop_slide_2.jpg',
      mini: 'img/desktop_slide_min_2.jpg',
    },
    description: 'Салон автомобиля',
  },
  {
    id: 3,
    url: {
      main: 'img/desktop_slide_3.jpg',
      mini: 'img/desktop_slide_min_3.jpg',
    },
    description: 'Спидометр',
  },
];

function getPictures() {
  return pictures;
}

export { getPictures };