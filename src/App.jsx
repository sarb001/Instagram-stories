
import { useState } from 'react'
import './App.css'
import { ListofStories } from './config/Data'
import { MdCancel } from 'react-icons/md';

function App() {

   const[openfullstory,setopenfullstory] = useState(false);
   const[Allfullstory,setAllfullstory]   = useState([]);
   const[StoryLoader,setStoryLoader]     = useState(false);

  const Storyshowhandler = (mainimage,name) => {   
          setopenfullstory(true);
          const NewStory = { image : mainimage, name : name }

          setStoryLoader(false);

        //  const newstory = setInterval(() => {
        //     setAllfullstory([NewStory]);
        //     console.log('moving to next');
        //   }, 5000);

         const Showtimer = setTimeout(() => {
            setAllfullstory([NewStory])
          } , 1000);

          return () => clearInterval(Showtimer);
  }

  const cancelhandler = () => {
      setopenfullstory((prev) => !prev)
  }

  return (
    <div> 
      <div className='md:hidden cursor-pointer'>

         <div className=' flex w-full overflow-x-scroll '>
            {ListofStories?.map((i,index) => {
              return (
                <div key = {index} className='my-4 mx-2' onClick={() => Storyshowhandler(i?.image,i?.name)} >
                      <div className='w-[10vh] h-[10vh]'> 
                        <img src = {i?.image} alt = {i?.name} className = ' w-full h-full object-cover rounded-4xl '  /> 
                      </div>
                   <div className = 'flex justify-center text-[10px]'> {i?.name} </div>
                </div>
              )
            })}
         </div>

            <div>
              {openfullstory && (
                  <>
                    {Allfullstory && Allfullstory?.map(i => {
                      return (
                        <div key = {i?.id}>
                              <div className='w-full z-50 h-[100vh] p-6'> 
                                <span className='absolute z-[100]  top-30 bg-gray-500 p-[1px] rounded-full '> 
                                  <MdCancel onClick={cancelhandler} className='text-3xl' /> 
                                </span>
                                <img src = {i?.image} alt = {i?.name} className=' relative  w-full h-full object-cover' /> 
                              </div>
                        </div>
                      )
                    })}
                </> )}
            </div>

          <div className='grid -z-10 justify-center  items-center h-[75vh] font-sans italic' >
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