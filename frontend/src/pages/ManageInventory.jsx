import { useMemo, useState } from "react";
import {
  Search,
  Package,
  AlertTriangle,
  CircleCheck,
  CircleX,
  Pencil,
  X
} from "lucide-react";
import { useAppData } from "../AppDataContext";

function ManageInventory() {
  const {
    products,
    categories,
    updateProduct
  } = useAppData();

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [stockValue, setStockValue] = useState("");

  const LOW_STOCK_LIMIT = 10;

  const getStockStatus = (stock) => {
    if (stock === 0) {
      return "Out of Stock";
    }

    if (stock <= LOW_STOCK_LIMIT) {
      return "Low Stock";
    }

    return "In Stock";
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" ||
        product.category === categoryFilter;

      const matchesStock =
        stockFilter === "All" ||
        getStockStatus(product.stock) === stockFilter;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStock
      );
    });
  }, [
    products,
    searchTerm,
    categoryFilter,
    stockFilter
  ]);

  const totalProducts = products.length;

  const inStockCount = products.filter(
    (product) => product.stock > LOW_STOCK_LIMIT
  ).length;

  const lowStockCount = products.filter(
    (product) =>
      product.stock > 0 &&
      product.stock <= LOW_STOCK_LIMIT
  ).length;

  const outOfStockCount = products.filter(
    (product) => product.stock === 0
  ).length;

  const totalStock = products.reduce(
    (total, product) =>
      total + Number(product.stock || 0),
    0
  );

  const openStockModal = (product) => {
    setEditingProduct(product);
    setStockValue(product.stock);
    setShowModal(true);
  };

  const closeStockModal = () => {
    setShowModal(false);
    setEditingProduct(null);
    setStockValue("");
  };

  const handleStockUpdate = (e) => {
    e.preventDefault();

    const newStock = Number(stockValue);

    if (!Number.isInteger(newStock) || newStock < 0) {
      alert("Stock must be a whole number greater than or equal to 0.");
      return;
    }

    updateProduct(editingProduct.id, {
      ...editingProduct,
      stock: newStock
    });

    closeStockModal();
  };

  return (
    <div className="inventory-content">

      {/* HEADER */}
      <div className="inventory-header">

        <div>
          <h1>Manage Inventory</h1>

          <p>
            Monitor product stock levels and inventory status.
          </p>
        </div>

      </div>

      {/* SUMMARY CARDS */}
      <div className="inventory-summary">

        <div className="inventory-summary-card">

          <div className="inventory-summary-icon">
            <Package size={24} />
          </div>

          <div>
            <span>Total Products</span>
            <strong>{totalProducts}</strong>
          </div>

        </div>


        <div className="inventory-summary-card">

          <div className="inventory-summary-icon">
            <CircleCheck size={24} />
          </div>

          <div>
            <span>In Stock</span>
            <strong>{inStockCount}</strong>
          </div>

        </div>


        <div className="inventory-summary-card">

          <div className="inventory-summary-icon">
            <AlertTriangle size={24} />
          </div>

          <div>
            <span>Low Stock</span>
            <strong>{lowStockCount}</strong>
          </div>

        </div>


        <div className="inventory-summary-card">

          <div className="inventory-summary-icon">
            <CircleX size={24} />
          </div>

          <div>
            <span>Out of Stock</span>
            <strong>{outOfStockCount}</strong>
          </div>

        </div>


        <div className="inventory-summary-card">

          <div className="inventory-summary-icon">
            <Package size={24} />
          </div>

          <div>
            <span>Total Stock Units</span>
            <strong>{totalStock}</strong>
          </div>

        </div>

      </div>


      {/* TOOLBAR */}
      <div className="inventory-toolbar">

        <div className="inventory-search">

          <Search size={20} />

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>


        <select
          className="inventory-filter"
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(e.target.value)
          }
        >
          <option value="All">
            All Categories
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.name}
            >
              {category.name}
            </option>
          ))}

        </select>


        <select
          className="inventory-filter"
          value={stockFilter}
          onChange={(e) =>
            setStockFilter(e.target.value)
          }
        >
          <option value="All">
            All Stock Status
          </option>

          <option value="In Stock">
            In Stock
          </option>

          <option value="Low Stock">
            Low Stock
          </option>

          <option value="Out of Stock">
            Out of Stock
          </option>

        </select>

      </div>


      {/* INVENTORY TABLE */}
      <div className="inventory-panel">

        <div className="inventory-panel-header">

          <div>
            <h2>Inventory Overview</h2>

            <p>
              {filteredProducts.length} product
              {filteredProducts.length === 1
                ? ""
                : "s"} found
            </p>
          </div>

        </div>


        <div className="inventory-table-wrapper">

          <table className="inventory-table">

            <thead>

              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Current Stock</th>
                <th>Stock Status</th>
                <th>Actions</th>
              </tr>

            </thead>


            <tbody>

              {filteredProducts.length > 0 ? (

                filteredProducts.map((product) => {

                  const status =
                    getStockStatus(product.stock);

                  return (
                    <tr key={product.id}>

                      <td>

                        <div className="inventory-product-cell">

                          <div className="inventory-product-icon">
                            <Package size={20} />
                          </div>

                          <strong>
                            {product.name}
                          </strong>

                        </div>

                      </td>


                      <td>

                        <span className="inventory-category">
                          {product.category}
                        </span>

                      </td>


                      <td>

                        <span className="inventory-stock-number">
                          {product.stock}
                        </span>

                      </td>


                      <td>

                        <span
                          className={`inventory-status ${
                            status
                              .toLowerCase()
                              .replaceAll(" ", "-")
                          }`}
                        >
                          {status}
                        </span>

                      </td>


                      <td>

                        <button
                          className="inventory-edit-btn"
                          onClick={() =>
                            openStockModal(product)
                          }
                          title="Update stock"
                        >
                          <Pencil size={17} />
                          Update Stock
                        </button>

                      </td>

                    </tr>
                  );

                })

              ) : (

                <tr>

                  <td
                    colSpan="5"
                    className="inventory-empty"
                  >

                    <Package size={42} />

                    <h3>
                      No products found
                    </h3>

                    <p>
                      Try changing your search or filters.
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* UPDATE STOCK MODAL */}
      {showModal && editingProduct && (

        <div className="inventory-modal-overlay">

          <div className="inventory-modal">

            <div className="inventory-modal-header">

              <div>

                <h2>
                  Update Stock
                </h2>

                <p>
                  {editingProduct.name}
                </p>

              </div>


              <button
                className="inventory-modal-close"
                onClick={closeStockModal}
              >
                <X size={22} />
              </button>

            </div>


            <form
              className="inventory-form"
              onSubmit={handleStockUpdate}
            >

              <div className="inventory-form-product">

                <Package size={24} />

                <div>
                  <strong>
                    {editingProduct.name}
                  </strong>

                  <span>
                    Current stock:{" "}
                    {editingProduct.stock}
                  </span>
                </div>

              </div>


              <div className="inventory-form-group">

                <label>
                  New Stock Quantity
                </label>

                <input
                  type="number"
                  min="0"
                  step="1"
                  value={stockValue}
                  onChange={(e) =>
                    setStockValue(e.target.value)
                  }
                  required
                />

              </div>


              <div className="inventory-form-actions">

                <button
                  type="button"
                  className="inventory-cancel-btn"
                  onClick={closeStockModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inventory-save-btn"
                >
                  Update Stock
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default ManageInventory;