"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { ethers } from "ethers";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

declare global {
  interface Window {
    ethereum?: any;
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [web3, setWeb3] = useState<any>();
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      // Initialize Web3 with MetaMask provider
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      // Request access to accounts
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts: React.SetStateAction<never[]>) =>
          setAccounts(accounts)
        )
        .catch((error: any) => console.error(error));
    } else {
      console.error("MetaMask extension not detected");
    }
  }, []);

  const handleConnectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        // Request access to accounts
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccounts(accounts);
        console.log(accounts, "accounts");
      } else {
        alert("MetaMask extension not detected");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAccountChange = (event: any) => {
    setSelectedAccount(event.target.value);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="wrap"
          style={{
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "215px",
            fontFamily:
              "-apple-system,BlinkMacSystemFont,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji",
          }}
        >
          <nav
            className="navbar navbar-dark fixed-top d-flex"
            style={{ margin: "0", backgroundColor: "white" }}
          >
            <div
              className="namelogo"
              style={{ display: "grid", gridTemplateColumns: " 1fr auto" }}
            >
              <div className="logo-text-grid" style={{ display: "flex" }}>
                <a
                  className="navbar-brand"
                  href="#"
                  style={{ marginLeft: "10px" }}
                >
                  <img
                    className="img-fluid"
                    src="./images/hyfaLogo.png"
                    alt="logo"
                    style={{ height: "40px", width: "40px" }}
                  />
                  <span
                    style={{
                      paddingLeft: "5px",
                      color: "#E45706",
                      fontSize: "25px",
                      fontWeight: "500",
                    }}
                  >
                    LaunchPad
                  </span>
                </a>
                <h5
                  className="col-2 d-flex justify-content-center"
                  style={{
                    paddingLeft: "200px",
                    paddingTop: "13px",
                    color: "#E45706",
                    fontSize: "17px",
                    fontWeight: "500",
                  }}
                >
                  DashBoard
                </h5>
                <h5
                  className="col-4 d-flex justify-content-center"
                  style={{
                    paddingLeft: "60px",
                    paddingTop: "13px",
                    color: "#E45706",
                    fontSize: "17px",
                    fontWeight: "500",
                  }}
                >
                  Upcoming Projects
                </h5>
                <h5
                  className="col-3  d-flex justify-content-center"
                  style={{
                    color: "#E45706",
                    paddingTop: "12px",
                    fontSize: "17px",
                    fontWeight: "500",
                  }}
                >
                  My Investments
                </h5>
                <h5
                  className="col-2 d-flex justify-content-center"
                  style={{
                    paddingTop: "12px",
                    color: "#E45706",
                    fontSize: "17px",
                    fontWeight: "500",
                  }}
                >
                  Whitelist
                </h5>
              </div>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="btn rounded-pill mx-1"
                style={{ backgroundColor: "#ffdda9", color: " #12022f" }}
                onClick={handleConnectWallet}
              >
                Connect Wallet
              </button>
            </div>
            {/* <div
              className="trendBar d-flex"
              style={{ width: "100%", justifyContent: "flex-end", margin: "0" }}
            >
              <section
                style={{
                  backgroundColor: "#E45706",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "300",
                }}
                className="d-flex w-100 align-items-center col-12 pt-1"
              >
                <h5 className="col-1 d-flex justify-content-center">Home</h5>
                <h5 className="col-1 d-flex justify-content-center">
                  Launch Pads
                </h5>
              </section>
            </div> */}
          </nav>

          <div
            className="page"
            style={{
              backgroundImage: "url('images/background.png')",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2
              style={{
                display: "flex",
                fontSize: "70px",
                fontWeight: "700",
                color: " #fff",
                paddingTop: "80px",
                paddingLeft: "200px",
                paddingRight: "240px",
              }}
            >
              Invest in the future leaders of Web3
            </h2>
            <p
              className="col-5 d-flex justify-content-center"
              style={{
                display: "flex",
                paddingLeft: "110px",
                paddingTop: "60px",
                paddingRight: "40px",
                color: " #fff",
              }}
            >
              Highly-vetted ideas and teams you can trust. Supported by
              industry-leading creators & funds.
            </p>
            <button
              type="button"
              className="btn btn-danger"
              style={{
                display: "flex",
                marginLeft: "110px",
                paddingInlineStart: "35px",
                paddingInlineEnd: "35px",
                paddingBottom: "5px",
              }}
            >
              <Link
                href="/launchpads"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Visit Projects
              </Link>
            </button>
          </div>

          {/* <footer className="footer">
      <div className="container">
        <div className="footer-content" >
          <nav>
          </nav>
          <p className="copyright">Your Company Name</p>
        </div>
      </div>
    </footer> */}
          {/* <footer>
  <div className="container">
    <div className="footer-content" style={{backgroundColor : "black", width: "100%"}}>
      
    
      <div className="footer-content-align"style={{display: "flex", flexWrap : "nowrap", justifyContent: "space-between"}}>
      <div className="w-auto" style={{color: "white", fontWeight: "600" }}>
      <p className="footer-bottem-text" >Email.</p>
      <p className="footer-bottem-text">Social.</p>
      <p className="footer-bottem-text">Address.</p>
      </div>

      <div className="w-auto"style={{ color: "white", paddingLeft: "30px"}}>
      <p className="footer-bottem-text">info@hyfatech.com</p>
      <img src="./images/linkedin.png" style={{borderRadius: "3px", width: "18px", paddingBottom: "20px"}}></img>
      <p className="footer-bottem-text">387 Park Avenue South, 5th Floor New York, NY10016 United States</p>
      </div>
      </div>

      <div className="w-auto"style={{ color: "white", paddingRight: "50px"}}>
      <p >CopyRights© 2024HYFATech</p>
      </div>

    </div>
  </div>
</footer> */}
          <footer style={{ paddingTop: "100px" }}>
            <div className="container">
              <div
                className="footer-content"
                style={{ backgroundColor: "black", width: "100%" }}
              >
                <div
                  className="footer-content-align"
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="footer-column"
                    style={{ color: "white", fontWeight: "600" }}
                  >
                    <p className="footer-text">Email.</p>
                    <p className="footer-text">Social.</p>
                    <p className="footer-text">Address.</p>
                  </div>

                  <div
                    className="footer-column"
                    style={{ color: "white", paddingLeft: "40px" }}
                  >
                    <p className="footer-text">info@hyfatech.com</p>
                    <a href="https://www.linkedin.com/company/hyfatech/mycompany/" target="_blank">
                    <img src="./images/linkedin.png" alt="LinkedIn icon"style={{
                        borderRadius: "3px",
                        width: "18px",
                        paddingBottom: "20px",
                      }}/>
                    </a>
                    <p className="footer-text">
                      387 Park Avenue South, 5th Floor, New York, NY 10016,
                      United States
                    </p>
                  </div>

                  <div
                    className="footer-column"
                    style={{
                      color: " white",
                      textAlign: "right",
                      paddingLeft: "40px",
                    }}
                  >
                    <p className="footer-text">CopyRights© 2024 HYFATech</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <div className="">
            <div
              className=""
              style={{
                color: "black",
              }}
            ></div>
            <div className="">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
