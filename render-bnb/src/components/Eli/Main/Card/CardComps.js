import React, { useState, useEffect } from 'react';
import '../../../../css/Eli/MainPage/MainPageCard.css';
import Card from './CardComps/Card';

const CardsList = ({ isChecked, selectedCategory, selectedDestination }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedDestination]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      let url = '/api/products';
      if (selectedDestination) {
        const encoded = encodeURIComponent(selectedDestination);
        url = `/api/products/search?destination=${encoded}`;
      }
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      let filtered = data;
      if (selectedCategory) {
        filtered = filtered.filter(p => p.tag === selectedCategory);
      }
      setProducts(filtered);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate days from date range string
  const calculateDays = (dateRange) => {
    const [start, end] = dateRange.split(' ')[0].split('-').map(day => parseInt(day, 10));
    return end - start + 1;
  };

  if (isLoading) {
    return <div className="cards-loading">Loading products...</div>;
  }

  if (error) {
    return <div className="cards-error">Error loading products: {error}</div>;
  }

  return (
    <div className="card-container">
      {products.map((product) => {
        const days = calculateDays(product.days);
        const priceValue = parseFloat(product.price.replace(/[^0-9.]/g, ''));
        let totalPrice = priceValue;

        if (isChecked) {
          totalPrice = priceValue * days;
        }

        return (
          <Card
            key={product.id}
            id={product.id}
            image={product.imageBase64 || '/api/placeholder/400/320'}
            rating={product.rating}
            dateRange={product.days}
            price={totalPrice}
            days={days}
            isChecked={isChecked}
            location={product.location}
            description={product.description}
            name={product.name}
          />
        );
      })}
    </div>
  );
};

export default CardsList;