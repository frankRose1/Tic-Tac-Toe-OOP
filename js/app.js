const module = ( function () {
    const container = {
    foo: 88,
    bar: true
  };

    container.testing = () => {
    console.log("testing");
  };

   container.hello = () => {
     console.log('hello');
   };

   return container;
}() );
