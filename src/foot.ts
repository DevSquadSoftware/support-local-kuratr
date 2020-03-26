export class Foot {
  location: Location;
  title: string;
  encodeURI: (uri: string) => string;
  href: string;
  constructor() {
    this.location = window.location;
    this.href = window.location.href.split('?')[0]
    this.title = document.title;
    this.encodeURI = encodeURI;

  }
}
