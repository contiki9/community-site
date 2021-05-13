import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-case" />
          <ion-route url="/case/" component="app-case" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
