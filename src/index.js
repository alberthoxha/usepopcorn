import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import StarRating from "./StarRating"
import App from "./App"

// function Test() {
//   const [movieRating, setMovieRating] = useState(0)

//   return (
//     <div>
//       <StarRati ng
//         color="orangered"
//         maxRating={5}
//         onSetRating={setMovieRating}
//       />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRaring={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      size={24}
      color="blue"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
    {/* <Test /> */}
    {/* <App /> */}
  </React.StrictMode>
)
