
const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.prevendDefault();

        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.name.value;
        const category = form.name.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,chef,supplier,taste,category,details,photo}
        console.log(newCoffee);
    }
    return (
        <div className="bg-grey-100 flex justify-center items-center min-h-screen">
        <div className="bg-[#F4F3F0]  p-8 rounded-lg shadow-md w-full max-w-3xl">
            <h1 className="text-3xl font-mono fon font-bold text-center mb-6">Add New Coffee</h1>
            <p className="text-center mb-8">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleAddCoffee}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold text-start">Name</label>
                        <input type="text" name="name" placeholder="Enter coffee name" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="chef" className="block text-gray-700 font-semibold text-start">Chef</label>
                        <input type="text" name="chef" placeholder="Enter coffee chef" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="supplier" className="block text-gray-700 font-semibold text-start">Supplier</label>
                        <input type="text" name="supplier" placeholder="Enter coffee supplier" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="taste" className="block text-gray-700 font-semibold text-start">Taste</label>
                        <input type="text" name="taste" placeholder="Enter coffee taste" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-gray-700 font-semibold text-start">Category</label>
                        <input type="text" name="category" placeholder="Enter coffee category" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="details" className="block text-gray-700 font-semibold text-start">Details</label>
                        <input type="text" name="details" placeholder="Enter coffee details" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="photo" className="block text-gray-700 font-semibold text-start ">Photo</label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <button type="submit"  className="bg-yellow-500 text-white py-2 px-4 rounded-md w-full hover:bg-yellow-600">Add Coffee</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddCoffee;