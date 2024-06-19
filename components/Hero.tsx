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

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8 justify-center p-6 border-dashed border-2 border-black rounded-lg">
                {/* <Testing /> */}
                <div>
                  <div className="relative">
                    <label
                      title="Click to upload"
                      htmlFor="button2"
                      className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <div className="w-max relative">
                        <img
                          className="w-12"
                          src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                          alt="file upload icon"
                          width="512"
                          height="512"
                        />
                      </div>
                      <div className="relative">
                        <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500 text-2xl">
                          Upload your image here
                        </span>
                        <span className="mt-0.5 block text-sm text-gray-500">
                          Max 2 MB
                        </span>
                      </div>
                    </label>
                    <input
                      type="file"
                      name="button2"
                      id="button2"
                      className="hidden"
                    />
                  </div>
                </div>
                {/*                 <div>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div> */}
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
