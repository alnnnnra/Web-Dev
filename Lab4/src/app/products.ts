export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image1: string;
  image2: string;
  image3: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Blue sofa',
    price: 243.88,
    description: `Blue Sofa`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hce/50353683333150/arman-company-komfort-kvadrat-p36-seryj-102085936-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/hd1/50353683529758/arman-company-komfort-kvadrat-p36-seryj-102085936-2-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2d/h66/50353683759134/arman-company-komfort-kvadrat-p36-seryj-102085936-3-Container.jpg',
    link: 'https://kaspi.kz/shop/p/bulgyn-komfort-p36-divan-obivka-veljur-60x284x140-sm-sinii-102085936/?c=750000000#!/item',
    rating: 5.0,
  },

  {
    id: 2,
    name: 'MacBook Pro 16',
    price: 5478.56,
    description: `Apple MacBook Pro 16 MVVM2 Laptop Silver`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h18/h2d/46665337995294/apple-macbook-pro-16-mvvm2-serebristyj-100397588-1-Container.jpg',
    image2: 'https://www.mechta.kz/images/product/69725/17100000154_2-480.webp',
    image3: 'https://www.mechta.kz/images/product/69725/17100000154_5-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mvvm2-serebristyi-100397588/?c=750000000#!/item',
    rating: 5.0,
  },

  {
    id: 3,
    name: 'Airpods Pro 2',
    price: 267.33,
    description: `Apple Airpods Pro 2nd generation headphones white`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    image2:
      'https://www.mechta.kz/export/1cbitrix/import_files/3d/3db2e093-3a26-11ed-a24a-005056b6dbd7-480.webp',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/3d/3db2e095-3a26-11ed-a24a-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item',
    rating: 5.0,
  },

  {
    id: 4,
    name: 'Apple Watch Series 8 45mm',
    price: 503.13,
    description: `Smart Watch Apple Watch Series 8 45mm Aluminum Black`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    image2:
      'https://www.mechta.kz/export/1cbitrix/import_files/3f/3fa7c0fd-3b26-11ed-a24a-005056b6dbd7-480.webp',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/3f/3fa7c0ff-3b26-11ed-a24a-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    rating: 5.0,
  },

  {
    id: 5,
    name: 'Dyson HS05 Airwrap Complete',
    price: 1112.99,
    description: `Dyson HS05 Airwrap Complete`,
    image1: 'https://cdn1.ozone.ru/s3/multimedia-t/wc1000/6387934661.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h8c/63083545165854/dyson-hs05-airwrap-complete-fen-setka-1300-w-106790035-2.jpg',
    image3: 'https://images.satu.kz/194436844_w640_h640_194436844.jpg',
    link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-fen-schetka-1300-w-106790035/?c=750000000#!/itemhttps://kaspi.kz/shop/p/apple-macbook-pro-16-mvvm2-serebristyi-100397588/?c=750000000#!/item',
    rating: 5.0,
  },
];
