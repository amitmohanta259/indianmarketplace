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

/** Card data structure */
interface DashboardCard {
  img: string;
  header: string;
  description: string;
}

const DashboardContent: React.FC = () => {
  const dashboardData: DashboardCard[] = [
    { img: img1, header: "User Analytics", description: "View detailed insights and trends about user activity." },
    { img: img2, header: "Sales Overview", description: "Track sales performance and revenue statistics." },
    { img: img3, header: "Performance Metrics", description: "Analyze team and individual performance indicators." },
    { img: img4, header: "Reports", description: "Generate detailed reports for management review." },
    { img: img5, header: "Notifications", description: "Monitor system alerts and notifications." },
    { img: img6, header: "Settings", description: "Configure application and user preferences." },
    { img: img7, header: "Support", description: "Access help and support resources." },
    { img: img8, header: "Activity Logs", description: "Check system activity and audit logs." },
    { img: img9, header: "Feedback", description: "View and respond to user feedback." },
    { img: img10, header: "Integrations", description: "Manage third-party integrations and API connections." },
  ];

  return (
    <div
      className="container-fluid"
      style={{
        paddingTop: "1rem",
      }}
    >
      <h4 className="mb-3">Dashboard</h4>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {dashboardData.map((card, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img src={card.img} className="card-img-top" height={200} alt={card.header} />
              <div className="card-body">
                <h5 className="card-title">{card.header}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
