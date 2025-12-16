import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';

function HomePage() {

  const [categoris, setCategoris] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [selectCategoryId, setSelectCategoryId] = useState(null)
  const { cart, addToCart, increase, decrease } = useContext(CartContext)

  async function getCategoris() {
    try {
      let res = await axios.get("https://693d1ae6f55f1be79301e90f.mockapi.io/categories")
      setCategoris(res.data)
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }




  useEffect(() => {
    getCategoris()
  }, [])

  async function getProducts() {
    try {
      let res = await axios.get("https://693d1ae6f55f1be79301e90f.mockapi.io/products")
      setProducts(res.data)
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])



  return (
    <section>
      <div className="container cursor-pointer mx-auto px-[20px]">
        <div className="flex gap-[50px] overflow-x-scroll justify-center scrollbar-hide justify-around">
          {categoris.map((el) => (
            <div
              onClick={() => setSelectCategoryId(el.id)}
              className="w-[120px] h-[140px] bg-amber-100 rounded-xl p-5 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img className="w-12 h-12 mb-2 object-contain" src={el.icon} alt={el.title} />
              <h4 className="text-center text-[16px] md:text-[18px] font-semibold mt-1 text-gray-800">
                {el.title}
              </h4>
            </div>
          ))}
        </div>



        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-5 px-2 mt-5">

          {
            selectCategoryId ? products.filter((p) => p.categoryId === selectCategoryId).map((prod) => (
              <div
                className="w-full max-w-[350px] h-[482px] bg-white rounded-3xl p-6 flex flex-col items-center justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer mx-auto"
              >
                <div className="w-[300px] flex justify-center items-center h-[300px] mb-4 object-cover">
                  <img
                    className="w-full  object-contain rounded-2xl"
                    src={prod.image}
                    alt={prod.title}
                  />
                </div>
                <h4 className="text-center text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {prod.title}
                </h4>


                <span className="text-base md:text-lg font-bold text-orange-500">
                  {prod.basePrice} $
                </span>


              </div>
            )) : products.filter((el) => el.badge === "NEW").map((el1) => (
              <div
                className="relative  max-w-[350px] w-full h-[482px] bg-white rounded-3xl p-6 flex flex-col  justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer mx-auto"
              >
                <span className='absolute
               bg-amber-100
                p-[10px]
                rounded
                 top-[10px]
                left-[10px]'>
                  {
                    el1.badge
                  }
                </span>
                <div className="max-w-[300px] w-full flex justify-center items-center h-[300px] mb-4 object-cover">
                  <img
                    className="max-w-[300px]  w-full  "
                    src={el1.image}
                    alt={el1.title}
                  />
                </div>
                <h4 className="text-center text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {el1.title}
                </h4>


                <div className="mt-2 min-h-[40px]">
                  {el1.extras.length > 0 && (
                    <p className="
      text-sm text-gray-700
      overflow-hidden
      text-ellipsis
      line-clamp-2
    ">
                      {el1.extras.map((item) => item.title).join(", ")}
                    </p>
                  )}
                </div>


                <div className="mt-[10px] flex justify-between px-[10px] items-center">

                  {
                    cart.find((item) => item.id === el1.id) ? <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrease(el1)}
                        className="w-8 h-8 flex items-center justify-center
      bg-gray-200 text-gray-800 rounded-md
      hover:bg-gray-300 transition"
                      >
                        −
                      </button>

                      <span className="min-w-[20px] text-[#e6600d] text-center font-semibold">
                        {cart.find((el) => el.id === el1.id).qty}
                      </span>

                      <button
                        onClick={() => increase(el1)}
                        className="w-8 h-8 flex items-center justify-center
      bg-[#FF7010] text-white rounded-md
      hover:bg-[#e6600d] transition"
                      >
                        +
                      </button>
                    </div>
                      : <button
                        onClick={() => addToCart(el1)}
                        className="bg-[#FF7010] text-white rounded-[6px] p-1.5 px-[10px]
    hover:bg-[#e6600d] transition-colors duration-200">
                        Выбрать
                      </button>
                  }


                  <span className="text-base md:text-lg font-bold text-orange-500">
                    {el1.basePrice} $
                  </span>
                </div>


              </div>
            ))
          }


        </div>





        {
          categoris.map((el) => (
            <div className="">
              <h4 className=" text-[24px] md:text-[40px] font-bold px-[15px] mt-1 text-[#191919]">
                {
                  products.find((pro) => pro.categoryId === el.id) ? el.title : " "
                }
              </h4>

              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-5 px-2 mt-5">

                {products.filter((el1) => el1.categoryId === el.id).map((el3) => (
                  <div
                    className="w-full max-w-[350px] h-[482px] bg-white rounded-3xl p-6 flex flex-col  shadow-lg hover:shadow-2xl transition-shadow duration-300  mx-auto"
                  >
                    <div className="max-w-[300px] w-full flex justify-center items-center h-[300px] mb-4 object-cover">
                      <img
                        className="w-full  object-contain rounded-2xl"
                        src={el3.image}
                        alt={el3.title}
                      />
                    </div>
                    <h4 className="text-center text-lg md:text-xl font-semibold text-gray-800 mb-2">
                      {el3.title}
                    </h4>


                    <div className="mt-2 min-h-[40px]">
                      {el3.extras.length > 0 && (
                        <p className="
      text-sm text-gray-700
      overflow-hidden
      text-ellipsis
      line-clamp-2
    ">
                          {el3.extras.map((item) => item.title).join(", ")}
                        </p>
                      )}
                    </div>





                    <div className="mt-[10px] flex justify-between px-[10px] items-center">
                      {
                        cart.find((item) => item.id === el3.id) ? <div className="flex items-center gap-2">
                          <button
                            onClick={() => decrease(el3)}
                            className="w-8 h-8 flex items-center justify-center
      bg-gray-200 text-gray-800 rounded-md
      hover:bg-gray-300 transition"
                          >
                            −
                          </button>

                          <span className="min-w-[20px] text-center font-semibold">
                            {cart.find((el) => el.id === el3.id).qty}
                          </span>

                          <button
                            onClick={() => increase(el3)}
                            className="w-8 h-8 flex items-center justify-center
      bg-[#FF7010] text-white rounded-md
      hover:bg-[#e6600d] transition"
                          >
                            +
                          </button>
                        </div>
                          : <button
                            onClick={() => addToCart(el3)}
                            className="bg-[#FF7010] text-white rounded-[6px] p-1.5 px-[10px]
    hover:bg-[#e6600d] transition-colors duration-200">
                            Выбрать
                          </button>
                      }

                      <span className="text-base md:text-lg font-bold text-orange-500">
                        {el3.basePrice} $
                      </span>
                    </div>



                  </div>
                ))}

              </div>
            </div>



          ))
        }



      </div>





    </section>
  )
}

export default HomePage