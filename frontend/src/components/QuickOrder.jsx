import { useState } from "react";

function QuickOrder() {

  const [quantity, setQuantity] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order submitted successfully!");
  };

  return (
    <section className="card quick-order-card">

      <h2>Quick Order</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-row">

          <div className="form-group product-name">

            <label>
              Entry name
            </label>

            <input
              type="text"
              placeholder="Entry name"
            />

          </div>

          <div className="form-group quantity">

            <label>
              Quantity
            </label>

            <select
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

          </div>

        </div>

        <div className="form-group">

          <label>
            Description
          </label>

          <input
            type="text"
            placeholder=""
          />

        </div>

        <button
          type="submit"
          className="order-button"
        >
          Order
        </button>

      </form>

    </section>
  );
}

export default QuickOrder;