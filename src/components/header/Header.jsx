import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function Header() {

  const {cart} = useContext(CartContext);
  const [sum , setSum] = useState(0)


useEffect(() => {
  cart?.forEach((el) => setSum((prev) => prev + el.basePrice))
} , [cart])
  return (

    
  
      <header className='py-4 px-3 z-999 flex shadow-md fixed w-full top-0 left-0 bg-white'>
        <div className="flex items-center justify-between  gap-2 container mx-auto px-5">
        <Link to={"/"} className="flex items-center gap-2 md:gap-3">
          <img className="w-10 h-10 " src="/imgs/logo.png" alt="Kuda Pizza Logo" />
          <span className="text-xl md:text-2xl font-bold text-[#FF7010]">Kuda Pizza</span>
        </Link>
         



        <ul className='hidden lg:flex   justify-between gap-[20px]'>

          <li>
            <NavLink className={"text-5  text-[orange] font-bold "} to={"aksiya"}>Акции</NavLink>
          </li>

            <li>
            <NavLink className={"text-5  text-[orange] font-bold "} to={"pizza"}>Пицца</NavLink>
            </li>

            <li>
              <NavLink className={"text-5  text-[orange] font-bold "} to={"sushi"} >Суши</NavLink>
            </li>


            <li>
            <NavLink className={"text-5  text-[orange] font-bold "} to={"napitka"}>Напитки</NavLink>
            </li>

            <li>
              <NavLink className={"text-5  text-[orange] font-bold "} to={"zakuski"}>Закуски</NavLink>
            </li>


            <li>
              <NavLink className={"text-5  text-[orange] font-bold "} to={"desert"}>Десерты</NavLink>
            </li>

            <li>
              <NavLink className={"text-5  text-[orange] font-bold "} to={"souse"}>Соусы
              </NavLink>
            </li>


            
          </ul>

          

        <button className="bg-[#FF7010] cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg shadow-md hover:bg-[#ff8c42] transition-colors duration-200">
          <img className="w-6 h-6" src="/imgs/savacha.png" alt="Savatcha" />
          <span className="text-white font-semibold text-sm md:text-base">{Math.ceil(sum)} $</span>
        </button>

        <button className='flex lg:hidden cursor-pointer max-w-[28px] w-full outline-none '>
          <img className='w-full' src="/imgs/menu.png" alt="" />
        </button>

        </div>


      </header>
    
  )
}

export default Header