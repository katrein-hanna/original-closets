import ClosetsPage from "./pages/ClosetsPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import WalkInPage from "./pages/WalkInPage";
import ReachInPage from "./pages/ReachInPage";
import WardrobePage from "./pages/WardrobePage";
import LivingAreasPage from "./pages/LivingAreasPage";
import HomeOfficePage from "./pages/HomeOfficePage";
import EntryStoragePage from "./pages/EntryStoragePage";
import MurphyBedsPage from "./pages/MurphyBedsPage";
import LaundryRoomsPage from "./pages/LaundryRoomsPage";
import KitchenPantryPage from "./pages/KitchenPantryPage";
import GaragesPage from "./pages/GaragesPage";
import ContactPage from "./pages/ContactPage";
import RootLayout from "./layouts/RootLayout";
import ClosetsLayout from "./layouts/ClosetsLayout";
import LivingAreasLayout from "./layouts/LivingAreasLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="closets" element={<ClosetsLayout />}>
        <Route index element={<ClosetsPage />} />
        <Route path="walkin" element={<WalkInPage />} />
        <Route path="reachin" element={<ReachInPage />} />
        <Route path="wardrobe" element={<WardrobePage />} />
      </Route>
      <Route path="living-areas" element={<LivingAreasLayout />}>
        <Route index element={<LivingAreasPage />} />
        <Route path="home-office" element={<HomeOfficePage />} />
        <Route path="entryway-storage" element={<EntryStoragePage />} />
        <Route path="murphy-beds" element={<MurphyBedsPage />} />
        <Route path="laundry-rooms" element={<LaundryRoomsPage />} />
        <Route path="kitchen-pantry" element={<KitchenPantryPage />} />
      </Route>
      <Route path="garages" element={<GaragesPage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="contact-us" element={<ContactPage />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   {/* <main className="grid grid-rows-auto min-h-screen"> */}
    //   <Navbar />

    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/closets">
    //       <Route index element={<ClosetsPage />} />
    //       <Route path="walkin" element={<WalkInPage />} />
    //       <Route path="reachin" element={<ReachInPage />} />
    //       <Route path="wardrobe" element={<WardrobePage />} />
    //     </Route>
    //     <Route path="/living-areas" element={<LivingAreasPage />} />
    //     <Route path="/home-office" element={<HomeOfficePage />} />
    //     <Route path="/entryway-storage" element={<EntryStoragePage />} />
    //     <Route path="/murphy-beds" element={<MurphyBedsPage />} />
    //     <Route path="/laundry-rooms" element={<LaundryRoomsPage />} />
    //     <Route path="/kitchen-pantry" element={<KitchenPantryPage />} />
    //     <Route path="/garages" element={<GaragesPage />} />
    //     <Route path="/gallery" element={<GalleryPage />} />
    //     <Route path="/contact-us" element={<ContactPage />} />
    //   </Routes>

    //   <Footer />
    //   {/* </main> */}
    // </BrowserRouter>
  );
}

export default App;
