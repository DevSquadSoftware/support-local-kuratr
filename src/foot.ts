export class Foot {
  location: Location;
  title: string;
  encodeURI: (uri: string) => string;
  constructor() {
    this.location = window.location;
    this.title = document.title;
    this.encodeURI = encodeURI;

  }
}
