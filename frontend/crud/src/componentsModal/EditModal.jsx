import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditModal = ({ isVisable, onClose, recivingDataValue }) => {
    console.log('the value is', recivingDataValue)
    const [productInfo, setProductInfo] = useState({
        ProductName: "",
        Color: "",
        Category: "",
        Price: "",
    });

    const handleChange = (event) => {
        setProductInfo({ ...productInfo, [event.target.name]: event.target.value });
    };

    // const [getVal, setGetVal] = useState(recivingDataValue);
    const [getFinalData, setFinalData] = useState();
    const getValue = async () => {
        console.log(`the value is in function `, recivingDataValue)
        await axios
            .get(`http://localhost:6800/api/v1/data/`)
            .then((res) => {
                setFinalData(res)
            })
            .catch((err) => console.log(`The error is List file`, err));
    }
    useEffect(() => {
        //Runs on every render
        getValue()

    });

    if (!isVisable) return null;
    console.log('the final data is here', getFinalData)
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>


            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">

                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="w-[600px] flex flex-col">
                            <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
                        </div>
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Product Name</label>
                                            <input type="text" name="ProductName" id="ProductName" onChange={handleChange} placeholder=" " required value={productInfo.ProductName} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Color</label>
                                            <input type="text" name="Color" id="Color" onChange={handleChange} placeholder=" " required value={productInfo.Color} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Category</label>
                                            <select id="Category" name="Category" autoComplete="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Price</label>
                                            <input type="text" name="Color" id="Color" onChange={handleChange} placeholder=" " required value={productInfo.Color} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                        </div>

                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EditModal