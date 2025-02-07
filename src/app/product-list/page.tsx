"use client"
import AboutProject from "@/components/AboutProject";
import AnimateProject from "@/components/AnimateProject";
import Challenge from "@/components/Challenge";
import Soultion from "@/components/Sulotion";
import Technologies from "@/components/Technology";

const ProductList=()=> {
  return (
    <div className="grid grid-cols-1 gap-4 ">
      <AnimateProject id="about">
        <AboutProject
          project={"product-list"}
          description={
            "Product list with cart is to build out this product list project that includes a functional cart and get it looking as close to the design as possible.."
          }
          imageproject={"/productlist.webp"}
        />
      </AnimateProject>
      <AnimateProject id="challenge">
        <Challenge
          description={
            "build a Product List Card UI using JavaScript, HTML, and CSS. The goal is to create a visually appealing and interactive product display that showcases product details efficiently."
          }
          point1={
            " Dynamic Product Display: Render multiple products dynamically."
          }
          point2={
            "Product Details: Each product should display an image, title, price, and description."
          }
          point3={
            "Add a hover effect for better UI interaction,Include a Buy Now or Add to Cart button for engagement."
          }
        />
      </AnimateProject>
      <AnimateProject id="soultion">
        <Soultion
          soultions={[
            "Fetching and Displaying Product Data",
            "addToCard(productName  productPrice) stores product details in the cart object and updates the product count",
            "The updateCart() function dynamically updates the cart summary",
          ]}
        />
      </AnimateProject>
      <AnimateProject id="technologies">
        <Technologies
          item={[
            { name: "JavaScript", image: "/js-logo.webp" },
            { name: "HTML5", image: "/html5-logo.webp" },
            { name: "CSS3", image: "/css-logo.png" },
            { name: "ReactJS", image: "/react-logo.webp" },
            { name: "Git", image: "/git-logo.webp" },
            { name: "Github", image: "/github-logo.webp" },
            { name: "TailwindCSS", image: "/tailwindcss-logo.webp" },
          ]}
        />
      </AnimateProject>
    </div>
  );
}
export default ProductList;