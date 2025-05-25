
import './App.css'

function App() {

  const ListofStories = [
    { id : 1 , image : "https://www.shutterstock.com/image-photo/happy-young-man-sitting-home-260nw-2248472067.jpg" , name : " Amandeep " },
    { id : 2 , image : "https://c.pxhere.com/photos/1e/73/portrait_man_man_portrait_male_person_adult_face_caucasian-601668.jpg!d" , name : " diljeet " },
    { id : 3 , image : "https://thumbs.dreamstime.com/b/natural-looking-young-beautiful-woman-hazel-eyes-posing-fields-natural-looking-young-beautiful-woman-hazel-eyes-230310435.jpg" , name : " ranveer " },
    { id : 4 , image : "https://png.pngtree.com/background/20231210/original/pngtree-making-stop-people-happy-single-photo-picture-image_6772295.jpg" , name : " Alia " },
    { id : 5 , image : "https://images.unsplash.com/photo-1619950481763-a39e29f3b1e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMG5pZ2h0fGVufDB8fDB8fHww" , name : " vanveer " }
  ]

  return (
    <div>
      <div>
         {/* <button className='bg-gray-500 px-2'> Prev </button> */}

         <div className=' flex w-full overflow-x-scroll '>
            {ListofStories?.map(i => {
              return (
                <div key = {i?.id} className='my-4 mx-2'>
                      <div className='w-[10vh] h-[10vh]'> 
                        <img src = {i?.image} alt = {i?.name} className = 'w-full h-full object-cover rounded-4xl '  /> 
                      </div>
                   <div className = 'text-[10px]'> {i?.name} </div>
                </div>
              )
            })}
         </div>
         {/* <button className='bg-gray-500 px-2'> Next </button> */}
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