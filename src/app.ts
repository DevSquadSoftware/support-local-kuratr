import { IViewModel } from 'aurelia';
import { Company } from './models/company';
import { companies } from './companies';



export class App implements IViewModel {

  public state = {
    salonChecked: true,
    restaurantChecked: true,
    coffeeChecked: true,
    retailChecked: true,
    isOpenOnly: false,
    searchText: ''
  }

  public location: Location;
  public encodeURI: (uri: string) => string;
  public showButton: boolean;

  public constructor() {
    this.location = window?.location;
    this.encodeURI = encodeURI;
  }
  beforeBind() {
    const result = JSON.parse(localStorage.getItem('state'))
    if (result) {
      Object.assign(this.state, JSON.parse(localStorage.getItem('state')));
    }
  }

  afterAttach() {
    navigator.geolocation.getCurrentPosition(this.getPosition);
  }

  getPosition(getPosition: Position) {
    console.log(getPosition);
  }

  private getClosedText(date: Date | null) {
    return date === null ? `Closed` : `Closed until ${date.getMonth() + 1}/${date.getDate()}`;
  }

  public get filteredCompanies() {
    localStorage.setItem('state', JSON.stringify(this.state));

    return companies.filter(z =>
      (!this.state.isOpenOnly || (this.state.isOpenOnly && z.expectedOpenDate === undefined)) &&
      (this.state.searchText === '' || z.description?.toLocaleLowerCase().includes(this.state.searchText.toLocaleLowerCase()) || z.name?.toLocaleLowerCase().includes(this.state.searchText.toLocaleLowerCase())) &&
      ((this.state.salonChecked && z.type === "salon") ||
        (this.state.restaurantChecked && z.type === "restaurant") ||
        (this.state.retailChecked && z.type === "retail") ||
        (this.state.coffeeChecked && z.type === "coffee")));
  }

}
