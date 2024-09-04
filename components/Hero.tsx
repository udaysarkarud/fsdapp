import ImageUploadForm from "./ImageUploadForm";
import Testing from "./Testing";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-300 to-transparent via-pink-200">
      <div className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold text-black sm:text-6xl lg:text-4xl">
                Upload A Clear Image of Your Face to Find Out Your
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[10px] border-[#4ADE80]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-4xl">
                    Face Shape Immediately.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                Upload a clear image of your face and get the result instantly.
                Detecting face shape has never been easier. Now, all you have to
                do is upload your front-facing picture, wait for some moment,
                and let our face shape detector get the job done for you.
              </p>

              <div className="w-3/5 my-4">
                <div>
                  <ImageUploadForm />
                </div>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
