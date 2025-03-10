/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import serviceImages from "../assets/data/serviceImages.json";
import { FaSearchPlus } from "react-icons/fa";

//
export default function GallerySection({ service }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Define categories based on the service
  const serviceCategories = {
    closets: ["All", "Walk-in", "Reach-in", "Wardrobe"],
    LivingAreas: ["All", "Home Office", "Laundry", "Pantry", "Murphy Beds"],
    garages: ["Garages"],
  };

  // Determine if the service should have categories or just images
  const hasCategories =
    serviceCategories[service]?.length > 0 || service === "all";
  // let categories = [];
  // Set categories dynamically based on the service
  const categories =
    service === "all"
      ? [
          ...new Set([
            ...serviceCategories.closets,
            ...serviceCategories.LivingAreas,
            ...serviceCategories.garages,
          ]),
        ]
      : serviceCategories[service] || [];

  // Function to change the selected category with a fade transition
  const changeCategory = (category) => {
    if (selectedCategory !== category) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedCategory(category);
        setIsTransitioning(false);
      }, 300);
    }
  };
  console.log(serviceImages);

  const getImages = () => {
    if (service === "all") {
      if (selectedCategory === "All") {
        return [
          ...Object.values(serviceImages.closets).flat(),
          ...Object.values(serviceImages.LivingAreas).flat(),
          ...Object.values(serviceImages.Garages).flat(),
        ];
      }
      return (
        serviceImages.closets[selectedCategory] ||
        serviceImages.LivingAreas[selectedCategory] ||
        serviceImages.Garages[selectedCategory] ||
        []
      );
    }
    if (serviceImages[service]) {
      return selectedCategory === "All"
        ? Object.values(serviceImages[service]).flat()
        : serviceImages[service][selectedCategory] || [];
    }

    if (!hasCategories) {
      for (const [category, services] of Object.entries(serviceCategories)) {
        if (services.includes(service) && service !== "All") {
          console.log("Service is true");
          return Object.values(serviceImages[category]?.[service] || []).flat();
        }
      }

      return [];
    }

    return [];
  };

  const images = getImages();

  // Modal functions
  const openModal = (image, index) => {
    setModalImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalImage(null);
      setCurrentIndex(null);
    }, 300);
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setModalImage(images[currentIndex - 1]);
    }
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setModalImage(images[currentIndex + 1]);
    }
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (!modalImage) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeModal();
    },
    [modalImage, currentIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="content-container text-center pt-10">
      <h1>GALLERY</h1>

      {/* Show category buttons only if the service has defined categories */}
      {hasCategories && (
        <div className="flex flex-wrap justify-center pt-10 text-secondary">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => changeCategory(category)}
              className={`p-4 md:min-w-[120px] min-w-[100px] md:text-lg text-md font-medium bg-primary text-center hover:bg-text-hover transition-all ${
                selectedCategory === category ? "bg-text-hover" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Image Grid with Fade Transition */}
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={() => openModal(image, index)}
          >
            <img
              className="md:h-60 h-45 w-full rounded-lg shadow-md object-cover"
              src={image}
              srcSet={`${image}?w=400 400w, ${image}?w=800 800w, ${image}?w=1200 1200w`}
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
              alt="Gallery Image"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <span className="text-white text-4xl">
                <FaSearchPlus />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div
          className={`fixed inset-0 w-full h-full flex items-center justify-center bg-black/90 z-50 transition-opacity duration-300 ${
            isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/80"
              onClick={closeModal}
            >
              ✖
            </button>

            {currentIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                ◀
              </button>
            )}

            <img
              src={modalImage}
              alt="Enlarged"
              className="max-w-full max-h-full object-contain transition-opacity duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            />

            {currentIndex < images.length - 1 && (
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                ▶
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
