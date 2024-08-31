import { Card } from "./common";
import { HeroImg } from "../assets/images";

const Collection = () => {
  const handleAddToCart = () => {
    console.log("Add to Cart");
  };

  const handleLike = () => {
    console.log("Liked");
  };

  const handleReadMore = () => {
    console.log("Read More");
  };

  return (
    <>
      <h1 className="flex justify-center font-[300] text-[30px] tracking-wide mt-2 mb-6">
        Collections
      </h1>

      <div className="pt-[28px] pb-[90px] w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 justify-items-center items-center mx-auto">
        <Card
          image={HeroImg}
          title="Product Name"
          discount={"2%"}
          onAddToCart={handleAddToCart}
          onLike={handleLike}
          onReadMore={handleReadMore}
        />

        <Card
          image={HeroImg}
          title="Product Name"
          discount={"20%"}
          onAddToCart={handleAddToCart}
          onLike={handleLike}
          onReadMore={handleReadMore}
        />

        <Card
          image={HeroImg}
          title="Product Name"
          discount={"20%"}
          onAddToCart={handleAddToCart}
          onLike={handleLike}
          onReadMore={handleReadMore}
        />

        <Card
          image={HeroImg}
          title="Product Name"
          discount={"New"}
          onAddToCart={handleAddToCart}
          onLike={handleLike}
          onReadMore={handleReadMore}
        />

        <Card
          image={HeroImg}
          title="Product Name"
          discount={"15%"}
          onAddToCart={handleAddToCart}
          onLike={handleLike}
          onReadMore={handleReadMore}
        />

        <Card
          image={HeroImg}
          title="Product Name"
          discount={"New"}
          onAddToCart={handleAddToCart}
          onLike={handleLike}
          onReadMore={handleReadMore}
        />
      </div>
    </>
  );
};

export default Collection;
