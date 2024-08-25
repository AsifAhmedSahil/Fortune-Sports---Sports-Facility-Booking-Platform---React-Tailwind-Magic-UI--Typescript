

const HowItWorks = () => {
  return (
    <section className="relative py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="relative">
          {/* Road line */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-gray-300"></div>
          </div>
          {/* Steps */}
          <div className="relative flex flex-col items-center lg:flex-row lg:justify-between lg:space-x-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-full lg:w-1/3 mb-8 lg:mb-0">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">1</div>
              <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center">
                <h3 className="text-xl font-semibold mb-4">Step 1</h3>
                <p className="text-gray-700">Sign up and create an account with Fortune Sports.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center w-full lg:w-1/3 mb-8 lg:mb-0">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">2</div>
              <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center">
                <h3 className="text-xl font-semibold mb-4">Step 2</h3>
                <p className="text-gray-700">Browse available sports facilities and select your preferred one.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center w-full lg:w-1/3 mb-8 lg:mb-0">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">3</div>
              <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center">
                <h3 className="text-xl font-semibold mb-4">Step 3</h3>
                <p className="text-gray-700">Book your facility and enjoy your game!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks