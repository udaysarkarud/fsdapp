const Instructions = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
          <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
            {/* <div className="overflow-hidden aspect-w-3 aspect-h-4">
              <img
                className="object-cover object-top origin-top scale-150"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
                alt=""
              />
            </div>

            <div className="relative">
              <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                <img
                  className="object-cover scale-150 lg:origin-bottom-right"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg"
                  alt=""
                />
              </div>

              <div className="absolute inset-0 grid w-full h-full place-items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20"
                >
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="absolute -translate-x-1/2 left-1/2 -top-16">
              <img
                className="w-32 h-32"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png"
                alt=""
              />
            </div> */}
          </div>

          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-3xl">
              Follow These Instructions to Get the Best Result from Our Free
              Online Face Shape Detector.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              While uploading your image, make sure to follow these instructions
              to get the optimum result from our face type detector.
            </p>
            <ul className="list-disc text-gray-600 px-4 my-5 ml-5">
              <li>Make sure your image is aligned with the detector</li>
              <li>The picture should be clear</li>
              <li>
                Make sure your forehead, cheekbone, and jaw are clearly visible.
                Pull back your hair.
              </li>
              <li>Make sure the picture is well-lit</li>
              <li>
                Avoid using group photos and detect face shapes individually
              </li>
              <li>Try to get the image as straight as possible</li>
            </ul>
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-gradient-to-r from-fuchsia-600 to-blue-600"
              role="button"
            >
              Get started now
              <svg
                className="w-5 h-5 ml-8 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructions;
