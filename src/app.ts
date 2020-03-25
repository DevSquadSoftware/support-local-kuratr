/* eslint-disable no-undef */
import { Company } from './models/company';
export class App {

  public salonChecked: boolean = true;
  public restaurantChecked: boolean = true;
  public coffeeChecked: boolean = true;
  public retailChecked: boolean = true;
  public searchText: string = '';

  private readonly companies: Company[] = [
    {
      type: 'salon',
      giftCardUrl: "https://www.vagaro.com/us04/greyandcosalon",
      imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/p960x960/73051041_2539535322804406_497752483012018176_o.png?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=oIpYqX3aPYMAX8UHqs_&_nc_ht=scontent-ort2-1.xx&oh=6dad544039946dae68052a1f9da028e0&oe=5E9F2724",
      facebook: "greyandcosalon",
      expectedOpenDate: null,
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
      phone: 5633922020,
      description: "Please support your local salon and book an appointment or buy a gift card."
    },

    {
      type: "retail",
      giftCardUrl: "https://www.redsthreadsqc.com/shop/gift-card",
      imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/58379155_267860164094883_4814993835891359744_n.png?_nc_cat=110&_nc_sid=85a577&_nc_ohc=XIDwiq2iPJkAX-I3RoK&_nc_ht=scontent-ort2-1.xx&oh=51314cde8182a516ef3000db7d0e30e5&oe=5E9E69FA",
      facebook: "redsthreadsqc",
      expectedOpenDate: new Date('4/1/2019'),
      name: "Red's Threads Athleisure Boutique",
      url: "https://www.redsthreadsqc.com/",
      phone: 5633922020,
      description: "Please support your local salon and book an appointment or buy a gift card."
    },
    {
      type: "restaurant",
      giftCardUrl: "https://onelink.quickgifts.com/merchant/the-foundry-food-tap/",
      imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/p960x960/52120257_388463081965515_7106173169626513408_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=zTEvosvDV2wAX9d11QJ&_nc_ht=scontent-ort2-1.xx&_nc_tp=6&oh=aa055bcf06eb7243e0e96d2edd16ae88&oe=5E9F819C",
      facebook: "FoundryFoodTap",
      name: "Foundry Food + Tap",
      url: "https://www.foundryfoodtap.com",
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
      description: "Please support your local salon and book an appointment or buy a gift card."
    },
    {
      type: "restaurant",
      imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/27657033_184666782289487_6734517347018094530_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=Aq5LoVdTaCMAX_7f7ZU&_nc_ht=scontent-ort2-1.xx&oh=7763b5c219839fb3dc1883d1bb9c3f89&oe=5E9E871E",
      facebook: "villagecornerdeli",
      name: "Panda Garden",
      url: "http://www.pandagardenia.com",
      expectedOpenDate: null,
      phone: 5634493888,
      description: "Please support your local salon and book an appointment or buy a gift card.",
      instagram: '',
    }
  ];

  public location: Location;
  public encodeURI: (uri: string) => string;

  public constructor() {
    this.location = window?.location;
    this.encodeURI = encodeURI;
  }

  private getClosedText(date: Date | null) {
    return date === null ? `Closed` : `Closed until ${date.getMonth() + 1}/${date.getDate()}`;
  }

  public get filteredCompanies() {
    return this.companies.filter(z =>
      (this.searchText === '' || z.description?.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) || z.name?.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())) &&
      ((this.salonChecked && z.type === "salon") ||
      (this.restaurantChecked && z.type === "restaurant") ||
      (this.retailChecked && z.type === "retail") ||
      (this.coffeeChecked && z.type === "coffee")));
  }

}
