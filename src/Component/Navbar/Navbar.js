import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar (props){

  

   let navbar_toggler = props.navbar_togglerProps


  return (
    <nav>
      <div className="brand_and_toggle">
        <div className="brand_name">DRESS PRO</div>
        <div className="toggle" onClick={navbar_toggler}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className="links_div">
        <ul>
          <li className="links">
            <Link to="/">Products</Link>
            {/* <Link to="#product_section">Products</Link> */}
          </li>
          <li className="links">
            <Link to="customer_review.html">Customers Review</Link>
          </li>
          <li className="links">
            <Link to="about_us.html">About Us</Link>
          </li>
          <li className="links">
            <Link to="company_policy.html">Company Policy</Link>
          </li>
        </ul>
      </div>
      <div className="social">
        <a
          href="https://www.instagram.com/dress.pro_"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" target="_blank" rel="noreferrer noopener">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" target="_blank" rel="noreferrer noopener">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </nav>
  );
}