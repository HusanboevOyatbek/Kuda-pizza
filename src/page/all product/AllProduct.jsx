import { data, useParams } from 'react-router-dom'
import MyImage from '../../components/lazy-load/LazyLoadingImag';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AllProduct() {
    const [products , setProducts] = useState([]);
    const {id} = useParams()

    async function getProdacts() {
        try {
            let res = await axios.get(`https://693d1ae6f55f1be79301e90f.mockapi.io/categories/${id}/products`)
            setProducts(res.data)
            console.log(res.data);
            
        } catch (err) {
            console.log(err);

        }
    }


    useEffect(() => {
       getProdacts()
    }, [id])

    console.log(products);
    
  return (
    <div>AllProduct

        <div className="grid grid-cols-4 gap-5 px-[10px]">
            {
                products.map((el) => {
                    <div
                        className="w-full max-w-[350px] h-[482px] bg-white rounded-3xl p-6 flex flex-col items-center justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer mx-auto"
                    >
                        <div className="max-w-[450px] w-full h-[300px] mb-4
                flex items-center justify-center
                 rounded-2xl overflow-hidden">
                            <MyImage
                                alt={el.title}
                                src={el.image}
                                className="w-full h-full object-contain"
                            />

                        </div>
                        <h4 className="text-center text-lg md:text-xl font-semibold text-gray-800 mb-2">
                            {el.title}
                        </h4>


                        <span className="text-base md:text-lg font-bold text-orange-500">
                            {el.basePrice} $
                        </span>


                    </div>
                })
            }
        </div>
    </div>
  )
}

export default AllProduct