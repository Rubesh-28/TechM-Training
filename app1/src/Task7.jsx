import React from 'react';

const List = ({ items = [] }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

function TodoList() {
    const tasks = ['Complete Report'];
    return (
        <>
        <h4>TodoList</h4>
            {tasks.map((task, index) => (
                <p key={index}>
                    {task} <input type="checkbox" />
                </p>
            ))}
        </>
    );
}

function ProductList(){
   const products=[{
      name:'Phone',price:150
   },{name:'laptop',price:800},
{name:'Ejector',price:5}];
   return (
      <>
      <h4>Filtered Products</h4>
          {products.filter((product)=>product.price>10).map((product, index) => (
              <p key={index}>
                  {product.name} ${product.price}
              </p>
          ))}
      </>
  );
}
function UserList(){
   const list=[{name:'Rubesh',email:'rubeshkk28@gmail.com'},{name:'kavin',email:'kavinsagar2004@gmail.com'}]
   return (
      <>
      <h4>UserList</h4>
      {list.map((product, index) => (
              <p key={index}>
                  Name:{product.name}  Email:{product.email}
              </p>
          ))}
      </>
   )
} 

function ShoppingCart(){
   const products=[{
      name:'Phone',price:150
   },{name:'laptop',price:800},
{name:'Ejector',price:5}];
   return (
      <>
      <h4>Shopping Cart</h4>
          {products.map((product, index) => (
              <p key={index}>
                  {product.name} ${product.price}
              </p>
          ))}
      </>)
}

export { List, TodoList ,ProductList,UserList,ShoppingCart };
