import { useState, useEffect } from "react";
import { getHandle } from "../fetch";
export default function ProductFirst() {
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    getHandle("random", (data: any) => {
      setList(data);
    });
  }, []);
  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          {/* Start Column 1 */}
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">
              Crafted with excellent material.
            </h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
            </p>
            <p>
              <a href="shop.html" className="btn">
                Explore
              </a>
            </p>
          </div>

          {/* End Column 1 */}
          {list
            ? list.map((item: any) => (
                <div
                  className="col-12 col-md-4 col-lg-3 mb-5"
                  key={item.product_id}
                >
                  <a
                    className="product-item"
                    href={"/guest/detail/" + item.product_id}
                  >
                    <img
                      src={"/images/" + item.image_url}
                      className="img-fluid product-thumbnail"
                    />
                    <h3 className="product-title">{item.product_name}</h3>
                    <strong className="product-price">{item.price}d</strong>
                    <span className="icon-cross">
                      <img src="/images/cross.svg" className="img-fluid" />
                    </span>
                  </a>
                </div>
              ))
            : "cannot get data"}
        </div>
      </div>
    </div>
  );
}
