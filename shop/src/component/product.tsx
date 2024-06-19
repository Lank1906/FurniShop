import { useEffect, useState } from "react";
import { getHandle } from "../fetch";
export default function Product(props: any) {
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    getHandle("list/0", (data: any) => {
      setList(data);
    });
  }, []);
  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: 24 }}>{props.title}</h1>
        <div className="row">
          {list.map((item: any) => (
            <div className="col-12 col-md-4 col-lg-3 mb-5">
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
          ))}
        </div>
      </div>
    </div>
  );
}
