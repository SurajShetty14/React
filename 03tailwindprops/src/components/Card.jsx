import React from 'react'

function Card({userName = "HC",post="Not yet assigned", img="https://images.pexels.com/photos/3476860/pexels-photo-3476860.jpeg?auto=compress&cs=tinysrgb&w=600"}) {              //function Card(props) {       {props.userName}
    //console.log(props);
  return (
    <div>
       <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src={img}/>
    <div class="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ratione.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div>
        {userName}
      </div>
      <div>
        {post}
      </div>
    </figcaption>
    </div>
    </figure>
    </div>
  )
}

export default Card