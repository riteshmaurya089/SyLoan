import React from "react";
import Styles from "../Product/Products.module.css";

import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
const Products = () => {
  const navigate = useNavigate(); //maddagudu
  return (
    <div style={{background : "aliceblue",margin:'3rem auto'}}>
      {/* <h2>Products</h2> */}
      <div id={Styles.container}>
        <div className={Styles.card}>
          <div className={Styles.card1}>
            <div className={Styles.info}>
              <h4>CREDIT CARDS</h4>
              <p>
                From 35+ options, choose a card matching your lifestyle & needs
              </p>
              <h5 onClick={() => navigate("/checkEligiblity")}>
                Get Best Offers →
              </h5>
            </div>
          </div>

          <div className={Styles.card1}>
            <div className={Styles.info}>
              <h4>PERSONAL LOAN</h4>
              <p>
                Select the best offer curated just for you from a wide choice of
                Banks & NBFC's
              </p>
              <h5 onClick={() => navigate("/checkEligiblity")}>
                Check Eligibilty →
              </h5>
            </div>
         </div>

          <div className={Styles.card1}>
            <div className={Styles.info}>
              <h4>MICRO LOANS </h4>
              <p>
                Instant small ticket loans to meet your immediate cash needs
              </p>
              <h5 onClick={() => navigate("/checkEligiblity")}>
                Get Instant Loans →
              </h5>
            </div>
          </div>

          <div className={Styles.card1}>
            <div className={Styles.info}>
              <h4>BUSINESS LOAN (Under 50K)</h4>
              <p>Expand your business with loans at low interest rates</p>
              <h5 onClick={() => navigate("/checkEligiblity")}>
                Check Eligibility →
              </h5>
            </div>
          </div>

          <div className={Styles.card1}>
            <div className={Styles.info}>
              <h4>TRANSFER PERSONAL LOAN</h4>
              <p>Get better interest rates on your existing personal loan</p>
              <h5 onClick={() => navigate("/checkEligiblity")}>
                Reduce Your EMI →
              </h5>
            </div>
          </div>

          <div className={Styles.card1}>
            <div className={Styles.info}>
              <h4>HOME LOAN</h4>
              <p>
                Choose from lowest interest rates available for your dream home
              </p>
              <h5 onClick={() => navigate("/checkEligiblity")}>
                Check Eligibility →
              </h5>
            </div>
          </div>

          <div className={Styles.card1}>
            <div className={Styles.info}>
              <h4>LOAN AGAINST PROPERTY</h4>
              <p>Get liquidity against your property at best interest rates</p>
              <h5 onClick={() => navigate("/checkEligiblity")}>
                Get Best Offers →
              </h5>
            </div>
          </div>

          <div className={Styles.card1}>
            <div className={Styles.info}>
              <h4>TRANSFER HOME LOAN</h4>
              <p>Get better interest rates on your existing home loan</p>
              <h5 onClick={() => navigate("/checkEligiblity")}>
                Reduce Your EMI →
              </h5>
            </div>
          </div>

          <div className={Styles.card1}>
            <div className={Styles.info}>
              <h4>STEP UP CREDIT CARDS</h4>
              <p>A Credit Card for everyone, backed by a Fixed Deposit</p>
              <h5 onClick={() => navigate("/checkEligiblity")}>Know More →</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;
