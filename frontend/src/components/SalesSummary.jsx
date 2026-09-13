import { ChevronDown } from "lucide-react";

function SalesSummary() {

  const sales = [
    {
      day: "Mon",
      purple: 78,
      yellow: 48
    },
    {
      day: "Tue",
      purple: 140,
      yellow: 84
    },
    {
      day: "Wed",
      purple: 158,
      yellow: 120
    },
    {
      day: "Thu",
      purple: 232,
      yellow: 170
    },
    {
      day: "Fri",
      purple: 115,
      yellow: 210
    },
    {
      day: "Sat",
      purple: 98,
      yellow: 160
    }
  ];

  return (
    <section className="card sales-card">

      <div className="card-heading">

        <div>
          <h2>Sales Summary</h2>
          <p>Today's performance</p>
        </div>

        <button className="period-select">
          Today
          <ChevronDown size={15} />
        </button>

      </div>

      <div className="chart">

        <div className="chart-y-axis">
          <span>250</span>
          <span>200</span>
          <span>150</span>
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>

        <div className="chart-area">

          <div className="chart-lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="bars">

            {sales.map((item, index) => (

              <div className="bar-group" key={index}>

                <div className="bar-container">

                  <div
                    className="bar purple"
                    style={{
                      height: `${item.purple / 1.15}px`
                    }}
                  ></div>

                  <div
                    className="bar gold"
                    style={{
                      height: `${item.yellow / 1.15}px`
                    }}
                  ></div>

                </div>

                <span className="day">
                  {item.day}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default SalesSummary;