export default function Nav() {
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Furni<span>.</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item ">
              <a className="nav-link" href="/guest">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="/guest/shop">
                Shop
              </a>
            </li>
            <li>
              <a className="nav-link" href="/guest/about">
                About us
              </a>
            </li>
            <li>
              <a className="nav-link" href="/guest/service">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="/guest/blog">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-link" href="/guest/contact">
                Contact us
              </a>
            </li>
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="/guest/login">
                <img src="/images/user.svg" />
              </a>
            </li>
            <li>
              <a className="nav-link" href="/guest/cart">
                <img src="/images/cart.svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
