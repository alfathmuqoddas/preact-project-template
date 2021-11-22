# Preact and React no npm template

## Preact plain html template
Don't need any bundle like webpack, just edit and view in browser. 
Support module import es6 but need to use http-server (or any server tools) since you can't import module in local because of cors.  
Included with hooks, just import it from standalone.mjs.  
using htm instead of jsx, because jsx need build tools like babel.

## React plain html template
Don't need any bundle like webpack, just edit and view in browser. 
Doesn't support module import es6 because it need bundle like webpack.  
it's okay to not using http-server (or any server tools) since it doesn't use es6 module.  
