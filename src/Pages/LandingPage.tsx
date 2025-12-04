import AboutUs from ".././Components/LandingPage/AboutUs.tsx";
import Navbar from ".././Components/Navbar/Navbar.tsx"; 
import { ResponsiveSlider } from ".././Components/LandingPage/Responsive-slider.tsx";
import LogInLandigPage from ".././Components/LandingPage/LogInLandingPage.tsx";
import Carousel from ".././Components/LandingPage/Carousel.tsx";
import { ProductCard } from ".././Components/LandingPage/ProductCard.tsx";

function LandingPage() {
  return (
    <>
      <Navbar />

      <div className="pt-15 flex flex-col w-full justify-center">

        {/* Carousel */}
        <div className="flex w-full justify-center">
          <Carousel changer={() => {}} />
        </div>

        <AboutUs />
        <LogInLandigPage />

        <h1 className="text-center font-cinzel text-darkbrown text-[36px] mb-12">
          Skógjafa Óskalisti
        </h1>

        <div className="flex justify-center items-center w-full">
          <ResponsiveSlider
        items={[
          <ProductCard
            key="1"
            isCardMode={true}
            product={{
              title: "Mjúkt bangsa",
              price: 2990,
              image: "https://images.unsplash.com/photo-1753079275337-8d6ce0c46c31?q=80&w=10250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "#",
              store: "Pollýanna",
            }}
          />,

          <ProductCard
            key="2"
            isCardMode={true}
            product={{
              title: "Viðarleikfang – Lestarsett",
              price: 4500,
              image: "https://plus.unsplash.com/premium_vector-1739328271722-5bf60b1a4340?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "#",
              store: "Bóksalan",
            }}
          />,

          <ProductCard
            key="3"
            isCardMode={true}
            product={{
              title: "Litrík kubbasett",
              price: 1990,
              image: "https://images.unsplash.com/photo-1643790042511-dfa766bd4571?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "#",
              store: "Coolshop",
            }}
          />,

          <ProductCard
            key="4"
            isCardMode={true}
            product={{
              title: "Púslið – Dýrin",
              price: 2500,
              image: "https://plus.unsplash.com/premium_vector-1741304749655-79451750f6e1?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "#",
              store: "Pollýanna",
            }}
          />,

          <ProductCard
            key="5"
            isCardMode={true}
            product={{
              title: "Mjúkir leikfangavinir",
              price: 1890,
              image: "https://plus.unsplash.com/premium_vector-1739328271722-5bf60b1a4340?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "#",
              store: "Coolshop",
            }}
                    />
                  ]}
                />
              </div>

      </div>
    </>
  );
}

export default LandingPage;
