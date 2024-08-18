import Image from 'next/image';
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="newsletter-contact">
          <div className="newsletter">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <div className="subscribe">
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div className="contact-currency">
            <div className="contact">
              <h3>CONTACT US</h3>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div className="currency">
              <h3>CURRENCY</h3>
              <p>
                <Image src="/us.png" alt="USD icon" width={24} height={24} /> USD
              </p>
              <p>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr className="footer-separator" />

        <div className="links">
          <div className="link-section">
            <h3>mettā muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="link-section">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="follow-us">
            <h3>FOLLOW US</h3>
            <p>
              <Image src="/Insta.png" alt="Instagram" width={24} height={24} />
              <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </p>
            <h3>mettā muse ACCEPTS</h3>
            <p className="payment-icons">
              <Image src="/applepay.png" alt="Apple Pay" width={24} height={24} />
              <Image src="/gpay.png" alt="Google Pay" width={24} height={24} />
              <Image src="/visa1.png" alt="Visa" width={24} height={24} />
              <Image src="/qpay.png" alt="Mastercard" width={24} height={24} />
              <Image src="/pay.png" alt="PayPal" width={24} height={24} />
              <Image src="/amex.png" alt="AMEX" width={24} height={24} />
            </p>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
