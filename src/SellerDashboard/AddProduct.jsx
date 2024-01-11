
const AddProduct = () => {
    const handleAddProduct = async (event) =>{
        event.preventDefault();
        const formData =  {
            ProductName: event.target.name.value,
            Brand: event.target.brand.value,
            Price: event.target.price.value,
            Category: event.target.category.value,
            item_Stock: event.target.itemStock.value,
            Description: event.target.description.value
        }
        console.log(formData);
    }

    return (
        <div>
        <section className="bg-white h-full dark:bg-gray-900">
    <div className=" px-4 mx-auto max-w-2xl lg:py-3">
    <h2 className="mb-4 text-2xl font-bold text-gray-900 text-center dark:text-white">Add a new product</h2>
    <form action="" className="border px-9 py-5 rounded-xl" onSubmit={handleAddProduct}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
            </div>
            <div className="w-full">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
            </div>
            <div className="w-full">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
            </div>
            <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Select category</option>
                    <option value="Home Appliance">Home Appliance</option>
                    <option value="Beauty_Products">Beauty_Products</option>
                    <option value="Food Item">Food Item</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Earphones">Earphones</option>
                    <option value="Kids Item">Kids Item</option>
                    <option value="Kids Item">Men's Fashion</option>
                    <option value="Women's Fashion">Women's Fashion</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </div>
            <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Stock</label>
                <input type="number" name="itemStock" id="item-Stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""/>
            </div>
            
            <div className="sm:col-span-2">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea name="description" id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
            </div>
            <div className="sm:col-span-2">
                
    <div className="flex items-center justify-center w-full">
    <label  className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
    </div> 
        </div>
        </div>
        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Add product
        </button>
    </form>
    </div>
    </section>
        </div>
    );
};

export default AddProduct;