# Hapi React Helper
### Plugin to easily add react to your hapi app
Ported over from [Express react helper](https://github.com/tswayne/express-react-helper#express-react-helper) - Hapi React Helper sets up [React Helper](https://github.com/tswayne/react-helper#react-helper) and adds some convenience methods to make it even easier to add react to your app and bypass all of the setup.

## How to use it
`npm install -g react-helper`

`npm install hapi-react-helper --save`

`react-helper init -w`

**Wherever your plugins are added**

`server.register(require('./hapi-react-helper'), (err) => {`

**In the Controller/handler**

_request.server.app.renderComponent will make the rendered component accessible in the view by the component's name_ 
```javascript
  function(request, reply) {
    const SignUp = request.server.app.renderComponent('SignUp')
    reply.view('view-to-render', { SignUp });    
  }
```

**In the View**: _example using handlebars templating engine_
      
```html
   <h1>This view has react in it</h1>
   {{{SignUp}}}
```

**Javascript entry point**

_This is compiled by webpack and what tells the browser to render the react component you've specified in your controller/view.  Read more about setting up webpack [here](https://github.com/tswayne/react-helper#setup)_ 
 
 ```javascript
  const reactHelper = require('reactHelper');
  const SomeComponent = require('./path/to/a/component');
    
  reactHelper.register({SignUp});
 ```

## Features
* Hapi React Helper has a few added features, but it can also do anything else React Helper can do.  
  * You can check out React Helper's feature list [here](https://github.com/tswayne/react-helper/blob/master/README.md#features)
* Context - Add data to context to be available in every react component rendered with ReactHelper
  * This can be a helpful way to pass server side configs to your react components, login state, or any other props multiple components will need that you don't feel like added to every controller/handler's renderComponent. 
  
  
  _You can add to context like this:_
  
  **Wherever your middleware is setup**
  
  ```javascript
    server.app.addToReactContext({baseUrl: 'www.myapp.com'});
  ```

  _Or by adding to server.app.reactHelperContext:_
 
  **Anywhere you have access to server**
  
  ```javascript
    server.app.reactHelperContext.userName = user.userName;
  ```

 
## Contributing
Feel free to open issues or pull requests!