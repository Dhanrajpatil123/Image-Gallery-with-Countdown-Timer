import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import Boy1 from "../assets/Images/boy1.png";
import Boy2 from "../assets/Images/boy2.png";
import Doctor from "../assets/Images/doctor3.png";
import "./ImageGallery.css"; // Import CSS file for custom styles

function ImageGallery() {
  const Photos = [
    { id: 0, name: "Waterfall", Type: "Nature", Likes: 20, img_url: Boy1 },
    { id: 1, name: "Grass", Type: "Nature", Likes: 15, img_url: Boy1 },
    { id: 2, name: "Tree", Type: "Nature", Likes: 25, img_url: Boy1 },
    { id: 3, name: "Girl Art", Type: "Art", Likes: 30, img_url: Boy2 },
    { id: 4, name: "Boy Art", Type: "Art", Likes: 18, img_url: Boy2 },
    { id: 5, name: "Building Art", Type: "Art", Likes: 22, img_url: Boy2 },
    { id: 6, name: "Technology IT", Type: "Tech", Likes: 3, img_url: Doctor },
    { id: 7, name: "IT", Type: "Tech", Likes: 28, img_url: Doctor },
  ];



  const [filteredPhotos, setFilteredPhotos] = useState(Photos);


  const filteredFunction = (str) => {

    if (str === "all"){
        setFilteredPhotos(Photos);
    } 
    else{
        setFilteredPhotos(Photos.filter((item) => 
            item.Type.toLowerCase().includes(str.toLowerCase())
        ));
    }
  }



  const sortFunction = (sortData, x, y) => {
    if (sortData) {
      const SortedPhotos = [...filteredPhotos].sort((a, b) =>
        a[sortData] > b[sortData] ? x : y
      );
  
      setFilteredPhotos(SortedPhotos);
    }
  };




  const[searchQuery, setSearch] = useState("");
  console.log("searchh q", searchQuery)



  const searchPhoto = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (searchQuery) {
        setFilteredPhotos(Photos.filter((item) => 
            item.Type.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    } else {
        setFilteredPhotos(Photos); // Reset to all photos if empty search
    }
};





  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Welcome To Photo Gallery</h2>

      <div>
        <button onClick={() => filteredFunction("all")}>All</button>
        <button onClick={() => filteredFunction("Art")}>Art</button>
        <button onClick={() => filteredFunction("nature")}>Technology</button>
        <button onClick={() => filteredFunction("tech")}>Nature</button>
      </div>



      <div>
        <button onClick={()=>sortFunction('Likes', '-1', '1')}>Like(greater values first)</button>
        <button onClick={()=>sortFunction('Likes', '1', '-1')}>Like(small values first)</button>
        <button onClick={() => sortFunction('name', '-1', '1')}>Name(z-a)</button>
        <button onClick={() => sortFunction('name', '1', '-1')}>Name(a-z)</button>
      </div>




        <div>
        <form onSubmit={searchPhoto}>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <input type="submit" value="Search" />
        </form>
        </div>






      <div className="row justify-content-center">
        {filteredPhotos.map((item) => (
          <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card custom-card shadow-sm">
              <div className="image-container">
                <img src={item.img_url} alt={item.name} className="card-img-top img-fluid zoom-effect" />
              </div>
              <div className="card-body text-center">
                <h6 className="card-title">{item.name}</h6>
                <p className="card-text">❤️ {item.Likes} Likes</p>
                <button className="btn btn-primary btn-sm">View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
