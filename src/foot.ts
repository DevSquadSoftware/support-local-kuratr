import { IViewModel } from 'aurelia';
export class Foot {
  location: Location;
  title: string;
  encodeURI: (uri: string) => string;
  href: string;
  showButton: boolean;
  constructor() {
    this.location = window.location;
    this.href = window.location.href.split('?')[0]
    this.title = document.title;
    this.encodeURI = encodeURI;

  }

  onScroll = (event: Event) => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  beforeAttach() {
    window.onscroll = this.onScroll;
  }

  beforeDetach() {
    window.onscroll = void 0;
  }

  scrollTop() {
    document.getElementById('header').scrollIntoView({
      behavior: "smooth",
    });

  }
}
