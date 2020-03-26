import { Company } from './models/company';

export const companies: Company[] = [
  {
    type: 'salon',
    giftCardUrl: "https://www.vagaro.com/us04/greyandcosalon",
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/73051041_2539535322804406_497752483012018176_o.png?_nc_cat=107&_nc_sid=174925&_nc_ohc=oIpYqX3aPYMAX8UHqs_&_nc_ht=scontent-ort2-1.xx&oh=25d115ad272a2d6e0e8d74cc9f6ccecd&oe=5EA00EF4",
    facebook: "greyandcosalon",
    expectedOpenDate: new Date('4/1/2019'),
    name: "Grey & Co Salon | Spa",
    phone: 5633922020,
    url: "https://greyandcosalon.com",
    description: "Please support your local salon and book an appointment or buy a gift card."
  },
  {
    type: 'coffee',
    giftCardUrl: "https://squareup.com/gift/4DTTQKZ1CWBEJ/order",
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/54516349_407624513136868_1449476347716960256_n.jpg?_nc_cat=111&_nc_sid=9e2e56&_nc_ohc=EU1ADV0cT7cAX9nru3d&_nc_ht=scontent-ort2-1.xx&oh=7c4c3327df01286470875cc6d0290367&oe=5EA13971",
    facebook: "392Dport",
    name: "392 Davenport / Clinton",
    url: "https://www.392caffe.com/",
    phone: 5632756292,
    description: "Please support your local coffee shop with an amazing atmosphere!"
  },

  {
    type: "retail",
    giftCardUrl: "https://www.redsthreadsqc.com/shop/gift-card",
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/58379155_267860164094883_4814993835891359744_n.png?_nc_cat=110&_nc_sid=85a577&_nc_ohc=XIDwiq2iPJkAX-I3RoK&_nc_ht=scontent-ort2-1.xx&oh=51314cde8182a516ef3000db7d0e30e5&oe=5E9E69FA",
    facebook: "redsthreadsqc",
    expectedOpenDate: null,
    name: "Red's Threads Athleisure Boutique",
    url: "https://www.redsthreadsqc.com/",
    phone: 5638881133,
    description: "Locally owned athleisure could use some gift card goodness!"
  },
  {
    type: "restaurant",
    giftCardUrl: "https://onelink.quickgifts.com/merchant/the-foundry-food-tap/",
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/p960x960/52120257_388463081965515_7106173169626513408_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=zTEvosvDV2wAX9d11QJ&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=aa055bcf06eb7243e0e96d2edd16ae88&oe=5E9F819C",
    facebook: "FoundryFoodTap",
    name: "Foundry Food + Tap",
    url: "https://www.foundryfoodtap.com",
    description: "Make sure to pick up your dinner to-go from Foundry today!",
    phone: 5634241121,
  },
  {
    type: "restaurant",
    giftCardUrl: "https://www.giftly.com/gift-card/central-standard-bettendorf",
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/26230544_2015562948688378_5289718395722671421_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=Z2QdJ6oZTc0AX9Q7uTy&_nc_ht=scontent-ort2-1.xx&oh=b3e14bdc40fac391f842fc95514efaed&oe=5EA1B16C",
    facebook: "centralstandardbett",
    name: "Central Standard - Bettendorf",
    url: "http://www.centralstandardburgers.com",
    phone: 5638885040,
    instagram: '',
    description: "Make sure to pick up a burger basket for a work from home lunch experience."
  },
  {
    type: "restaurant",
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/27657033_184666782289487_6734517347018094530_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=Aq5LoVdTaCMAX_7f7ZU&_nc_ht=scontent-ort2-1.xx&oh=7763b5c219839fb3dc1883d1bb9c3f89&oe=5E9E871E",
    facebook: "Panda-garden-184666485622850",
    name: "Panda Garden",
    url: "http://www.pandagardenia.com",
    expectedOpenDate: new Date('4/8/2020'),
    phone: 5634493888,
    description: "Locally owned and operated chinese take-out.  Make sure to support them when they open back up!",
    instagram: '',
  },
  {
    type: "restaurant",
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/18056731_1494552773910138_3461039912820690488_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=hke7Fk3k_pgAX-YvyAC&_nc_ht=scontent-ort2-1.xx&oh=1bc693cfb78398735d22f0488b80daf9&oe=5E9FE99F",
    facebook: "villagecornerdeli",
    name: "The Village Corner Deli",
    url: "http://villagecornerdeli.net/",
    phone: 5633232333,
    description: "Please support your local deli and swing by or order online.",
    instagram: '',
  }
  ,
  {
    type: "coffee",
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/28619590_1528951270557402_7921214127386213456_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=x26E-A9PX94AX8g8YuN&_nc_ht=scontent-ort2-1.xx&oh=3baea93e36ae0972b37ec84d86e0aad6&oe=5EA12B13",
    facebook: "milltowncoffeeqc",
    instagram: "milltowncoffee",
    name: "Milltown Coffee",
    url: "http://www.milltowncoffeeqc.com/",
    expectedOpenDate: null,
    phone: 3095176444,
    description: "Milltown is completely empty due to COVID-19.  We will re-evaluate next week and consider doing curbside if all goes well!!",
  },
  {
    type: "restaurant",
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/13178800_238042573230689_4110416957861497745_n.jpg?_nc_cat=107&_nc_sid=e3f864&_nc_ohc=bqRyldOb76cAX8pVB5Q&_nc_ht=scontent-ort2-1.xx&oh=8f3d5dfb5d995f83e0cc04d14ab52e2c&oe=5E9FC38F",
    facebook: "Sakura-express-238038939897719",
    name: "Sakura express",
    url: "http://sakuraexpressqc.com/",
    phone: 5638885578,
    description: "We are still operating within our limits, to-go and deliveries are still available by phone  call. We also on My town to go and Grubhub.",
    instagram: '',
  },

  {
    type: "retail",
    giftCardUrl: "https://www.saintsboutique.com/collections/gifts-fun-things/products/gift-card?variant=14660883710004",
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/54225109_428336857936891_5161752843782193152_o.png?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=Z1HfxiEPPwkAX8qOwtY&_nc_ht=scontent-ort2-1.xx&oh=506ff8b8cb7e2e64c18de42209c320d5&oe=5EA2338C",
    facebook: "SaintsBoutiqueDport",
    expectedOpenDate: null,
    name: "Saints Boutique",
    url: "http://saintsboutique.com/",
    phone: 5639494189,
    description: "Locally owned boutique serving local quad citians!"
  },
];
