// Importing necessary modules
import React, { useState } from 'react'
import './shop.css'
import { AiFillHeart, AiFillEye, AiOutlineClose} from 'react-icons/ai';

// Defining the Shop component
const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    // Toggle Product Detail
    const [showDetail, setShowDetail] = useState(false)
    // Detail Page Data
    const [detail, setDetail] = useState([])
    // Function to show product detail
    const detailpage = (product) => 
    {
        // Extracting product detail from the array and setting it in the state
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        setDetail(productdetail)
        // Showing the detail box
        setShowDetail(true)
    }
    // Function to close product detail
    const closedetail = () => 
    {
        setShowDetail(false)
    }
  return (
    <>
    {
        // Rendering product detail if showDetail state is true
        showDetail ? 
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.image} alt=''></img>
                </div>
                <div className='info'>
                    <h4># {detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>Add to cart for this amazing product</p>
                    <h3>₹
                        {detail.price}</h3>
                    <button onClick={() => addtocart (detail)}>Add To Cart</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
    {/* Shop section */}
    <div className='shop'>
        <h2># shop</h2>
        <p>Home . shop</p>
        <div className='container'>
            {/* Left box containing category and banner */}
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h3>all categories</h3>
                    </div>
                    <div className='box'>
                        <ul>
                            {/* Filtering categories */}
                            <li onClick={() => allcatefilter ()}># All</li>
                            <li onClick={() => Filter ("tv")}># tv</li>
                            <li onClick={() => Filter ("laptop")}># laptop</li>
                            <li onClick={() => Filter ("watch")}># watch</li>
                            <li onClick={() => Filter ("speaker")}># speaker</li>
                            <li onClick={() => Filter ("electronics")}># electronics</li>
                            <li onClick={() => Filter ("headphone")}># headphone</li>
                            <li onClick={() => Filter ("phone")}># phone</li>
                        </ul>
                    </div>
                </div>
                {/* Banner */}
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_left.avif' alt=''></img>
                    </div>
                </div>
            </div>
            {/* Right box containing banner and products */}
            <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_top.webp' alt=''></img>
                    </div>
                </div>
                {/* Product box */}
                <div className='product_box'>
                    <h2>Shop Product</h2>
                    <div className='product_container'>
                        {
                            // Mapping through the shop array to render products
                            shop.map((curElm) => 
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.image} alt=''></img>
                                            <div className='icon'>
                                               {/* Icons for favorite and detail */}
                                               <li><AiFillHeart /></li> 
                                               <li onClick={() => detailpage (curElm)}><AiFillEye /></li> 
                                            </div>
                                        </div>
                                        {/* Product detail */}
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>₹ {curElm.price}</p>
                                            <button onClick={() => addtocart (curElm)}>Add To Cart</button>
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
    </div>
    </>
  )
}

export default Shop
