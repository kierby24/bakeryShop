import {
    ClipboardList,
    UserRound,
    ShoppingBag
  } from "lucide-react";
  
  function RecentActivity() {
  
    const activities = [
      {
        icon: ClipboardList,
        time: "3 hours ago"
      },
      {
        icon: UserRound,
        time: "2 hours ago"
      },
      {
        icon: ShoppingBag,
        time: "3 hours ago"
      }
    ];
  
    return (
      <section className="card activity-card">
  
        <h2>Recent Activity</h2>
  
        <div className="activity-list">
  
          {activities.map((activity, index) => {
  
            const Icon = activity.icon;
  
            return (
              <div
                className="activity-item"
                key={index}
              >
  
                <div className="activity-icon">
                  <Icon size={17} />
                </div>
  
                <div className="activity-content">
  
                  <p>
                    Alex R an dolor sit amet, consectetur
                    adipiscing elit, sed an reed.
                  </p>
  
                  <span>
                    {activity.time}
                  </span>
  
                </div>
  
              </div>
            );
          })}
  
        </div>
  
      </section>
    );
  }
  
  export default RecentActivity;