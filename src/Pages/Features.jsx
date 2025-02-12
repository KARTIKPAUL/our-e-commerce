const Features = () => {
    const featuredItems = [
        {
          id: 1,
          name: "Classic White Shirt",
          description: "A timeless piece that goes with anything.",
          image: "https://duders.in/cdn/shop/files/MenShirts_10.png?v=1702725755",
          price: "$49.99",
        },
        {
          id: 2,
          name: "Black Slim-fit Jeans",
          description: "Stylish and comfortable, perfect for everyday wear.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQvtsFCnjHkg2xh6UiB79HGPESB6nf6F8cPklejYtGuK01JHruMso_VQsYsDx1E-dvq4&usqp=CAU",
          price: "$69.99",
        },
        {
          id: 3,
          name: "Minimalist Sneakers",
          description: "Clean design with all-day comfort.",
          image: "https://nike-off.ru/wp-content/uploads/2019/01/nike-air-max-90-essential-black-grey-white-AJ1285_018-1-scaled.jpg",
          price: "$89.99",
        },
      ];

    return (
      <div>
       <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-light text-gray-800">Featured Products</h1>
        <p className="text-gray-600 mt-4">Carefully curated pieces to enhance your style.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-70 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-medium text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              <div className="mt-4 text-gray-800 font-bold">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    );
  };

 export default Features;