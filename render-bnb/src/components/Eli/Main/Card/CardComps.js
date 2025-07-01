import React, { useState, useEffect } from 'react';
import '../../../../css/Eli/MainPage/MainPageCard.css';
import Card from './CardComps/Card';

const CardsList = ({ isChecked, selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/products');
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      if (selectedCategory) {
        setProducts(data.filter(p => p.tag === selectedCategory));
      } else {
        setProducts(data);
      }
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
      {products.map((product, index) => {
        const days = calculateDays(product.days);
        const priceValue = parseFloat(product.price.replace(/[^0-9.]/g, ''));
        let totalPrice = priceValue;

        if (isChecked) {
          totalPrice = priceValue * days;
        }

        return (
          <Card
            key={product.id}
            image={product.imageBase64 || '/api/placeholder/400/320'}
            rating={product.rating}
            dateRange={product.days}
            price={totalPrice}
            days={days}
            isChecked={isChecked}
            index={index}
            location={product.location}
            description={product.description}
          />
        );
      })}
    </div>
  );
};

export default CardsList;