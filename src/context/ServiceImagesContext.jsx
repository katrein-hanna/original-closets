/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import serviceImages from "../assets/data/serviceImages.json";

const ServiceImagesContext = createContext();

export default function ServiceImagesProvider({ children }) {
  const [images, setImages] = useState({});

  useEffect(() => {
    setImages(serviceImages); // Load JSON once
  }, []);

  return (
    <ServiceImagesContext.Provider value={images}>
      {children}
    </ServiceImagesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useServiceImages() {
  return useContext(ServiceImagesContext);
}
