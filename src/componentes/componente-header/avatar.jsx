export function Avatar(){
  return(
      <div className="flex flex-col items-center md:flex-row md:ml-4 md:mt-4">
          <div className="w-24 h-24 md:w-12 md:h-12 rounded-full overflow-hidden">
              <img
                  style={{ width: '250px' }}
                  src="src/assets/dani.png"
                  alt="Avatar"
                  className="object-cover w-full h-full"
              />
          </div>
          <h1 className="text-white mt-2 ml-4 text-lg font-bold transition duration-500 md:mt-2 md:ml-4">
              Daniel Sanchez
          </h1>
      </div>
  )
}
