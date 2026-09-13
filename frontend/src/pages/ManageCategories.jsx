import {
    Plus,
    Search,
    Pencil,
    Trash2,
    FolderOpen
  } from "lucide-react";
  
  function ManageCategories() {
    const categories = [
      {
        id: 1,
        name: "Cakes",
        description: "Freshly baked cakes and customized cakes",
        products: 12,
        status: "Active"
      },
      {
        id: 2,
        name: "Cupcakes",
        description: "Different flavors of freshly made cupcakes",
        products: 8,
        status: "Active"
      },
      {
        id: 3,
        name: "Pastries",
        description: "Croissants, danishes and other pastries",
        products: 15,
        status: "Active"
      },
      {
        id: 4,
        name: "Cookies",
        description: "Freshly baked cookies and sweet treats",
        products: 10,
        status: "Active"
      },
      {
        id: 5,
        name: "Bread",
        description: "Fresh bread and specialty baked goods",
        products: 9,
        status: "Active"
      },
      {
        id: 6,
        name: "Beverages",
        description: "Coffee, tea and refreshing drinks",
        products: 6,
        status: "Inactive"
      }
    ];
  
    return (
      <section className="categories-content">
  
        {/* HEADER */}
        <div className="categories-header">
          <div>
            <h1>Manage Categories</h1>
            <p>
              Organize and manage your bakery product categories.
            </p>
          </div>
  
          <button className="add-category-btn">
            <Plus size={20} />
            Add Category
          </button>
        </div>
  
        {/* SEARCH */}
        <div className="category-toolbar">
  
          <div className="category-search">
            <Search size={19} />
  
            <input
              type="text"
              placeholder="Search categories..."
            />
          </div>
  
          <div className="category-count">
            <strong>{categories.length}</strong>
            <span>Categories</span>
          </div>
  
        </div>
  
        {/* CATEGORY TABLE */}
        <div className="categories-panel">
  
          <div className="panel-title">
            <h2>Product Categories</h2>
            <p>
              View and manage your bakery categories
            </p>
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
  
                {categories.map((category) => (
  
                  <tr key={category.id}>
  
                    <td>
                      <div className="category-name">
  
                        <div className="category-icon">
                          <FolderOpen size={20} />
                        </div>
  
                        <div>
                          <strong>{category.name}</strong>
                          <small>
                            Category #{category.id}
                          </small>
                        </div>
  
                      </div>
                    </td>
  
                    <td>
                      <span className="category-description">
                        {category.description}
                      </span>
                    </td>
  
                    <td>
                      <span className="product-count">
                        {category.products} Products
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
                          className="edit-btn"
                          title="Edit Category"
                        >
                          <Pencil size={17} />
                        </button>
  
                        <button
                          className="delete-btn"
                          title="Delete Category"
                        >
                          <Trash2 size={17} />
                        </button>
  
                      </div>
  
                    </td>
  
                  </tr>
  
                ))}
  
              </tbody>
  
            </table>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default ManageCategories;