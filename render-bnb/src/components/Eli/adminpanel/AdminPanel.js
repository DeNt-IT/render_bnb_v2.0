import React, { useState } from 'react';
import '../../../css/Eli/AdminPanel/AdminPanel.css'

const AdminPanel = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: '/api/placeholder/400/320',
      location: 'Odesa, Ukraine',
      rating: 4.98,
      description: 'Біля моря',
      days: '1-10 ночей',
      price: '$70 за ніч'
    },
    {
      id: 2,
      image: '/api/placeholder/400/320',
      location: 'Odesa, Ukraine',
      rating: 4.72,
      description: 'Біля міста',
      days: '5-12 ночей',
      price: '$85 за ніч'
    },
    {
      id: 3,
      image: '/api/placeholder/400/320',
      location: 'Odesa, Ukraine',
      rating: 4.65,
      description: 'Біля моря',
      days: '7-18 ночей',
      price: '$65 за ніч'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    image: '',
    location: '',
    rating: 0,
    description: '',
    days: '',
    price: ''
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleOpenModal = (isEdit = false, product = null) => {
    if (isEdit && product) {
      setCurrentProduct(product);
      setEditMode(true);
    } else {
      setCurrentProduct({
        id: Date.now(),
        image: '',
        location: '',
        rating: 0,
        description: '',
        days: '',
        price: ''
      });
      setEditMode(false);
    }
    setPreviewImage(null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProduct({
      id: null,
      image: '',
      location: '',
      rating: 0,
      description: '',
      days: '',
      price: ''
    });
    setPreviewImage(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({
      ...currentProduct,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPreviewImage(URL.createObjectURL(file));
      
      // In a real application, you would upload this to your server
      // For now, we'll just store the Object URL
      setCurrentProduct({
        ...currentProduct,
        image: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editMode) {
      // Update existing product
      setProducts(
        products.map(product => 
          product.id === currentProduct.id ? currentProduct : product
        )
      );
    } else {
      // Add new product
      setProducts([...products, currentProduct]);
    }
    
    handleCloseModal();
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
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

      <div className="admin-products-table">
        <div className="admin-table-header">
          <div className="admin-th image-cell">Зображення</div>
          <div className="admin-th">Місцезнаходження</div>
          <div className="admin-th">Рейтинг</div>
          <div className="admin-th">Опис</div>
          <div className="admin-th">Дні</div>
          <div className="admin-th">Ціна</div>
          <div className="admin-th actions-cell">Дії</div>
        </div>

        {products.map(product => (
          <div className="admin-table-row" key={product.id}>
            <div className="admin-td image-cell">
              <img src={product.image} alt={product.location} className="admin-product-image" />
            </div>
            <div className="admin-td">{product.location}</div>
            <div className="admin-td">★ {product.rating}</div>
            <div className="admin-td">{product.description}</div>
            <div className="admin-td">{product.days}</div>
            <div className="admin-td">{product.price}</div>
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
        ))}
      </div>

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
                  {(previewImage || currentProduct.image) && (
                    <div className="admin-image-preview">
                      <img 
                        src={previewImage || currentProduct.image} 
                        alt="Preview" 
                        className="admin-preview-image" 
                      />
                    </div>
                  )}
                  <input 
                    type="file" 
                    onChange={handleImageChange} 
                    className="admin-file-input"
                  />
                </div>
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
                  type="text" 
                  name="days" 
                  value={currentProduct.days} 
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="admin-form-group">
                <label>Ціна</label>
                <input 
                  type="text" 
                  name="price" 
                  value={currentProduct.price} 
                  onChange={handleChange}
                  required
                />
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