import styled from "styled-components";
import React, { useEffect } from "react";
import data from "../../Infos.json";

export default function InputsArea({
  selectedCategory,
  setSelectedCategory,
  selectedProduct,
  setSelectedProduct,
  selectedBrand,
  setSelectedBrand,
  setSelectedProductSales,
}) {
  const categories = data.categories.map((category) => category.name);
  let products = [];
  let brands = [];

  if (selectedCategory) {
    const selectedCategoryData = data.categories.find(
      (category) => category.name === selectedCategory
    );

    if (selectedCategoryData) {
      products = selectedCategoryData.products.map((product) => product.name);
    }

    if (selectedProduct && !products.includes(selectedProduct)) {
      setSelectedProduct("");
    }

    if (selectedProduct) {
      const selectedProductData = selectedCategoryData.products.find(
        (product) => product.name === selectedProduct
      );

      if (selectedProductData) {
        brands = selectedProductData.brands.map((brand) => brand.name);

        if (!brands.includes(selectedBrand)) {
          setSelectedBrand(brands[0]);
        }

        const selectedBrandData = selectedProductData.brands.find(
          (brand) => brand.name === selectedBrand
        );

        if (selectedBrandData) {
          setSelectedProductSales(selectedBrandData.monthlySales);
        }
      }
    }
  }

  useEffect(() => {
    if (!selectedCategory && categories.length > 0) {
      setSelectedCategory(categories[0]);
    }

    if (!selectedProduct && selectedCategory) {
      const selectedCategoryData = data.categories.find(
        (category) => category.name === selectedCategory
      );

      if (selectedCategoryData && selectedCategoryData.products.length > 0) {
        setSelectedProduct(selectedCategoryData.products[0].name);
      }
    }
    if (!selectedBrand && selectedProduct) {
      const selectedCategoryData = data.categories.find(
        (category) => category.name === selectedCategory
      );

      if (selectedCategoryData) {
        const selectedProductData = selectedCategoryData.products.find(
          (product) => product.name === selectedProduct
        );

        if (selectedProductData && selectedProductData.brands.length > 0) {
          const selectedBrandData = selectedProductData.brands.find(
            (brand) => brand.name === selectedBrand
          );

          if (!selectedBrandData) {
            setSelectedBrand(selectedProductData.brands[0].name);
            setSelectedProductSales(selectedProductData.brands[0].monthlySales);
          }
        }
      }
    }
  }, [
    categories,
    selectedCategory,
    selectedProduct,
    selectedBrand,
    setSelectedCategory,
    setSelectedProduct,
    setSelectedBrand,
    setSelectedProductSales,
  ]);

  return (
    <Body>
      <InputContainer>
        <InputLabel>Categories:</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <Option key={index} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </InputContainer>
      <InputContainer>
        <InputLabel>Products:</InputLabel>
        <Select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          {products.map((product, index) => (
            <Option key={index} value={product}>
              {product}
            </Option>
          ))}
        </Select>
      </InputContainer>
      <InputContainer>
        <InputLabel>Brands:</InputLabel>
        <Select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          {brands.map((brand, index) => (
            <Option key={index} value={brand}>
              {brand}
            </Option>
          ))}
        </Select>
      </InputContainer>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 5px;
    margin-left: 0;
  }
`;

const Select = styled.select`
  padding: 5px 10px;
  font-size: 14px;
  outline: none;
  box-shadow: 1px 2px 5px 0px gray;

  @media (min-width: 768px) {
    width: auto;
  }

  option {
    padding: 5px 10px;
    outline: none;
    border-radius: 5px;
  }
`;

const Option = styled.option``;
