import { createContext, useContext, useEffect, useState } from "react";

const AppDataContext = createContext();

const defaultCategories = [
  {
    id: 1,
    name: "Cakes",
    description: "Freshly baked cakes and customized cakes",
    status: "Active"
  },
  {
    id: 2,
    name: "Cupcakes",
    description: "Different flavors of freshly made cupcakes",
    status: "Active"
  },
  {
    id: 3,
    name: "Pastries",
    description: "Croissants, danishes and other pastries",
    status: "Active"
  },
  {
    id: 4,
    name: "Cookies",
    description: "Freshly baked cookies and sweet treats",
    status: "Active"
  },
  {
    id: 5,
    name: "Bread",
    description: "Fresh bread and specialty baked goods",
    status: "Active"
  },
  {
    id: 6,
    name: "Beverages",
    description: "Coffee, tea and refreshing drinks",
    status: "Active"
  }
];

const defaultProducts = [
  {
    id: 1,
    name: "Chocolate Cake",
    category: "Cakes",
    price: 450,
    stock: 31,
    status: "Active"
  },
  {
    id: 2,
    name: "Strawberry Cake",
    category: "Cakes",
    price: 480,
    stock: 30,
    status: "Active"
  },
  {
    id: 3,
    name: "Vanilla Cupcake",
    category: "Cupcakes",
    price: 120,
    stock: 20,
    status: "Active"
  },
  {
    id: 4,
    name: "Red Velvet Cake",
    category: "Cakes",
    price: 520,
    stock: 13,
    status: "Active"
  },
  {
    id: 5,
    name: "Cheesecake",
    category: "Cakes",
    price: 450,
    stock: 20,
    status: "Active"
  },
  {
    id: 6,
    name: "Chocolate Chip Cookies",
    category: "Cookies",
    price: 80,
    stock: 7,
    status: "Active"
  }
];

function AppDataProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("bakery_products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : defaultProducts;
  });

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem("bakery_categories");

    return savedCategories
      ? JSON.parse(savedCategories)
      : defaultCategories;
  });

  useEffect(() => {
    localStorage.setItem(
      "bakery_products",
      JSON.stringify(products)
    );
  }, [products]);

  useEffect(() => {
    localStorage.setItem(
      "bakery_categories",
      JSON.stringify(categories)
    );
  }, [categories]);

  // =========================
  // PRODUCT FUNCTIONS
  // =========================

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      price: Number(product.price),
      stock: Number(product.stock)
    };

    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              ...updatedProduct,
              price: Number(updatedProduct.price),
              stock: Number(updatedProduct.stock)
            }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  // =========================
  // CATEGORY FUNCTIONS
  // =========================

  const addCategory = (category) => {
    const newCategory = {
      ...category,
      id: Date.now()
    };

    setCategories((prev) => [...prev, newCategory]);
  };

  const updateCategory = (id, updatedCategory) => {
    setCategories((prev) =>
      prev.map((category) =>
        category.id === id
          ? { ...category, ...updatedCategory }
          : category
      )
    );
  };

  const deleteCategory = (id) => {
    setCategories((prev) =>
      prev.filter((category) => category.id !== id)
    );
  };

  return (
    <AppDataContext.Provider
      value={{
        products,
        categories,

        addProduct,
        updateProduct,
        deleteProduct,

        addCategory,
        updateCategory,
        deleteCategory
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  return useContext(AppDataContext);
}

export default AppDataProvider;