import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid  py-5">
        <div className="row border-top border-3 my-2 border-warning">
          <div className="col-md-3">
            <ul className="list-group list-group-flush">
              <h5 className="list-group-item">NAVIGATE</h5>
              <li className="list-group-item">Learn More!</li>
              <li className="list-group-item">Contact Us</li>
              <li className="list-group-item">Returns</li>
              <li className="list-group-item">Shipping Info</li>
              <li className="list-group-item">Sitemap</li>
              <li className="list-group-item">Catalogs</li>
              <li className="list-group-item">Careers</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-group list-group-flush">
              <h5 className="list-group-item">CATEGORIES</h5>
              <li className="list-group-item">BOGO Sale</li>
              <li className="list-group-item">Shop by Age</li>
              <li className="list-group-item">Shop By Category</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-group list-group-flush">
              <h5 className="list-group-item">POPULAR BRANDS</h5>
              <li className="list-group-item">HABA</li>
              <li className="list-group-item">HABA Little Friends</li>
              <li className="list-group-item">HABA Kullerbu</li>
              <li className="list-group-item">Spielstabil</li>
              <li className="list-group-item">Hubelino</li>
              <li className="list-group-item">View All</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-group list-group-flush">
              <h5 className="list-group-item">INFO</h5>
              <li className="list-group-item">HABA USA</li>
              <li className="list-group-item">4407 Jordan Road</li>
              <li className="list-group-item">Skaneateles, NY 13152</li>
              <li className="list-group-item">Call us at 800-468-6873</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-5 bg-dark text-white">
        <p className="text-center">
          {" "}
          &copy; 2021 HABA USA | Privacy Policy | GDPR Policy | Terms of Use{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
