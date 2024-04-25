import React, { useEffect, useState } from 'react'
import './home.css'
import Homeproduct from './home_product'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";
const Home = ({addtocart}) => {
  // Product category
  const [newProduct, setNewProduct] =  useState([])
  const [featuredProduct, setFeaturdProduct] =  useState([])
  const [topProduct, setTopProduct] =  useState([])
  //Tranding Product
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  // Filter of tranding product
  const filtercate = (x) => 
  {
    const filterproduct = Homeproduct.filter((curElm) => 
    {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  //All Trending Product
  const allTrendingProduct = () =>
  {
    setTrendingProduct(Homeproduct)
  }

  //Product Type
  useEffect(() => 
  {
    productcategory()
  })
  const productcategory = () => 
  {
    // New Product
    const newcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'new'
    })
    setNewProduct(newcategory)

    // Featured Product
    const featuredcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'featured'
    })
    setFeaturdProduct(featuredcategory)

    // Top Product
    const topcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }
  return (
    <>
    <div className='home'>
        <div className='top_banner'>
            <div className='contant'>
                
            </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => allTrendingProduct ()}>trending product</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filtercate ('new')}>New</h3>
                  <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                  <h3 onClick={() => filtercate ('top')}>top selling</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((curElm) => 
                    {
                      return(
                        <>
                        <div className='box'>
                          <div className='img_box'>
                            <img src={curElm.image} alt=''></img>
                          
                          </div>
                          <div className='info'>
                            <h3>{curElm.Name}</h3>
                            <p>₹{curElm.price}</p>
                            <button className='btn' onClick={() => addtocart (curElm)}>Add to cart</button>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='right_box'>
              <div className='right_container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>our testmonial</h3>
                  </div>
                  <div className='detail'>
                    <div className='img_box'>
                      
                    </div>
                    <div className='info'>
                      <h3>Dinesh</h3>
                      <h3>vardan</h3>
                      <h3>faheem</h3>
                      <h4>web designer</h4>
                    </div>
                  </div>
                </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>newsletter</h3>
                  </div>
                  <div className='form'>
                    <p>join our malling list</p>
                    <input type='email' placeholder='E-mail' autoComplete='off'></input>
                    <button>subscribe</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
               
              </div>
              <div className='box'>
                <img src='image/Multi-Banner-2.avif' alt='banner'></img>
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='image/Multi-Banner-3.webp' alt=''></img>
                <img src='image/Multi-Banner-4.avif' alt=''></img>
              </div>
              <div className='bottom'>
               
              </div>
            </div>
          </div>
        </div>
        <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>New Product</h2>
              </div>
              {
                newProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>₹ {curElm.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
                featuredProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>₹ {curElm.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Top Product</h2>
              </div>
              {
                topProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>₹ {curElm.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home