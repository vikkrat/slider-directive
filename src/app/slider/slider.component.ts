import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: [ './slider.component.css']
})
export class SliderComponent {
  images = [
    {
      url: 'https://images.unsplash.com/photo-1580490390526-9fe5df5e68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`
    },
    {
      url: 'https://images.unsplash.com/photo-1485978542216-b956ac966ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`
    },
    {
      url: 'https://images.unsplash.com/photo-1580473490637-86ca7968b84f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.`
    }
  ];
}
