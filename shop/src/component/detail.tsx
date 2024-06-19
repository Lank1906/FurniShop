import React, { useEffect, useState } from "react";
import { oneHandle, addHandle } from "../fetch";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sp, setSp] = useState<any>({});
  const [number, setNumber] = useState(0);
  const [color,setColor]=useState("")
  useEffect(() => {
    oneHandle(id ? parseInt(id) : 1, "detail", (data: any) => {
      setSp(data);
    });
  }, []);

  const addCart = () => {
    const user = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data")??"")
      : "";
    if (!user.customer_id) {
      navigate("/guest/login");
      return;
    }
    addHandle(
      {
        customer_id: user.customer_id,
        product_id: id,
        quantity: number,
        color: color,
      },
      "cart",
      "cart_id",
      (data: any) => {
        alert("them thanh cong");
      }
    );
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", margin: 36 }}>
        <div id="left" style={{ width: "50%" }}>
          <img src={"/images/" + sp.image_url} alt="ko load dc" width={"100%"}/>
        </div>
        <div
          id="right"
          style={{ display: "flex", flexDirection: "column", margin: 36 }}
        >
          <div>
            <h3>{sp.product_name}</h3>
          </div>
          <div>{sp.description}</div>
          <div>
            <span className="fa-regular fa-star"></span>
            <span className="fa-regular fa-star"></span>
            <span className="fa-regular fa-star"></span>
            <span className="fa-regular fa-star"></span>
            <span className="fa-regular fa-star"></span>
          </div>
          <div>99k review</div>
          <div>{sp.price}</div>
          <div>
            <h5>Color</h5>
            {sp.image_urls
              ? sp.image_urls
                  .split("*")
                  .map((item: any, index:number) => (
                    <img
                      key={index}
                      src={"/images/" + item}
                      alt=""
                      style={{ width: 80, margin: 12 }}
                      onClick={()=>
                        setColor(sp.color.split('*')[index])
                     
                      }
                    />
                  ))
              : ""}
          </div>
          <div>
            <input
              type="number"
              value={number}
              onChange={(e:any) => setNumber(e.target.value)}
            />
          </div>
          <button className="btn btn-secondary me-2" onClick={addCart}>
            Add To Cart
          </button>
          <div>
            <h5>Size</h5>
            <table style={{ width: "100%", marginLeft: 20, marginBottom: 30 }}>
              <thead>
                <tr>
                  <th>Attri</th>
                  <th>size</th>
                </tr>
              </thead>
              <tbody>
                {sp.size
                  ? sp.size.split("*").map((item: any) => {
                      const [key, value] = item.split(":");
                      return (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{value}</td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="bottom">
        <h1 style={{ marginLeft: 30 }}>Product Details</h1>
        <table style={{ width: "100%", marginLeft: 20, marginBottom: 80 }}>
          <thead>
            <tr>
              <th>Attri</th>
              <th>size</th>
            </tr>
          </thead>
          <tbody>
            {sp.detail_description
              ? sp.detail_description.split("*").map((item: any) => {
                  const [key, value] = item.split(":");
                  return (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
