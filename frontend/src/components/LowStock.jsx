import { Package, Egg } from "lucide-react";

function LowStock() {

  const products = [
    {
      name: "Flour",
      icon: Package,
      className: "flour",
      button: "Low Stock"
    },
    {
      name: "Eggs",
      icon: Egg,
      className: "eggs",
      button: "Low Stock"
    }
  ];

  return (
    <section className="card stock-card">

      <h2>Low Stock Alerts</h2>

      <div className="stock-products">

        {products.map((product, index) => {

          const Icon = product.icon;

          return (
            <div
              className={`stock-product ${product.className}`}
              key={index}
            >

              <div className="stock-icon">
                <Icon size={39} strokeWidth={1.3} />
              </div>

              <span className="stock-name">
                {product.name}
              </span>

              <button>
                {product.button}
              </button>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default LowStock;