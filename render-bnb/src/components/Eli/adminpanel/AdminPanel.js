import React, { useState, useEffect } from 'react';
import '../../../css/Eli/AdminPanel/AdminPanel.css';

const defaultCategories = [
  'Гарні краєвиди',
  'Невеликі квартирі',
  'Великі квартири',
  'Кімнати',
  'Хостели',
  'Luxe',
  'У центрі міста',
  'Сільська місцевість',
  'Від дизайнера',
  'Біля моря',
  'Особняки',
  'Легендарне'
];

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    imageBase64: '',
    name: '',
    location: '',
    rating: 0,
    description: '',
    days: '',
    price: '',
    tag: ''
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/products');
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = (isEdit = false, product = null) => {
    if (isEdit && product) {
      setCurrentProduct({
        id: product.id,
        imageBase64: product.imageBase64,
        name: product.name,
        location: product.location,
        rating: product.rating,
        description: product.description,
        days: product.days,
        price: product.price,
        tag: product.tag
      });
      setPreviewImage(product.imageBase64);
      setAdditionalImages(product.photoBase64 || []);
      setEditMode(true);
    } else {
      setCurrentProduct({
        id: null,
        imageBase64: '',
        name: '',
        location: '',
        rating: 0,
        description: '',
        days: '',
        price: '',
        tag: ''
      });
      setPreviewImage(null);
      setAdditionalImages([]);
      setEditMode(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProduct({
      id: null,
      imageBase64: '',
      name: '',
      location: '',
      rating: 0,
      description: '',
      days: '',
      price: '',
      tag: ''
    });
    setPreviewImage(null);
    setAdditionalImages([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({
      ...currentProduct,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const readers = [];
      files.forEach((file, index) => {
        const reader = new FileReader();
        readers.push(reader);
        reader.onloadend = () => {
          const base64String = reader.result;
            // setPreviewImage(base64String);
            setCurrentProduct({ ...currentProduct, imageBase64: base64String });
            setAdditionalImages(prev => [...prev, base64String]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const daysNum = parseInt(currentProduct.days, 10);
    const priceNum = parseFloat(currentProduct.price);
    if (isNaN(daysNum) || isNaN(priceNum)) {
      setError('Days and Price must be numbers');
      return;
    }

    try {
      if (editMode) {
        // Update existing product
        const response = await fetch(`/api/products/${currentProduct.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            imageBase64: currentProduct.imageBase64,
            photoBase64: additionalImages,
            name: currentProduct.name,
            location: currentProduct.location,
            rating: parseFloat(currentProduct.rating),
            description: currentProduct.description,
            days: currentProduct.days,
            price: currentProduct.price,
            tag: currentProduct.tag
          })
        });
        
        if (!response.ok) {
          throw new Error(`Error updating product: ${response.status}`);
        }
        
        // Refresh products list
        await fetchProducts();
      } else {
        // Add new product
        const response = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            imageBase64: currentProduct.imageBase64,
            photoBase64: additionalImages,
            name: currentProduct.name,
            location: currentProduct.location,
            rating: parseFloat(currentProduct.rating),
            description: currentProduct.description,
            days: currentProduct.days,
            price: currentProduct.price,
            tag: currentProduct.tag
          })
        });
        
        if (!response.ok) {
          throw new Error(`Error creating product: ${response.status}`);
        }
        
        // Refresh products list
        await fetchProducts();
      }
      
      // Close modal after successful operation
      handleCloseModal();
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error saving product:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`/api/products/${id}`, {
          method: 'DELETE'
        });
        
        if (!response.ok) {
          throw new Error(`Error deleting product: ${response.status}`);
        }
        
        // Refresh products list
        await fetchProducts();
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error deleting product:', err);
      }
    }
  };

  return (
    <div className="admin-panel-container">
      <div className="admin-header">
        <h1>HomeFU Адмін Панель</h1>
        <button 
          className="admin-add-btn"
          onClick={() => handleOpenModal(false)}
        >
          Додати новий продукт
        </button>
      </div>

      {error && (
        <div className="admin-error-message">
          Error: {error}
        </div>
      )}

      {isLoading ? (
        <div className="admin-loading">Loading products...</div>
      ) : (
          <div className="admin-products-table">
            <div className="admin-table-header">
              <div className="admin-th image-cell">Зображення</div>
              <div className="admin-th">Назва</div>
              <div className="admin-th">Місцезнаходження</div>
            <div className="admin-th">Рейтинг</div>
            <div className="admin-th">Опис</div>
            <div className="admin-th">Дні</div>
            <div className="admin-th">Ціна</div>
            <div className="admin-th">Тег</div>
            <div className="admin-th actions-cell">Дії</div>
          </div>

          {products.length === 0 ? (
            <div className="admin-empty-message">No products found. Add a new product to get started.</div>
          ) : (
            products.map(product => (
              <div className="admin-table-row" key={product.id}>
              <div className="admin-td image-cell">
                <img src={product.imageBase64 || '/api/placeholder/400/320'} alt={product.location} className="admin-product-image" />
              </div>
              <div className="admin-td">{product.name}</div>
              <div className="admin-td">{product.location}</div>
                <div className="admin-td">★ {product.rating}</div>
                <div className="admin-td">{product.description}</div>
                <div className="admin-td">{product.days}</div>
                <div className="admin-td">{product.price}</div>
                <div className="admin-td">{product.tag}</div>
                <div className="admin-td actions-cell">
                  <button 
                    className="admin-edit-btn"
                    onClick={() => handleOpenModal(true, product)}
                  >
                    Редагувати
                  </button>
                  <button 
                    className="admin-delete-btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    Видалити
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {showModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal-header">
              <h2>{editMode ? 'Редагувати продукт' : 'Додати новий продукт'}</h2>
              <button className="admin-close-modal" onClick={handleCloseModal}>×</button>
            </div>
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="admin-form-group">
                <label>Зображення</label>
                <div className="admin-image-upload">
                  {previewImage && (
                    <div className="admin-image-preview">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="admin-preview-image"
                      />
                    </div>
                  )}
                  {additionalImages.length > 0 && (
                    <div className="admin-additional-preview">
                      {additionalImages.map((img, idx) => (
                        <img key={idx} src={img} alt={`Add ${idx}`} className="admin-preview-image" />
                      ))}
                    </div>
                  )}
                  <input
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    className="admin-file-input"
                  />
                </div>
              </div>
              <div className="admin-form-group">
                <label>Назва</label>
                <input
                  type="text"
                  name="name"
                  value={currentProduct.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="admin-form-group">
                <label>Місцезнаходження</label>
                <input 
                  type="text" 
                  name="location" 
                  value={currentProduct.location} 
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="admin-form-group">
                <label>Рейтинг (0-5)</label>
                <input 
                  type="number" 
                  name="rating" 
                  min="0" 
                  max="5" 
                  step="0.01" 
                  value={currentProduct.rating} 
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="admin-form-group">
                <label>Опис</label>
                <input 
                  type="text" 
                  name="description" 
                  value={currentProduct.description} 
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="admin-form-group">
                <label>Дні</label>
                <input
                  type="number"
                  name="days"
                  min="1"
                  value={currentProduct.days}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="admin-form-group">
                <label>Ціна</label>
                <input
                  type="number"
                  name="price"
                  min="0"
                  step="0.01"
                  value={currentProduct.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="admin-form-group">
                <label>Тег</label>
                <input
                  list="tag-list"
                  name="tag"
                  value={currentProduct.tag}
                  onChange={handleChange}
                  required
                />
                <datalist id="tag-list">
                  {defaultCategories.map(cat => (
                    <option key={cat} value={cat} />
                  ))}
                </datalist>
              </div>
              <div className="admin-form-actions">
                <button type="button" className="admin-cancel-btn" onClick={handleCloseModal}>Скасувати</button>
                <button type="submit" className="admin-submit-btn">{editMode ? 'Оновити' : 'Додати'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;