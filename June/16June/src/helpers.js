 // Helpers are objects that contain rendering primitives (like rectangles, ellipses, etc), for plotting nodes and edges. Helpers also contain implementations of the contains method, a method returning a boolean indicating whether the mouse position is over the rendered shape.
const display = (str) => {
    console.log(str);
  };
  
  const add = (x, y) => {
    return `the sum is ${x + y}`;
  };
  
  export { display, add };