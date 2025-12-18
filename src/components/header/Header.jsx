import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { LaguageContext } from '../../context/ChangLAnguaje';

function Header() {

  const { cart } = useContext(CartContext);
  const [sum, setSum] = useState(0)


  const { lang, setLang, t } = useContext(LaguageContext);
  useEffect(() => {
    setSum(0);
    cart?.forEach((el) => setSum((prev) => prev + el.basePrice * el.qty))
  }, [cart])

  console.log(LaguageContext);

  return (



    <header className='py-4 px-3 z-999 flex shadow-md fixed w-full top-0 left-0 bg-white'>
      <div className="flex items-center justify-between  gap-2 container mx-auto px-5">
        <Link to={"/"} className="flex items-center gap-2 md:gap-3">
          <img className="w-10 h-10 " src="/imgs/logo.png" alt="Kuda Pizza Logo" />
          <span className="text-xl md:text-2xl font-bold text-[#FF7010]">Kuda Pizza</span>
        </Link>




        <ul className='hidden lg:flex   justify-between gap-[20px]'>

          <li>
            <NavLink className={"text-5  text-[orange] font-bold "} to={"aksiya"}>{t.aksiya}</NavLink>
          </li>

          <li>
            <NavLink className={"text-5  text-[orange] font-bold "} to={"pizza"}>{t.pizza}</NavLink>
          </li>

          <li>
            <NavLink className={"text-5  text-[orange] font-bold "} to={"sushi"} >{t.sushi}</NavLink>
          </li>


          <li>
            <NavLink className={"text-5  text-[orange] font-bold "} to={"napitka"}>{t.water}</NavLink>
          </li>

          <li>
            <NavLink className={"text-5  text-[orange] font-bold "} to={"zakuski"}>{t.zakusku}</NavLink>
          </li>


          <li>
            <NavLink className={"text-5  text-[orange] font-bold "} to={"desert"}>{t.deserte}</NavLink>
          </li>

          <li>
            <NavLink className={"text-5  text-[orange] font-bold "} to={"souse"}>{t.sous}
            </NavLink>
          </li>



        </ul>



        <button className="bg-[#FF7010] cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg shadow-md hover:bg-[#ff8c42] transition-colors duration-200">
          <img className="w-6 h-6" src="/imgs/savacha.png" alt="Savatcha" />
          <span className="text-white font-semibold text-sm md:text-base">{Math.ceil(sum)} $</span>
        </button>

        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className=" px-3  py-2 bg-white border border-gray-300 rounded-md
               text-sm font-medium 
                outline-none   max-w-[66px]
                cursor-pointer"
        >
          <option value="uz">Uz</option>
          <option value="ru">Ru</option>
          <option value="en">En</option>
        </select>

      </div>


    </header>

  )
}

export default Header