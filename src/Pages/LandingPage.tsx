import AboutUs from "@/Components/AboutUs.tsx";
import Navbar from "@/Components/Navbar.tsx";
import { ResponsiveSlider } from "@/Components/responsive-slider";
import LogInLandigPage from "@/Components/LogInLandingPage.tsx";
import Carousel from "@/Components/carousel";
import { ProductCard } from "@/Components/ProductCard";

function LandingPage() {
  return (
    <>
      <div className="pt-20 flex flex-col w-full justify-center">

        {/* Carousel */}
        <div className="flex w-full justify-center">
          <Carousel />
        </div>

        <Navbar />
        <AboutUs />
        <LogInLandigPage />

        <h1 className="text-center font-cinzel text-darkbrown text-[36px] mb-12">
          Skógjafa Óskalisti
        </h1>

        <div className="flex justify-center items-center">
          <ResponsiveSlider
            items={[
              <ProductCard
                key="1"
                isCardMode={true}
                product={{
                  title: "Leikfang",
                  price: 2990,
                  image: "https://placehold.co/300x200",
                  link: "#",
                  store: "Pollýanna",
                }}
              />,
              <ProductCard
                key="2"
                isCardMode={true}
                product={{
                  title: "Bók",
                  price: 4500,
                  image: "https://placehold.co/300x200",
                  link: "#",
                  store: "Bóksalan",
                }}
              />,
              <ProductCard
                key="3"
                isCardMode={true}
                product={{
                  title: "Aukahlutur",
                  price: 1990,
                  image: "https://placehold.co/300x200",
                  link: "#",
                  store: "Coolshop",
                }}
              />,
              <ProductCard
                key="4"
                isCardMode={true}
                product={{
                  title: "Aukahlutur",
                  price: 1990,
                  image: "https://placehold.co/300x200",
                  link: "#",
                  store: "Coolshop",
                }}
              />,
                 <ProductCard
                key="4"
                isCardMode={true}
                product={{
                  title: "Aukahlutur",
                  price: 1990,
                  image: "https://placehold.co/300x200",
                  link: "#",
                  store: "Coolshop",
                }} />
            ]}
          />
        </div>

      </div>
    </>
  );
}

export default LandingPage;
