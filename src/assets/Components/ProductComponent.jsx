import './ProductComponent.css';

const burgers = [
  {
    id: 1,
    name: 'Creamy Mushroom Burger',
    description: 'Beef Patty, Cream of Mushroom, Mozza Cheese, Grilled Onions, Mayo',
    price: 99.15,
    image: 'https://t3.ftcdn.net/jpg/09/61/04/86/360_F_961048600_sric7y1jYr128d1ZABUu6YQXBfapf9rs.jpg',
  },
  {
    id: 2,
    name: 'Spicy Chicken Burger',
    description: 'Crispy Chicken, Mozza Cheese, Grilled Onion & Tomatoes Lettuce, Garlic Sauce',
    price: 98.25,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hlw9H8cfFHCq1yjJl4WLXJkSmxXnhlT8dglnxSWG02yJyY3v_03wqKw&s=10.',
  },
  {
    id: 3,
    name: 'Ultimate Cheese Burger',
    description: 'Beef patties, melted cheese, savory sauces, and fresh or cooked toppings.',
    price: 95.25,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzE_YbBVZaNKpRvf83KaKrjEGz2koMy9dc__PGBwskoh3EPZui_QTislA&s=10',
  },
   {
    id: 4,
    name: 'Beef Burger',
    description: 'Beef Patty, Onions, Tomatoes, Lettuce, Ketchup, Mayo, Mustard',
    price: 95.33,
    image: 'https://thetastefulpantry.com/wp-content/uploads/2024/02/Beef-Burger-The-Tasteful-Pantry.jpg',
  },
];

export default function ProductComponent() {
  return (
    <>
      <header className="header">
        <a className="brand" href="#top" aria-label="Tasty Burger home">
          <span className="brand-mark" aria-hidden="true"></span>
          <span> TASTY BURGER </span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#menu">OUR MENU</a>
          <a href="#shop">SHOP</a>
          <a href="#contact">CONTACT</a>
          <button className="cart-button" type="button" aria-label="Shopping cart, 2 items">
            <span aria-hidden="true">&#128722;</span>
          </button>
        </nav>
      </header>

      <main className="burger-page" id="top">
        <h1>Our Crazy Burgers</h1>
        <p className="main-subtitle">Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow your mind!</p>
        <div className="burger-list" id="menu">
          {burgers.map((burger) => (
            <div key={burger.id} className="burger-card">
              <img src={burger.image} alt={burger.name} className="burger-image" />
              <div className="burger-info">
                <h2>{burger.name}</h2>
                <p style={{ flexGrow: 1 }}>{burger.description}</p>
                <div className="burger-meta">
                  <span className="burger-price">${burger.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
