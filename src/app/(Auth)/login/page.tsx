import LoginFrom from "./LoginFrom";

export default function register() {




  
  return (
    <div className=' w-full min-h-[80vh] flex justify-center items-center '>
      <div className='w-[90%] md:w-3/4 lg:w-1/2 mx-auto  border p-5 rounded-xl bg-white dark:bg-green-100  '>
        <h1 className="text-3xl text-center font-bold py-4 text-green-500 ">Login</h1>
        <LoginFrom/>

      </div>
    </div>
  )
}
