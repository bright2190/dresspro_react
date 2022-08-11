import './Navbar.css'
export default function Navbar (){
  return (
    <nav>
      <div class="brand_and_toggle">
        <div class="brand_name">DRESS PRO</div>
        <div class="toggle">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div class="links_div">
        <ul>
          <li class="links">
            <a href="#product_section">Products</a>
          </li>
          <li class="links">
            <a href="customer_review.html">Customers Review</a>
          </li>
          <li class="links">
            <a href="about_us.html">About Us</a>
          </li>
          <li class="links">
            <a href="company_policy.html">Company Policy</a>
          </li>
        </ul>
      </div>
      <div class="social">
        <a
          href="https://www.instagram.com/dress.pro_"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" target="_blank" rel="noreferrer noopener">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" target="_blank" rel="noreferrer noopener">
          <i class="fab fa-facebook-f"></i>
        </a>
      </div>
    </nav>
  );
}