import { useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  UserRound,
  ChevronDown,
  Plus,
  Minus,
  X,
  LogOut
} from "lucide-react";

import { useAppData } from "../AppDataContext";
import bakeryLogo from "../assets/bakery-logo.png";

function ClientPanel({ user, onLogout }) {
  const { products, categories } = useAppData();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch =
        product.name
          ?.toLowerCase()
          .includes(search.toLowerCase());

      return (
        product.status === "Active" &&
        matchesCategory &&
        matchesSearch
      );
    });
  }, [products, selectedCategory, search]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  const formatPrice = (price) => {
    return `₱${Number(price || 0).toFixed(2)}`;
  };

  return (
    <div className="client-shop-page">

      {/* HEADER */}
      <header className="client-shop-header">

        <div className="client-shop-brand">
          <img
            src={bakeryLogo}
            alt="Tin & Din Bakery"
          />

          <div>
            <h1>Tin & Din Bakery</h1>
            <span>Freshly baked with care</span>
          </div>
        </div>

        <nav className="client-shop-navigation">
          <button
            className="client-nav-active"
            onClick={() => setSelectedCategory("All")}
          >
            Shop
          </button>

          <button
            onClick={() =>
              setSelectedCategory("Cakes")
            }
          >
            Cakes
          </button>

          <button
            onClick={() =>
              setSelectedCategory("Cupcakes")
            }
          >
            Cupcakes
          </button>

          <button
            onClick={() =>
              setSelectedCategory("Pastries")
            }
          >
            Pastries
          </button>
        </nav>

        <div className="client-shop-actions">

          <button
            className="client-cart-button"
            onClick={() => setShowCart(true)}
          >
            <ShoppingCart size={23} />

            <span>
              Cart ({cartCount})
            </span>
          </button>

          <div className="client-profile-wrapper">

            <button
              className="client-profile-button"
              onClick={() =>
                setShowProfileMenu((prev) => !prev)
              }
            >
              <div className="client-profile-avatar">
                {user.name?.charAt(0).toUpperCase()}
              </div>

              <ChevronDown size={17} />
            </button>

            {showProfileMenu && (
              <div className="client-profile-menu">

                <strong>
                  {user.name}
                </strong>

                <span>
                  Customer
                </span>

                <hr />

                <button
                  onClick={() =>
                    alert(
                      "Profile management will be connected soon."
                    )
                  }
                >
                  <UserRound size={17} />
                  My Account
                </button>

                <button
                  onClick={() =>
                    alert(
                      "Order history will be connected after checkout."
                    )
                  }
                >
                  Order History
                </button>

                <button
                  className="client-logout"
                  onClick={onLogout}
                >
                  <LogOut size={17} />
                  Logout
                </button>

              </div>
            )}

          </div>

        </div>

      </header>

      {/* SEARCH */}
      <section className="client-shop-search-section">

        <div className="client-shop-search">

          <Search size={20} />

          <input
            type="text"
            placeholder="Search for your favorite dessert..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </section>

      {/* MAIN SHOP */}
      <main className="client-shop-main">

        {/* CATEGORY SIDEBAR */}
        <aside className="client-category-sidebar">

          <h2>Categories</h2>

          <button
            className={
              selectedCategory === "All"
                ? "client-category-active"
                : ""
            }
            onClick={() =>
              setSelectedCategory("All")
            }
          >
            All Products
          </button>

          {categories
            .filter(
              (category) =>
                category.status === "Active"
            )
            .map((category) => (
              <button
                key={category.id}
                className={
                  selectedCategory === category.name
                    ? "client-category-active"
                    : ""
                }
                onClick={() =>
                  setSelectedCategory(
                    category.name
                  )
                }
              >
                {category.name}
              </button>
            ))}

        </aside>

        {/* PRODUCTS */}
        <section className="client-products-section">

          <div className="client-products-heading">

            <div>
              <h2>
                Our Delicious Collection
              </h2>

              <p>
                Freshly baked favorites made
                just for you.
              </p>
            </div>

            <span>
              {filteredProducts.length} products
            </span>

          </div>

          {filteredProducts.length === 0 ? (
            <div className="client-no-products">
              <ShoppingCart size={40} />
              <h3>No products found</h3>
              <p>
                Try another category or search.
              </p>
            </div>
          ) : (
            <div className="client-products-grid">

              {filteredProducts.map((product) => (

                <article
                  className="client-product-card"
                  key={product.id}
                >

                  <div className="client-product-image">

                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    ) : (
                      <div className="client-no-image">
                        🧁
                      </div>
                    )}

                    <span>
                      {product.category}
                    </span>

                  </div>

                  <div className="client-product-info">

                    <h3>
                      {product.name}
                    </h3>

                    <p>
                      Freshly baked and prepared
                      with quality ingredients.
                    </p>

                    <div className="client-product-bottom">

                      <strong>
                        {formatPrice(product.price)}
                      </strong>

                      <button
                        onClick={() =>
                          addToCart(product)
                        }
                        disabled={
                          Number(product.stock) <= 0
                        }
                      >
                        <Plus size={17} />

                        {Number(product.stock) <= 0
                          ? "Out of Stock"
                          : "Add to Cart"}
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>
          )}

        </section>

      </main>

      {/* CART DRAWER */}
      {showCart && (
        <div className="client-cart-overlay">

          <div className="client-cart-panel">

            <div className="client-cart-header">

              <div>
                <h2>Shopping Cart</h2>

                <span>
                  {cartCount} item
                  {cartCount !== 1 ? "s" : ""}
                </span>
              </div>

              <button
                onClick={() =>
                  setShowCart(false)
                }
              >
                <X size={21} />
              </button>

            </div>

            <div className="client-cart-items">

              {cart.length === 0 ? (
                <div className="client-empty-cart">

                  <ShoppingCart size={45} />

                  <h3>
                    Your cart is empty
                  </h3>

                  <p>
                    Add some delicious treats
                    to get started.
                  </p>

                </div>
              ) : (
                cart.map((item) => (

                  <div
                    className="client-cart-item"
                    key={item.id}
                  >

                    <div className="client-cart-item-image">

                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      ) : (
                        "🧁"
                      )}

                    </div>

                    <div className="client-cart-item-info">

                      <strong>
                        {item.name}
                      </strong>

                      <span>
                        {formatPrice(item.price)}
                      </span>

                      <div className="client-cart-quantity">

                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.id
                            )
                          }
                        >
                          <Minus size={14} />
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.id
                            )
                          }
                        >
                          <Plus size={14} />
                        </button>

                      </div>

                    </div>

                    <strong>
                      {formatPrice(
                        Number(item.price) *
                          item.quantity
                      )}
                    </strong>

                  </div>

                ))
              )}

            </div>

            {cart.length > 0 && (
              <div className="client-cart-footer">

                <div className="client-cart-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    {formatPrice(cartTotal)}
                  </strong>

                </div>

                <button
                  className="client-checkout-button"
                  onClick={() =>
                    alert(
                      "Checkout will be connected next."
                    )
                  }
                >
                  Proceed to Checkout
                </button>

              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default ClientPanel;