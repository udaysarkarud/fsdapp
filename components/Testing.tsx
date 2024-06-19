const Testing = () => {
  return (
    <div>
      <div className="tlg:py-8 py-4">
        <div className="relative rounded-[32px] bg-gradient-to-l from-transparent to-white tlg:h-40 h-[120px] flex justify-center flex-col items-center lg+:w-[378px] border-[3px] border-white">
          <div>
            <button className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary rounded-lg text-base transition text-white hover:bg-opacity-80 !rounded-full h-14 bg-gradient shadow-[0px_4px_32px_rgba(43,61,227,0.24)] !w-[232px]">
              <span className="inline-flex mr-2">
                <div
                  color="inherit"
                  className="sc-grXZZQ eXuEmM text-center text-white font-semibold"
                >
                  <div className="flex-auto rounded-md inline-block align-middle bg-neutral-ink-200 w-undefined h-undefined"></div>
                </div>
              </span>
              <span className="font-normal text-[18px] leading-[26px] font-semibold">
                Upload image
              </span>
            </button>
          </div>
          <p className="font-normal text-[16px] leading-[24px] hidden mt-4 tlg:inline-block text-neutral-ink-600 fontR text-center">
            Or just drop here / Ctrl + V to paste image
          </p>
        </div>
        <div className="lg+:mt-10 mt-4 lg+:flex text-center lg+:text-start">
          <p className="font-normal text-[16px] leading-[24px] mb-3 text-neutral-ink-600 w-[155px] hidden lg+:block">
            No image? <br /> Try one of these
          </p>
          <p className="font-normal text-[16px] leading-[24px] mb-3 text-neutral-ink-600 block lg+:hidden">
            No image? Try one of these
          </p>
          <ul className="space-x-3">
            <li className="inline-block">
              <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                <img
                  src="https://assets.remove-bg.ai/images/sample-remove-bg-1-xs.webp"
                  alt="sample"
                  className="object-cover w-full h-full"
                />
              </button>
            </li>
            <li className="inline-block">
              <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                <img
                  src="https://assets.remove-bg.ai/images/sample-remove-bg-2-xs.webp"
                  alt="sample"
                  className="object-cover w-full h-full"
                />
              </button>
            </li>
            <li className="inline-block">
              <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                <img
                  src="https://assets.remove-bg.ai/images/sample-remove-bg-3-xs.webp"
                  alt="sample"
                  className="object-cover w-full h-full"
                />
              </button>
            </li>
            <li className="inline-block">
              <button className="w-12 h-12 overflow-hidden transition rounded hover:opacity-80">
                <img
                  src="https://assets.remove-bg.ai/images/sample-remove-bg-4-xs.webp"
                  alt="sample"
                  className="object-cover w-full h-full"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testing;
