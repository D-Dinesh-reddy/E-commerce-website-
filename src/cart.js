import React from 'react';
import './cart.css'; // Importing CSS styles for the component
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation
import { AiOutlineClose } from 'react-icons/ai'; // Importing close icon from react-icons library

// Cart component functional definition
const Cart = ({ cart, setCart }) => {

  // Function to increase quantity of a product in the cart
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(cart.map((curElm) => {
      return curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm;
    }));
  };

  // Function to decrease quantity of a product in the cart
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(cart.map((curElm) => {
      return curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm;
    }));
  };

  // Function to remove a product from the cart
  const removeproduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(cart.filter((curElm) => {
        return curElm.id !== product.id;
      }));
    }
  };

  // Calculate total price of all products in the cart
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  // Cart component JSX
  return (
    <>
      <div className='cart'>
        <h3>#cart</h3>
        {/* Display message if cart is empty */}
        {cart.length === 0 && 
          <>
            <div className='empty_cart'>
              <h2>Your Shopping cart is empty</h2>
              <Link to='/shop'><button>Shop Now</button></Link>
            </div>
          </>
        }
        <div className='container'>
          {/* Render each item in the cart */}
          {cart.map((curElm) => 
            {
              return(
                <>
                  <div className='box'>
                    <div className='img_box'>
                      <img src={curElm.image} alt=''></img>
                    </div>
                    <div className='detail'>
                      <div className='info'>
                        <h4>{curElm.cat}</h4>
                        <h3>{curElm.Name}</h3>
                        <p>Price:₹{curElm.price}</p>
                        <p>Total:₹{curElm.price * curElm.qty}</p>
                      </div>
                      <div className='quantity'>
                        {/* Buttons to increase and decrease quantity */}
                        <button onClick={() => incqty(curElm)}>+</button>
                        <input type='number' value={curElm.qty}></input>
                        <button onClick={() => decqty(curElm)}>-</button>
                      </div>
                      {/* Icon to remove the product from the cart */}
                      <div className='icon'>
                        <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className='bottom'>
          {/* Display total price and checkout button */}
          {cart.length > 0 && 
            <>
              <div className='Total'>
                <h4>Sub Total: ₹{total}</h4>
              </div>
              <button>checkout</button>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Cart; // Exporting Cart component
