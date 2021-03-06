import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {
  
  @Prop() match: MatchResults;

  constructor() {
    document.title = `Resources`;
  }
  
   /**
   * The component will load but has not rendered yet.
   *
   * This is a good place to make any last minute updates before rendering.
   *
   * Will only be called once
   */
  componentWillLoad() {
    console.log('The component is about to be rendered');
  }

  /**
   * The component is loaded and has rendered.
   *
   * Updating data in this event may cause the component to re-render.
   *
   * Will only be called once
   */
  componentDidLoad() {
    console.log('The component has been rendered');
  }

  /**
   * The component did unload and the element will be destroyed.
   */
  componentDidUnload() {
    console.log('The view has been removed from the DOM');
  }
  
  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class='app-profile'>		
          <p>
            Hello! My name is 2 {this.match.params.name}.
            My name was passed in through a route param!
          </p>
        </div>
      );
    }
  }
}
