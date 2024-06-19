const TypesOfShape = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto flex flex-col p-6">
        <h2 className="py-4 text-3xl font-bold text-center">
          Face Shape Chart:
          <br />
          Know Everything About Different Face Shapes
        </h2>
        <p className="mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Our face shape detector app will allow you to know about your face
          shape without any effort. There are 9 most common types of face shapes
          and our detector can recognize every one of them. Here is a discussion
          of each face shape so that you can understand your face shape even
          more.
        </p>

        <div className="divide-y dark:divide-gray-300 mt-10">
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-16 h-16"
                fill="none"
              >
                <path d="M17.4999 2.47372C19.2354 3.4757 20.5945 4.87918 21.5278 6.49908C22.4904 8.17013 22.9999 10.0715 23.0017 12C23.0035 13.8695 22.5281 15.7645 21.5262 17.5C20.5242 19.2354 19.1208 20.5946 17.5009 21.5278C15.8299 22.4905 13.9285 23 12 23.0018C10.1305 23.0036 8.2354 22.5283 6.49988 21.5263C4.76441 20.5243 3.40525 19.1208 2.47202 17.5009C1.50932 15.8299 0.999855 13.9285 0.998052 12C0.996304 10.1305 1.47162 8.23548 2.4736 6.5C3.4756 4.76448 4.87912 3.40531 6.49907 2.47207C8.17012 1.5094 10.0715 0.999948 12 0.998166C13.8695 0.996438 15.7644 1.47176 17.4999 2.47372Z"></path>
                <path d="M17.4999 2.47372C19.2354 3.4757 20.5945 4.87918 21.5278 6.49908C22.4904 8.17013 22.9999 10.0715 23.0017 12C23.0035 13.8695 22.5281 15.7645 21.5262 17.5C20.5242 19.2354 19.1208 20.5946 17.5009 21.5278C15.8299 22.4905 13.9285 23 12 23.0018C10.1305 23.0036 8.2354 22.5283 6.49988 21.5263C4.76441 20.5243 3.40525 19.1208 2.47202 17.5009C1.50932 15.8299 0.999855 13.9285 0.998052 12C0.996304 10.1305 1.47162 8.23548 2.4736 6.5C3.4756 4.76448 4.87912 3.40531 6.49907 2.47207C8.17012 1.5094 10.0715 0.999948 12 0.998166C13.8695 0.996438 15.7644 1.47176 17.4999 2.47372Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                Round Face Shape
              </h3>
              <p className="mt-4 dark:text-gray-700">
                A round face shape has a charming appearance with a narrow
                forehead, slightly wider cheekbones, and a small chin. People
                with rounded face shapes have visible cheeks that appear full,
                and a wider hairline giving the face a symmetrical look. A short
                bob, angular bob, and bangs look perfect on round face shapes.
              </p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-16 h-16"
              >
                <path d="M19.9999 2C20.9999 1.99817 22.0017 3 22.0017 4C22.0017 5.00001 22.0017 11 22.0017 12C22.0018 13 22.0017 19 22.0017 20C22.0017 21 20.9999 22 19.9999 22C18.9999 22 12.9999 22 12 22.0018C11 22.0037 4.99987 22 3.99987 22C2.99987 22 1.99867 21 1.9982 20C1.99773 19 1.9989 13 1.998 12C1.99711 11 1.99782 5 1.99792 4C1.99792 3 2.99995 1.99817 3.99995 1.99817C4.99995 1.99817 11 1.99633 12 1.99817C12.9999 2 18.9999 2.00183 19.9999 2Z"></path>
                <path d="M19.9999 2C20.9999 1.99817 22.0017 3 22.0017 4C22.0017 5.00001 22.0017 11 22.0017 12C22.0018 13 22.0017 19 22.0017 20C22.0017 21 20.9999 22 19.9999 22C18.9999 22 12.9999 22 12 22.0018C11 22.0037 4.99987 22 3.99987 22C2.99987 22 1.99867 21 1.9982 20C1.99773 19 1.9989 13 1.998 12C1.99711 11 1.99782 5 1.99792 4C1.99792 3 2.99995 1.99817 3.99995 1.99817C4.99995 1.99817 11 1.99633 12 1.99817C12.9999 2 18.9999 2.00183 19.9999 2Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                Square Face Shape
              </h3>
              <p className="mt-4 dark:text-gray-700">
                A square face shape is a commonly seen face shape in Hollywood
                actresses. This type of face shape has a prominent jawline and
                forehead. It appears quite proportional in terms of length and
                width, and the width of the face remains the same from eyebrows
                to jaw. Avoid blunt bangs and bob cuts. Go for something that
                shapes your jawline and forehead.
              </p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-16 h-16"
              >
                <path d="M15.9993 2.47531C17.2613 3.47712 18.2496 4.88037 18.9282 6.5C19.6282 8.17077 19.9987 10.0718 20 12C20.0013 13.8692 19.6556 15.7639 18.927 17.4991C18.1985 19.2342 17.178 20.5931 16.0001 21.5262C14.785 22.4888 13.4024 22.9982 12.0001 23C10.6406 23.0018 9.26265 22.5265 8.00067 21.5247C6.73871 20.5229 5.7504 19.1196 5.0718 17.5C4.37177 15.8292 4.00131 13.9282 4 12C3.99873 10.1308 4.34436 8.23611 5.07295 6.50092C5.80156 4.76569 6.82213 3.40675 8.00007 2.47367C9.21518 1.51115 10.5978 1.00179 12.0001 1C13.3595 0.998277 14.7374 1.47352 15.9993 2.47531Z"></path>
                <path d="M15.9993 2.47531C17.2613 3.47712 18.2496 4.88037 18.9282 6.5C19.6282 8.17077 19.9987 10.0718 20 12C20.0013 13.8692 19.6556 15.7639 18.927 17.4991C18.1985 19.2342 17.178 20.5931 16.0001 21.5262C14.785 22.4888 13.4024 22.9982 12.0001 23C10.6406 23.0018 9.26265 22.5265 8.00067 21.5247C6.73871 20.5229 5.7504 19.1196 5.0718 17.5C4.37177 15.8292 4.00131 13.9282 4 12C3.99873 10.1308 4.34436 8.23611 5.07295 6.50092C5.80156 4.76569 6.82213 3.40675 8.00007 2.47367C9.21518 1.51115 10.5978 1.00179 12.0001 1C13.3595 0.998277 14.7374 1.47352 15.9993 2.47531Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">Oval Face Shape</h3>
              <p className="mt-4 dark:bg-gray-100 dark:text-gray-700">
                Oval face shapes are a mixture of rounded and square face
                shapes. The length of the face is 1.5X the width, giving it a
                longer appearance. The forehead, brow, cheekbones, and jaw have
                similar widths and the chin slightly narrows down. Oval face
                shape is the most versatile and almost any style will suit you.
                And, according to some, it’s the most attractive one.
              </p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-16 h-16"
              >
                <path d="M17.9999 2C18.9999 1.99817 20.0017 3 20.0017 4C20.0017 5.00001 20.0017 11 20.0017 12C20.0018 13 20.0017 19 20.0017 20C20.0017 21 18.9999 22 17.9999 22C16.9999 22 12.9999 22 12 22.0018C11 22.0037 6.99987 22 5.99987 22C4.99987 22 3.99867 21 3.9982 20C3.99773 19 3.9989 13 3.998 12C3.99711 11 3.99782 5 3.99792 4C3.99792 3 4.99995 1.99817 5.99995 1.99817C6.99995 1.99817 11 1.99633 12 1.99817C12.9999 2 16.9999 2.00183 17.9999 2Z"></path>
                <path d="M17.9999 2C18.9999 1.99817 20.0017 3 20.0017 4C20.0017 5.00001 20.0017 11 20.0017 12C20.0018 13 20.0017 19 20.0017 20C20.0017 21 18.9999 22 17.9999 22C16.9999 22 12.9999 22 12 22.0018C11 22.0037 6.99987 22 5.99987 22C4.99987 22 3.99867 21 3.9982 20C3.99773 19 3.9989 13 3.998 12C3.99711 11 3.99782 5 3.99792 4C3.99792 3 4.99995 1.99817 5.99995 1.99817C6.99995 1.99817 11 1.99633 12 1.99817C12.9999 2 16.9999 2.00183 17.9999 2Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                Rectangle Shaped Face
              </h3>
              <p className="mt-4 dark:text-gray-700">
                A rectangular face shape is quite identical to the square one.
                This type of face shape can be identified by a forehead,
                cheekbones, and chin of the same width. The chin and cheekbones
                are quite defined in a rectangular face shape. Fringes and
                layers look best on this type of face shape. Avoid short
                haircuts.
              </p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-16 h-16"
              >
                <path d="M17.0002 2C18.0002 2 20.0002 2.00183 21.0002 2C22.0002 1.99816 22.5 3 22 4C21.0002 5.99964 19.0001 10 18.5001 11C17.5001 13 14.5 19.5 13.5 21.5C13 22.5 12.5001 23.0018 12 23.0018C11.5 23.0018 11 22.5 10.5 21.5C9.5 19.5 6.5001 12.9999 5.50011 11C5.00009 10 3.00018 6 2.0001 4C1.50013 3.00005 2.00007 1.99816 3.00018 2C4.00018 2.00183 6.00013 1.99817 7.00018 2C8.00023 2.00183 11.0001 1.99817 12 2C13 2.00183 16.0002 2 17.0002 2Z"></path>
                <path d="M17.0002 2C18.0002 2 20.0002 2.00183 21.0002 2C22.0002 1.99816 22.5 3 22 4C21.0002 5.99964 19.0001 10 18.5001 11C17.5001 13 14.5 19.5 13.5 21.5C13 22.5 12.5001 23.0018 12 23.0018C11.5 23.0018 11 22.5 10.5 21.5C9.5 19.5 6.5001 12.9999 5.50011 11C5.00009 10 3.00018 6 2.0001 4C1.50013 3.00005 2.00007 1.99816 3.00018 2C4.00018 2.00183 6.00013 1.99817 7.00018 2C8.00023 2.00183 11.0001 1.99817 12 2C13 2.00183 16.0002 2 17.0002 2Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                Triangle Shaped Face
              </h3>
              <p className="mt-4 dark:text-gray-700">
                A Triangular face shape has a narrow forehead and wide
                cheekbones. This type of face shape has a strong angular
                jawline. The cheekbones are wide but not quite the most
                prominent highlight of this face shape. The jawline is the
                highlight with a pointed chin. A triangular face shape usually
                has a narrow hairline. A volume on top can bring the best out of
                this face type.
              </p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-16 h-16"
              >
                <path d="M16.5 1.00001C19.5 1.00001 22 4.00001 22 7.00001C22 8.5 22.0001 9.00001 21.5 10.5C20.9999 12 19 15 18 16.5C17 18 15 20.5 13.5 22C13 22.5 12.5 23 12.0001 23C11.5001 23 11 22.5 10.5 22C9 20.5 7 18 6 16.5C5 15 3 12 2.5 10.5C2 9.00001 2 8.5 2 7.00001C2 4.00001 4.5 1.00001 7.5 1.00001C10 1.00001 11.5 3 12.0001 4.50001C12.5 3 14 1.00001 16.5 1.00001Z"></path>
                <path d="M16.5 1.00001C19.5 1.00001 22 4.00001 22 7.00001C22 8.5 22.0001 9.00001 21.5 10.5C20.9999 12 19 15 18 16.5C17 18 15 20.5 13.5 22C13 22.5 12.5 23 12.0001 23C11.5001 23 11 22.5 10.5 22C9 20.5 7 18 6 16.5C5 15 3 12 2.5 10.5C2 9.00001 2 8.5 2 7.00001C2 4.00001 4.5 1.00001 7.5 1.00001C10 1.00001 11.5 3 12.0001 4.50001C12.5 3 14 1.00001 16.5 1.00001Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                Heart Shaped Face
              </h3>
              <p className="mt-4 dark:text-gray-700">
                A Heart-shaped face has the widest forehead and a pointed chin.
                The high cheekbones are perfectly shaped and they have the most
                perfectly placed eyes. The jawlines are also quite narrow. Bangs
                are the best option for this type of face shape. Heart-shaped
                faces require styles that cover most of their forehead.
              </p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-16 h-16"
              >
                <path d="M12.9999 1C16 0.994502 19.0017 4 19.0017 7.00001C19.0017 8.00001 19.0017 11 19.0017 12C19.0018 13 19.0017 16 19.0017 17C19.0017 20 16 23 12.9999 23C11.9999 23 12.9999 23 12 23.0018C11 23.0037 11.9999 23 10.9999 23C8 23 4.9996 20 4.9982 17C4.99773 16 4.9989 13 4.998 12C4.99711 11 4.99782 8 4.99792 7C4.99792 4 8 0.992668 11 0.998167C12 1 11 0.996335 12 0.998168C12.9999 0.999999 11.9999 1.00183 12.9999 1Z"></path>
                <path d="M12.9999 1C16 0.994502 19.0017 4 19.0017 7.00001C19.0017 8.00001 19.0017 11 19.0017 12C19.0018 13 19.0017 16 19.0017 17C19.0017 20 16 23 12.9999 23C11.9999 23 12.9999 23 12 23.0018C11 23.0037 11.9999 23 10.9999 23C8 23 4.9996 20 4.9982 17C4.99773 16 4.9989 13 4.998 12C4.99711 11 4.99782 8 4.99792 7C4.99792 4 8 0.992668 11 0.998167C12 1 11 0.996335 12 0.998168C12.9999 0.999999 11.9999 1.00183 12.9999 1Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                Oblong Shaped Face
              </h3>
              <p className="mt-4 dark:text-gray-700">
                An oblong face shape is a slightly longer version of a
                square-shaped face. It sometimes appears as angular due to a
                hollow chin. The face structure seems pretty straight as the
                forehead, cheekbones, and jaw are of the same width. Layers,
                curves, or any style that looks full can bring the best out of
                an oblong face shape.
              </p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-16 h-16"
              >
                <path d="M16.5 3C17.5 4 18 6 18 7C18 7.5 18 7.75 17.4999 9.25C18 9.75 18.5 10 19 11C19.5 12 20 13 19.9999 15C19.9999 20 16 23 12.0001 23C8 23 4 20 4 15C4.00001 13 4.49999 12 5 11C5.50001 10 6 9.75 6.5 9.25C6.00009 7.75 6 7.5 6 7C6 6 6.5 4 7.5 3C8 2.5 9.50014 1.00283 12.0001 1C14.5 0.997181 16 2.5 16.5 3Z"></path>
                <path d="M16.5 3C17.5 4 18 6 18 7C18 7.5 18 7.75 17.4999 9.25C18 9.75 18.5 10 19 11C19.5 12 20 13 19.9999 15C19.9999 20 16 23 12.0001 23C8 23 4 20 4 15C4.00001 13 4.49999 12 5 11C5.50001 10 6 9.75 6.5 9.25C6.00009 7.75 6 7.5 6 7C6 6 6.5 4 7.5 3C8 2.5 9.50014 1.00283 12.0001 1C14.5 0.997181 16 2.5 16.5 3Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                Pear Shaped Face
              </h3>
              <p className="mt-4 dark:text-gray-700">
                Pear-shaped faces have a narrow forehead and widen downwards.
                The jawline is the widest part and the cheekbones are less
                prominent. It’s quite similar to a triangular and square-shaped
                face. The jawline makes the face look wide but the length of the
                face is more than the width. Bangs, fringes, or anything
                voluminous will suit this face shape the best.
              </p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-16 h-16"
              >
                <path d="M15.4999 1C15.9999 1 16.5 1.5 17 2C18.5 3.5 21.9999 8 22.4999 9C22.9999 10 22.5 10 22 11C21 13 15 20 13.9999 21.5C13.5 22 12.9998 23 11.9999 23.0018C11 23.0037 10.5 22 9.99991 21.5C9 20 3 12.9999 2.00001 11C1.49999 10 0.999698 10 1.4999 9C2.00001 8 5.50004 3.5 7.00001 2C7.49999 1.5 7.9999 0.998167 8.49991 1C9.49996 1.00183 11 0.996335 11.9999 0.998167C12.9998 0.999998 14.4999 1 15.4999 1Z"></path>
                <path d="M15.4999 1C15.9999 1 16.5 1.5 17 2C18.5 3.5 21.9999 8 22.4999 9C22.9999 10 22.5 10 22 11C21 13 15 20 13.9999 21.5C13.5 22 12.9998 23 11.9999 23.0018C11 23.0037 10.5 22 9.99991 21.5C9 20 3 12.9999 2.00001 11C1.49999 10 0.999698 10 1.4999 9C2.00001 8 5.50004 3.5 7.00001 2C7.49999 1.5 7.9999 0.998167 8.49991 1C9.49996 1.00183 11 0.996335 11.9999 0.998167C12.9998 0.999998 14.4999 1 15.4999 1Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                Diamond Shaped Face
              </h3>
              <p className="mt-4 dark:text-gray-700">
                The diamond face shape is one of the rarest face shapes with a
                narrow forehead and wider cheek. This type of face shape has a
                narrow jaw and a pointy chin. The widest part of the face is the
                cheek. The face appears longer than its width. Diamond-shaped
                faces are quite similar to oval and round face shapes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesOfShape;
