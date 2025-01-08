import React, { useState } from "react";
import toast from "react-hot-toast";
import usePublicAxios from "../../Hooks/usePublicAxios";
import useCard from "../../Hooks/useCard";

const CartData = ({ item, index }) => {
    const [cart,refetch]=useCard()
    const axiosPublic=usePublicAxios()
    const [quantity, setQuantity] = useState(item.quantity);
    
      const handleIncrement = async (id) => {
        console.log(id);
        
        if (quantity === 5) {
          return toast
          .error("sorry maximum 5product add to cart");
        }
        
        
        setQuantity(quantity + 1);
        const {data}=await axiosPublic.patch(`quantity-update/${id}`,{quantity:quantity+1})
        refetch()
        
        
      };

      
      const handleDecrement = async(id) => {
        setQuantity(quantity - 1);
        const {data}=await axiosPublic.patch(`quantity-update/${id}`,{quantity:quantity-1})
        refetch()
      };
  return (
    
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item?.Equipment?.image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{item?.Equipment?.itemName}</div>
              <div className="text-sm opacity-50">
                {item?.Equipment?.categoryName}
              </div>
            </div>
          </div>
        </td>
        <td>{item?.Equipment?.price}</td>
        <td>
          <div className="flex items-center space-x-4">
            <button
              onClick={()=>handleDecrement(item._id)}
              className="px-3 py-1 bg-gray-300 rounded text-gray-800"
              disabled={quantity === 1}
            >
              -
            </button>
            <p className="font-bold">{quantity}</p>
            <button
              disabled={quantity === 6}
              onClick={()=>handleIncrement(item._id)}
              className="px-3 py-1 bg-gray-300 rounded text-gray-800"
            >
              +
            </button>
          </div>
        </td>
        <th>{item?.Equipment?.price * quantity}</th>
        <th>
          <button className="hover:text-red-500">Delete</button>
        </th>
      </tr>
   
  );
};

export default CartData;
