
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-300 w-screen">
      <div className="flex flex-col items-center mt-36 h-screen bg-yellow-300 w-screen">
        <h1 className="text-5xl font-bold mb-4">Welcome to Sagarmatha</h1>
        <p className="text-lg mb-8">Your one-stop shop for all your needs!</p>
        <a href="#products" className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 hover:underline transition duration-300">Shop Now</a>
      </div>
        <h3 className="text-3xl font-bold mt-48">Our Products are from the companies like</h3>
      <div className="flex space-x-2 mt-4 border-t-2 border-black bg-yellow-300 w-screen text-left">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrN1WeRby6nfD6NBcbewn7RU19NUKn80Herg&s" alt="JCB" className="h-36 w-36 ml-7" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4q66dy4ndP_c7oFetKJmMDWurcVnDoFChA&s" alt="Tata" className="h-36 w-36 ml-7" />
        </div>
        <div>
          <img src="https://i.etsystatic.com/51118758/r/il/f08e6e/6069285333/il_fullxfull.6069285333_3j57.jpg" alt="Komatsu" className="h-36 w-36 ml-7" />
        </div>
        <div>
          <img src="https://static.vecteezy.com/system/resources/previews/020/500/331/non_2x/hyundai-logo-brand-symbol-with-name-blue-design-south-korean-car-automobile-illustration-free-vector.jpg" alt="Hyundai" className="h-36 w-36 ml-7" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeROEAegiHsev7DcBe_HTnnD_LocHJEz8cw&s" alt="CAT" className="h-36 w-36 ml-7" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLf0fQV4aouHVG8DTFtOrzLpe2rhGfTFfcMQ&s" alt="CASE" className="h-36 w-36 ml-7" />
        </div>
        <div>
          <img src="https://st.hzcdn.com/simgs/07c3676307751ef5_3-3230/_.jpg" alt="HP" className="h-36 w-36 ml-7" />
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Gulf_logo.png" alt="GULF" className="h-36 w-36 ml-7" />
        </div>

      </div>
    </div>
  )
}

export default Home