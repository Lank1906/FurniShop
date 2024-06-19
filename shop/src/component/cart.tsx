import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { updateHandle, deleteHandle, getHandle } from "../fetch";
export default function Cart() {
  const [list, setList] = useState<any>([]);
  const [list2,setList2]=useState<any>([]);
  const [sum, setSum] = useState(0)
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const user = storedData ? JSON.parse(storedData) : "";
    getHandle("cart/" + user.customer_id, (data: any) => {
      setList(data);
    });
  }, []);
  const deleteCart = (id: number) => {
    deleteHandle(id, "cart", () => {
      setList(list.filter((item: any) => item.cart_id !== id));
    });
  };
  const changeCheck = (item: any, e: any) => {
    if (e.target.checked) {
      setSum(sum => sum + item.price*item.quantity)
      item.checked=true
      setList2([...list2,item.cart_id])
    }
    else {
      setSum(sum => sum - item.price*item.quantity)
      item.checked=false
      setList2(list2.filter((itemz:any)=>itemz!==item.cart_id))
    }
  }
  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Check</th>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-remove">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {list
                    ? list.map((item: any) => (
                      <tr key={item.cart_id}>
                        <td>
                          <input type="checkbox" name="" id="" onChange={(e: any) => changeCheck(item, e)} />
                        </td>
                        <td className="product-thumbnail">
                          <img
                            src={"/images/" + item.image_urls.split('*')[0]}
                            alt="Image"
                            className="img-fluid"
                            width={32}
                          />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">
                            {item.product_name}
                          </h2>
                        </td>
                        <td>{item.price}</td>
                        <td>
                          <div
                            className="input-group mb-3 d-flex align-items-center quantity-container"
                            style={{ maxWidth: 120 }}
                          >
                            <input
                              type="number"
                              className="form-control text-center quantity-amount"
                              defaultValue={1}
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                              value={item.quantity}
                              onChange={(e: any) => {
                                let tam = [...list]
                                if(item.checked){
                                  
                                  let te=sum+(e.target.value-item.quantity)*item.price
                                  setSum(te);
                                }
                                tam.map((itemz: any) => {
                                  if (itemz.cart_id == item.cart_id) {
                                    itemz.quantity = e.target.value
                                  }
                                  return itemz
                                })
                                setList(tam)
                              }}
                            />

                          </div>
                        </td>
                        <td>
                          <button
                            className="btn btn-black btn-sm"
                            onClick={() => deleteCart(item.cart_id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))
                    : "Cannot load data"}
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6">
                <button className="btn btn-outline-black btn-sm btn-block">
                  Continue Shopping
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" htmlFor="coupon">
                  Coupon
                </label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control py-3"
                  id="coupon"
                  placeholder="Coupon Code"
                />
              </div>
              <div className="col-md-4">
                <button className="btn btn-black">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">
                      Cart Totals
                    </h3>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">${sum}</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-black btn-lg py-3 btn-block">
                      <Link to={"/guest/checkout/"+list2.map((item:any)=>{
                          return item
                      }).join(',')} style={{ color: "white"}}>
                        Go to Checkout
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// }setSum(sum=>sum+(e.target.value-item.quantity)*item.price)
