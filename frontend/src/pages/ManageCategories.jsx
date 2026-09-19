import { useMemo, useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Tag,
  X
} from "lucide-react";
import { useAppData } from "../AppDataContext";

function ManageCategories() {
  const {
    categories,
    products,
    addCategory,
    updateCategory,
    deleteCategory
  } = useAppData();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Active"
  });

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      const matchesSearch =
        category.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        category.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        category.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [categories, searchTerm, statusFilter]);

  const activeCount = categories.filter(
    (category) => category.status === "Active"
  ).length;

  const inactiveCount = categories.filter(
    (category) => category.status === "Inactive"
  ).length;

  const openAddModal = () => {
    setEditingCategory(null);

    setFormData({
      name: "",
      description: "",
      status: "Active"
    });

    setShowModal(true);
  };

  const openEditModal = (category) => {
    setEditingCategory(category);

    setFormData({
      name: category.name,
      description: category.description,
      status: category.status
    });

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingCategory(null);
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
      alert("Please enter a category name.");
      return;
    }

    const duplicate = categories.some(
      (category) =>
        category.name.toLowerCase() ===
          formData.name.trim().toLowerCase() &&
        category.id !== editingCategory?.id
    );

    if (duplicate) {
      alert("A category with this name already exists.");
      return;
    }

    if (editingCategory) {
      updateCategory(editingCategory.id, {
        ...formData,
        name: formData.name.trim(),
        description: formData.description.trim()
      });
    } else {
      addCategory({
        ...formData,
        name: formData.name.trim(),
        description: formData.description.trim()
      });
    }

    closeModal();
  };

  const handleDelete = (category) => {
    const productsUsingCategory = products.filter(
      (product) => product.category === category.name
    );

    if (productsUsingCategory.length > 0) {
      alert(
        `Cannot delete "${category.name}". ${productsUsingCategory.length} product(s) are using this category.`
      );
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete "${category.name}"?`
    );

    if (confirmed) {
      deleteCategory(category.id);
    }
  };

  return (
    <div className="categories-content">

      {/* HEADER */}
      <div className="categories-header">
        <div>
          <h1>Manage Categories</h1>
          <p>
            Organize your bakery products into categories.
          </p>
        </div>

        <button
          className="add-category-btn"
          onClick={openAddModal}
        >
          <Plus size={20} />
          Add Category
        </button>
      </div>

      {/* SUMMARY */}
      <div className="categories-summary">

        <div className="category-summary-card">
          <div className="category-summary-icon">
            <Tag size={24} />
          </div>

          <div>
            <span>Total Categories</span>
            <strong>{categories.length}</strong>
          </div>
        </div>

        <div className="category-summary-card">
          <div className="category-summary-icon">
            <Tag size={24} />
          </div>

          <div>
            <span>Active Categories</span>
            <strong>{activeCount}</strong>
          </div>
        </div>

        <div className="category-summary-card">
          <div className="category-summary-icon">
            <Tag size={24} />
          </div>

          <div>
            <span>Inactive Categories</span>
            <strong>{inactiveCount}</strong>
          </div>
        </div>

      </div>

      {/* TOOLBAR */}
      <div className="categories-toolbar">

        <div className="categories-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="categories-filter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

      </div>

      {/* TABLE */}
      <div className="categories-panel">

        <div className="categories-panel-header">
          <div>
            <h2>Categories</h2>
            <p>
              {filteredCategories.length} categor
              {filteredCategories.length === 1 ? "y" : "ies"} found
            </p>
          </div>
        </div>

        <div className="categories-table-wrapper">

          <table className="categories-table">

            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Products</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredCategories.length > 0 ? (

                filteredCategories.map((category) => {

                  const productCount = products.filter(
                    (product) =>
                      product.category === category.name
                  ).length;

                  return (
                    <tr key={category.id}>

                      <td>
                        <div className="category-name-cell">
                          <div className="category-icon">
                            <Tag size={20} />
                          </div>

                          <strong>
                            {category.name}
                          </strong>
                        </div>
                      </td>

                      <td>
                        <span className="category-description">
                          {category.description || "No description"}
                        </span>
                      </td>

                      <td>
                        <span className="category-product-count">
                          {productCount}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`category-status ${
                            category.status === "Active"
                              ? "active"
                              : "inactive"
                          }`}
                        >
                          {category.status}
                        </span>
                      </td>

                      <td>
                        <div className="category-actions">

                          <button
                            className="category-edit-btn"
                            onClick={() =>
                              openEditModal(category)
                            }
                            title="Edit category"
                          >
                            <Pencil size={17} />
                          </button>

                          <button
                            className="category-delete-btn"
                            onClick={() =>
                              handleDelete(category)
                            }
                            title="Delete category"
                          >
                            <Trash2 size={17} />
                          </button>

                        </div>
                      </td>

                    </tr>
                  );
                })

              ) : (

                <tr>
                  <td
                    colSpan="5"
                    className="categories-empty"
                  >
                    <Tag size={40} />
                    <h3>No categories found</h3>
                    <p>
                      Try changing your search or add a new category.
                    </p>
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>
      </div>

      {/* ADD / EDIT MODAL */}
      {showModal && (
        <div className="category-modal-overlay">

          <div className="category-modal">

            <div className="category-modal-header">

              <div>
                <h2>
                  {editingCategory
                    ? "Edit Category"
                    : "Add Category"}
                </h2>

                <p>
                  {editingCategory
                    ? "Update category information."
                    : "Create a new product category."}
                </p>
              </div>

              <button
                className="category-modal-close"
                onClick={closeModal}
              >
                <X size={22} />
              </button>

            </div>

            <form
              className="category-form"
              onSubmit={handleSubmit}
            >

              <div className="category-form-group">

                <label>
                  Category Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Cakes"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="category-form-group">

                <label>
                  Description
                </label>

                <textarea
                  name="description"
                  placeholder="Enter category description..."
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                />

              </div>

              <div className="category-form-group">

                <label>
                  Status
                </label>

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

              <div className="category-form-actions">

                <button
                  type="button"
                  className="category-cancel-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="category-save-btn"
                >
                  {editingCategory
                    ? "Save Changes"
                    : "Add Category"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default ManageCategories;