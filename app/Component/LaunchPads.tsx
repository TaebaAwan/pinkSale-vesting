import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

export default function LaunchPads() {
  const cardBlocks = [
    {
      pic: "baby shamu.png",
      button: "Upcoming",
      title: "BABY SHAMU",
      value: "Fair Launch ",
      launchType: "Soft",
      coinCap: "1 BNB",
      progress: "(0.00%)",
      progressNumber: "60",
      liquidity: "100%",
      lockTime: "365 days",
      startAmount: "0 BNB",
      endAmount: "1 BNB",
    },
    {
      pic: "Tangyuan.png",
      bg: "background.png",
      button: "Upcoming",
      title: "Tangyuan",
      value: "1 USDT = 3,100 Tangyuan ",
      launchType: "Soft/Hard",
      coinCap: "5,000 USDT - 20,000 USDT",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "100 days",
      startAmount: "0 USDT",
      endAmount: "20,000 USDT",
    },
    {
      pic: "bsc.png",
      button: "Upcoming",
      title: "Crypto Funded Projects",
      value: "1 USDC = 1.1 CFP",
      launchType: "Soft/Hard",
      coinCap: "100,000 USDC - 400,000 USDC",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "31 days",
      startAmount: "0 USDC",
      endAmount: "400,000 USDC",
    },
    {
      pic: "skillon.png",
      button: "Sale LIVE",
      title: "Skillon",
      value: "Fair Launch",
      launchType: "Soft",
      coinCap: "20 BNB",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "90 days",
      startAmount: "0 BNB",
      endAmount: "20 BNB",
    },
    {
      pic: "skillon.png",
      button: "Sale LIVE",
      title: "Skillon",
      value: "Fair Launch",
      launchType: "Soft",
      coinCap: "20 BNB",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "90 days",
      startAmount: "0 BNB",
      endAmount: "20 BNB",
    },
    {
      pic: "skillon.png",
      button: "Sale LIVE",
      title: "Skillon",
      value: "Fair Launch",
      launchType: "Soft",
      coinCap: "20 BNB",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "90 days",
      startAmount: "0 BNB",
      endAmount: "20 BNB",
    },
    {
      pic: "skillon.png",
      button: "Sale LIVE",
      title: "Skillon",
      value: "Fair Launch",
      launchType: "Soft",
      coinCap: "20 BNB",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "90 days",
      startAmount: "0 BNB",
      endAmount: "20 BNB",
    },
    {
      pic: "skillon.png",
      button: "Sale LIVE",
      title: "Skillon",
      value: "Fair Launch",
      launchType: "Soft",
      coinCap: "20 BNB",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "90 days",
      startAmount: "0 BNB",
      endAmount: "20 BNB",
    },
  ];

  return (
    <div className="col-md-12 pt-4 d-flex flex-wrap">
      {cardBlocks?.map((item, index) => {
        return (
          <>
            <div className="col-md-3 p-2">
              <div className="card">
                <div className="card-body">
                  <div className=" justify-content-between mt-4">
                    <div
                      className="d-flex"
                      style={{ justifyContent: "space-between", width: "100%" }}
                    >
                      <img
                        src={`/images/${item.pic}`}
                        alt={item.title}
                        style={{
                          display: "flex",
                          alignItems: "left",
                          height: "60px",
                          width: "60px",
                        }}
                      />
                      <button
                        type="button"
                        className="btn rounded-pill  mx-1"
                        style={{
                          height: "25px",
                          padding: "0 10px",
                          backgroundColor: "#ffdda9",
                          color: "#E45706",
                          justifyItems: "space-between",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        <i
                          className="bi bi-circle-fill"
                          style={{ fontSize: "8px", marginRight: "5px" }}
                        ></i>
                        {item.button}
                      </button>
                    </div>
                    <div
                      className="flex-fill mr-1"
                      style={{ fontWeight: "bold", fontSize: "22px" }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="flex-fill mr-1"
                      style={{
                        fontWeight: "600",
                        fontSize: "15px",
                        color: "#888",
                      }}
                    >
                      {item.value}
                    </div>
                    <div
                      className="flex-fill mr-1"
                      style={{
                        fontWeight: "600",
                        fontSize: "15px",
                        color: "#222",
                      }}
                    >
                      {item.launchType}
                    </div>
                    <div
                      className="flex-fill mr-1"
                      style={{
                        fontWeight: "600",
                        fontSize: "20px",
                        color: "#615b58",
                      }}
                    >
                      {item.coinCap}
                    </div>

                    <div className="d-flex " style={{ marginTop: "20px" }}>
                      <div className="d-flex align-items-right ">
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <button
                            type="button"
                            className="btn rounded-pill  mx-1"
                            style={{
                              backgroundColor: "#ffdda9",
                              color: "#E45706",
                            }}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}