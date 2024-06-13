
const stats = ['200+', '300+', '9', '2,500+'];
const statsDescription = ['Customers', 'Orders', 'Categories', 'Products'];

export default function About() {
  return (
    <main className="flex flex-col gap-10">

      <div className="relative flex flex-col justify-center items-center w-full bg-aboutus-frame bg-cover bg-center bg-no-repeat h-[230px]">
        <div className="absolute inset-0 bg-[#020101] opacity-50"></div>
        <div className="z-10 font-semibold text-[25px] text-[#f3f30b] md:text-2xl">About</div>
        <div className="z-10 font-semibold text-[15px] text-center text-white px-4 md:text-3xl md:px-0">Discover Our Story: Unveiling the Essence of Our Journey</div>
      </div>

      <div className="flex flex-col gap-10 px-4">
        <div className="flex flex-col gap-4 md:flex-row">

          <div className="w-1/2 rounded-2xl bg-form-bg bg-cover"></div>

          <div className="w-full rounded-2xl bg-white p-4 md:w-1/2">
            <p>
              <span className="drop-cap">W</span>elcome to Snappers, the premier online grocery shop that brings the supermarket to your doorstep. Our easy-to-use
              website allows you to shop from the comfort of your own home, with our vast selection of fresh produce, pantry staples,
              snacks, and more. We pride ourselves on our unbeatable prices and strive to offer our customers the best value possible.
              In addition, we offer exclusive discounts and offers to our loyal customers. With Snappers, you can enjoy the convenience
              of online shopping without sacrificing the quality of your groceries. Shop with us today and discover the Snappers difference
              for yourself.
            </p>
          </div>

        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          {stats.map((stat, index) => (
            <div key={index} className="w-full rounded-2xl bg-white p-4 md:w-1/4">
              <div className="flex flex-col justify-center items-center">
                <div className="font-semibold text-[#ffac1e] text-[70px]">{stat}</div>
                <div className="text-[#071c43] text-[25px] font-medium mt-[-25px] pb-[25px]">{statsDescription[index]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
