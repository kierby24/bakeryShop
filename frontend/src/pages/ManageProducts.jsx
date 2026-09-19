import { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Image,
  Package,
  X
} from "lucide-react";
import { useAppData } from "../AppDataContext";

function ManageProducts() {
  const {
    products,
    categories,
    addProduct,
    updateProduct,
    deleteProduct
  } = useAppData();

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "Active",
    image: ""
  });

  const openAddModal = () => {
    setEditingProduct(null);

    setFormData({
      name: "",
      category: categories[0]?.name || "",
      price: "",
      stock: "",
      status: "Active"
    });

    setShowModal(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);

    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      status: product.status
    });

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProduct(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter a product name.");
      return;
    }

    if (!formData.category) {
      alert("Please select a category.");
      return;
    }

    if (formData.price === "" || Number(formData.price) < 0) {
      alert("Please enter a valid price.");
      return;
    }

    if (formData.stock === "" || Number(formData.stock) < 0) {
      alert("Please enter a valid stock quantity.");
      return;
    }

    if (editingProduct) {
      updateProduct(editingProduct.id, formData);
    } else {
      addProduct(formData);
    }

    closeModal();
  };

  const handleDelete = (product) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.name}"?`
    );

    if (confirmed) {
      deleteProduct(product.id);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" ||
      product.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const lowStockCount = products.filter(
    (product) => product.stock > 0 && product.stock <= 10
  ).length;

  const outOfStockCount = products.filter(
    (product) => product.stock === 0
  ).length;

  return (
    <section className="products-content">

      {/* HEADER */}

      <div className="products-header">
        <div>
          <h1>Manage Products</h1>
          <p>
            Add, edit and manage your bakery products.
          </p>
        </div>

        <button
          className="add-product-btn"
          onClick={openAddModal}
        >
          <Plus size={20} />
          Add Product
        </button>
      </div>

      {/* SUMMARY */}

      <div className="products-summary">

        <div className="product-summary-card">
          <div className="product-summary-icon">
            <Package size={22} />
          </div>

          <div>
            <span>Total Products</span>
            <strong>{products.length}</strong>
          </div>
        </div>

        <div className="product-summary-card">
          <div className="product-summary-icon">
            <Package size={22} />
          </div>

          <div>
            <span>In Stock</span>
            <strong>
              {products.filter((product) => product.stock > 10).length}
            </strong>
          </div>
        </div>

        <div className="product-summary-card">
          <div className="product-summary-icon">
            <Package size={22} />
          </div>

          <div>
            <span>Low Stock</span>
            <strong>{lowStockCount}</strong>
          </div>
        </div>

        <div className="product-summary-card">
          <div className="product-summary-icon">
            <Package size={22} />
          </div>

          <div>
            <span>Out of Stock</span>
            <strong>{outOfStockCount}</strong>
          </div>
        </div>

      </div>

      {/* TOOLBAR */}

      <div className="products-toolbar">

        <div className="products-search">
          <Search size={19} />

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="products-filter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Categories</option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.name}
            >
              {category.name}
            </option>
          ))}
        </select>

      </div>

      {/* TABLE */}

      <div className="products-panel">

        <div className="products-panel-header">
          <div>
            <h2>Product List</h2>
            <p>
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        <div className="products-table-wrapper">

          <table className="products-table">

            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredProducts.length === 0 ? (

                <tr>
                  <td
                    colSpan="6"
                    className="products-empty"
                  >
                    No products found.
                  </td>
                </tr>

              ) : (

                filteredProducts.map((product) => (

                  <tr key={product.id}>

                    <td>
                      <div className="product-name-cell">

                        <div className="product-image-placeholder">
                          <Package size={20} />
                        </div>

                        <div>
                          <strong>{product.name}</strong>
                          <small>
                            Product #{product.id}
                          </small>
                        </div>

                      </div>
                    </td>

                    <td>
                      <span className="product-category">
                        {product.category}
                      </span>
                    </td>

                    <td>
                      <strong>
                        ${Number(product.price).toFixed(2)}
                      </strong>
                    </td>

                    <td>
                      <span
                        className={
                          product.stock === 0
                            ? "stock-number out"
                            : product.stock <= 10
                            ? "stock-number low"
                            : "stock-number"
                        }
                      >
                        {product.stock}
                      </span>
                    </td>

                    <td>

                      <span
                        className={`product-status ${
                          product.status === "Active"
                            ? "active"
                            : "inactive"
                        }`}
                      >
                        {product.status}
                      </span>

                    </td>

                    <td>

                      <div className="product-actions">

                        <button
                          className="product-edit-btn"
                          onClick={() =>
                            openEditModal(product)
                          }
                          title="Edit product"
                        >
                          <Pencil size={17} />
                        </button>

                        <button
                          className="product-delete-btn"
                          onClick={() =>
                            handleDelete(product)
                          }
                          title="Delete product"
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* ADD / EDIT MODAL */}

      {showModal && (

        <div
          className="product-modal-overlay"
          onClick={closeModal}
        >

          <div
            className="product-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="product-modal-header">

              <div>
                <h2>
                  {editingProduct
                    ? "Edit Product"
                    : "Add Product"}
                </h2>

                <p>
                  {editingProduct
                    ? "Update product information."
                    : "Add a new product to your bakery."}
                </p>
              </div>

              <button
                className="product-modal-close"
                onClick={closeModal}
              >
                <X size={21} />
              </button>

            </div>

            <form
              className="product-form"
              onSubmit={handleSubmit}
            >

              <div className="product-form-group">

                <label>Product Name</label>

                <input
                  name="name"
                  type="text"
                  placeholder="e.g. Chocolate Cake"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

              <div className="product-form-row">

              <div className="product-form-group">
                <label>Category</label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>

                  {categories
                    .filter((category) => category.status === "Active")
                    .map((category) => (
                      <option
                        key={category.id}
                        value={category.name}
                      >
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>

                <div className="product-form-group">

                  <label>Price</label>

                  <input
                    name="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={handleChange}
                  />

                </div>

              </div>

              <div className="product-form-row">

                <div className="product-form-group">

                  <label>Stock Quantity</label>

                  <input
                    name="stock"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={formData.stock}
                    onChange={handleChange}
                  />

                </div>

                <div className="product-form-group">

                  <label>Status</label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Active">
                      Active
                    </option>

                    <option value="Inactive">
                      Inactive
                    </option>
                  </select>

                </div>

              </div>

              <div className="product-form-actions">

                <button
                  type="button"
                  className="product-cancel-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="product-save-btn"
                >
                  {editingProduct
                    ? "Save Changes"
                    : "Add Product"}
                </button>

              </div>

              <div className="product-form-group">
                  <label>Product Image</label>

                  <div className="product-image-upload">
                    {formData.image ? (
                      <div className="product-image-preview">
                        <img
                          src={formData.image}
                          alt="Product preview"
                        />

                        <button
                          type="button"
                          className="remove-product-image"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              image: ""
                            }))
                          }
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <label className="product-upload-box">
                        <Image size={28} />
                        <span>Attach Product Image</span>
                        <small>PNG, JPG or JPEG</small>

                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/jpg"
                          hidden
                          onChange={(e) => {
                            const file = e.target.files[0];

                            if (!file) return;

                            const reader = new FileReader();

                            reader.onloadend = () => {
                              setFormData((prev) => ({
                                ...prev,
                                image: reader.result
                              }));
                            };

                            reader.readAsDataURL(file);
                          }}
                        />
                      </label>
                    )}
                  </div>
                </div>

            </form>

          </div>

        </div>

      )}

    </section>
  );
}

export default ManageProducts;