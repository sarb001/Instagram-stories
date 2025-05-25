
import './App.css'
import { ListofStories } from './config/Data'

function App() {

  return (
    <div> 
      <div className='md:hidden'>

         <div className=' flex w-full overflow-x-scroll '>
            {ListofStories?.map(i => {
              return (
                <div key = {i?.id} className='my-4 mx-2'>
                      <div className='w-[10vh] h-[10vh]'> 
                        <img src = {i?.image} alt = {i?.name} className = 'w-full h-full object-cover rounded-4xl '  /> 
                      </div>
                   <div className = 'flex justify-center text-[10px]'> {i?.name} </div>
                </div>
              )
            })}
         </div>

          <div className='grid justify-center  items-center h-[75vh] font-sans italic' >
            <div>
              <div> Instagram Stories </div>
              <div> For Mobile View only </div>
            </div>
          </div>
      </div>

        <div className='hidden justify-center items-center md:flex md:bg-black md:text-red-400'>
              <div className='text-4xl'>  Change to Mobile View </div>
        </div>
    </div>
  )
}

export default App

// view series of stories  -short disspear after 15 sec 
// mobile only 
// horizontal left - rght 
                                                                                                                                     
// fetch list form stories 
// startviewing => 
 // ui control for navigation  prevbtn  nextbtn

//  move automatically after 5 sec /

// use loader 

//use transitions