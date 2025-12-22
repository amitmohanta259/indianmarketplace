import React from "react";

import img1 from "../../assets/adminutil/image/pexels-artem-saranin-1496373.jpg";
import img2 from "../../assets/adminutil/image/pexels-craig-adderley-1563356.jpg";
import img3 from "../../assets/adminutil/image/pexels-delcho-dichev-1651165.jpg";
import img4 from "../../assets/adminutil/image/pexels-nikita-lyamkin-1553406.jpg";
import img5 from "../../assets/adminutil/image/pexels-pixabay-247431.jpg";
import img6 from "../../assets/adminutil/image/pexels-pixabay-459225.jpg";
import img7 from "../../assets/adminutil/image/pexels-rahul-716398.jpg";
import img8 from "../../assets/adminutil/image/pexels-rahul-716398.jpg";
import img9 from "../../assets/adminutil/image/pexels-delcho-dichev-1651165.jpg";
import img10 from "../../assets/adminutil/image/pexels-roberto-shumski-1903702.jpg";

const DashboardContent: React.FC = () => {
  const cardImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  return (
    <div className="container-fluid">
      <h4 className="mb-3">
        Dashboard
      </h4>


      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardImages.map((image, index) => (
          <div key={index} className="col">
            <div className="card">
              <img
                src={image}
                className="card-img-top"
                height="200"
                alt={`Dashboard card ${index + 1}`}
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
