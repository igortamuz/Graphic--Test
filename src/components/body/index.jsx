import styled from "styled-components";
import React, { useState } from "react";
import InputsArea from "../inputsArea";
import GraphicBody from "../graphicBody";

export default function BodyArea() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedProductSales, setSelectedProductSales] = useState([]);

  return (
    <Body>
      <InputsArea
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedProductSales={selectedProductSales}
        setSelectedProductSales={setSelectedProductSales}
      />
      <SalesByMonth>Sales by month for:</SalesByMonth>
      <GraphicBody selectedProductSales={selectedProductSales} />
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const SalesByMonth = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-top: 20px;
  font-size: 25px;
`;
