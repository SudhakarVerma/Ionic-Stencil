import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
})
export class MyComponent {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return (
      <p>
        Hey, This is {this.name}
      </p>
    );
  }
}