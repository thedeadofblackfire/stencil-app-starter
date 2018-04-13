import { Component, Element } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {
  
  // uri :{component: 
  map_routing = {
	  'task-detail': {component:'task-detail', memory: true, params: {id: 1}},
	  'page-inbox': {component:'page-inbox', memory: false},
	  'app-profile': 'app-profile'
	};

  
  @Element() el: HTMLElement;
  
  render() {
    return (
      <div>
        <header>
           <stencil-route-link url='/'><h1>Stencil App Starter</h1></stencil-route-link>
        </header>
		
        <main>
		  <page-wrapper/>
		
          <stencil-router>

			<stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>
			
			 <stencil-route
              url="/docs/:pageName"
              routeRender={(props: { [key: string]: any }) => {
                const map = {
                  'introduction': 'introduction/why-stencil.html',
                  'getting-started': 'introduction/getting-started.html',
                  'my-first-component': 'introduction/my-first-component.html'
                };
                return (
                  <document-component
                    pages={[map[props.match.params.pageName]]} pageid={props.match.params.pageName}
                  />
                );
              }}
            />
			
			 <stencil-route
              url="/page/:pageName"
              routeRender={(props: { [key: string]: any }) => {
				  console.log(props);
				  /*
                const map = {
                  'task-detail': 'task-detail',
				  'page-inbox': 'page-inbox',
                  'app-profile': 'app-profile'
                };
				*/
				let wrapperPage = document.querySelector('page-wrapper');
				//wrapperPage.addDynamicTag([map[props.match.params.pageName]]);
				let rou = this.map_routing[props.match.params.pageName];
				wrapperPage.addDynamicTag(rou['component'], rou.params, rou.memory);
				//wrapperPage.addDynamicTag([this.map_routing[props.match.params.pageName]]);
                return true;
              }}
            />
			
          </stencil-router>
        </main>
      </div>
    );
  }
}
