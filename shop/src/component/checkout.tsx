import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getHandle } from "../fetch";
export default function CheckOut() {
  let { ids } = useParams();
  const [list, setList] = useState<any>([])
  const [user,setUser]=useState<any>({})
  const navigate=useNavigate()

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const users = storedData ? JSON.parse(storedData) : "";
    setUser(users)
    getHandle("subcart/" + ids, (data: any) => {
      setList(data)
    })
  }, [])
  const billHandle=()=>{
    getHandle("bill/"+ids,()=>{
      navigate('/guest/thankyou')
    })
  }
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black">Billing Details</h2>
            <div className="p-3 p-lg-5 border bg-white">

              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="c_fname" className="text-black">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_fname"
                    name="c_fname"
                    value={user.customer_name}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_lname" className="text-black">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_lname"
                    name="c_lname"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_companyname" className="text-black">
                    Company Name{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_companyname"
                    name="c_companyname"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_address" className="text-black">
                    Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_address"
                    name="c_address"
                    placeholder="Street address"
                    value={user.address}
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment, suite, unit etc. (optional)"
                />
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="c_state_country" className="text-black">
                    State / Country <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_state_country"
                    name="c_state_country"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_postal_zip" className="text-black">
                    Posta / Zip <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_postal_zip"
                    name="c_postal_zip"
                  />
                </div>
              </div>
              <div className="form-group row mb-5">
                <div className="col-md-6">
                  <label htmlFor="c_email_address" className="text-black">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_email_address"
                    name="c_email_address"
                    value={user.email}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_phone" className="text-black">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_phone"
                    name="c_phone"
                    placeholder="Phone Number"
                    value={user.phone}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="collapse" id="ship_different_address">
                  <div className="py-2">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label htmlFor="c_diff_fname" className="text-black">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="c_diff_fname"
                          name="c_diff_fname"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="c_diff_lname" className="text-black">
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="c_diff_lname"
                          name="c_diff_lname"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <label
                          htmlFor="c_diff_companyname"
                          className="text-black"
                        >
                          Company Name{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="c_diff_companyname"
                          name="c_diff_companyname"
                        />
                      </div>
                    </div>
                    <div className="form-group row  mb-3">
                      <div className="col-md-12">
                        <label htmlFor="c_diff_address" className="text-black">
                          Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="c_diff_address"
                          name="c_diff_address"
                          placeholder="Street address"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apartment, suite, unit etc. (optional)"
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label
                          htmlFor="c_diff_state_country"
                          className="text-black"
                        >
                          State / Country <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="c_diff_state_country"
                          name="c_diff_state_country"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="c_diff_postal_zip"
                          className="text-black"
                        >
                          Posta / Zip <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="c_diff_postal_zip"
                          name="c_diff_postal_zip"
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-5">
                      <div className="col-md-6">
                        <label
                          htmlFor="c_diff_email_address"
                          className="text-black"
                        >
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="c_diff_email_address"
                          name="c_diff_email_address"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="c_diff_phone" className="text-black">
                          Phone <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="c_diff_phone"
                          name="c_diff_phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="c_order_notes" className="text-black">
                  Order Notes
                </label>
                <textarea
                  name="c_order_notes"
                  id="c_order_notes"
                  cols={30}
                  rows={5}
                  className="form-control"
                  placeholder="Write your notes here..."
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row mb-5" style={{ marginTop: 20 }}>
              <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                <div className="p-3 p-lg-5 border bg-white">
                  <label htmlFor="c_code" className="text-black mb-3">
                    Enter your coupon code if you have one
                  </label>
                  <div className="input-group w-75 couponcode-wrap">
                    <input
                      type="text"
                      className="form-control me-2"
                      id="c_code"
                      placeholder="Coupon Code"
                      aria-label="Coupon Code"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-black btn-sm"
                        type="button"
                        id="button-addon2"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">

            <div className="row mb-5">
              <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">Your Order</h2>
                <div className="p-3 p-lg-5 border bg-white">
                  <table className="table site-block-order-table mb-5">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list ? list.map((item: any) => (
                        <tr>
                          <td>
                            {item.product_name} <strong className="mx-2">x</strong> {item.quantity}
                          </td>
                          <td>${item.price}</td>
                        </tr>
                      )) : "cannot get data"}

                      <tr>
                        <td className="text-black font-weight-bold">
                          <strong>Order Total</strong>
                        </td>
                        <td className="text-black font-weight-bold">
                          <strong>${list.reduce((summ:number,object:any)=>summ+object.price*object.quantity,0)}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="border p-3 mb-3">
                    <h3 className="h6 mb-0">
                      <a
                        className="d-block"
                        data-bs-toggle="collapse"
                        href="#collapsebank"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapsebank"
                      >
                        Direct Bank Transfer
                      </a>
                    </h3>
                    <div className="collapse" id="collapsebank">
                      <div className="py-2">
                        <p className="mb-0">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order won’t be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border p-3 mb-3">
                    <h3 className="h6 mb-0">
                      <a
                        className="d-block"
                        data-bs-toggle="collapse"
                        href="#collapsecheque"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapsecheque"
                      >
                        Cheque Payment
                      </a>
                    </h3>
                    <div className="collapse" id="collapsecheque">
                      <div className="py-2">
                        <p className="mb-0">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order won’t be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border p-3 mb-5">
                    <h3 className="h6 mb-0">
                      <a
                        className="d-block"
                        data-bs-toggle="collapse"
                        href="#collapsepaypal"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapsepaypal"
                      >
                        Paypal
                      </a>
                    </h3>
                    <div className="collapse" id="collapsepaypal">
                      <div className="py-2">
                        <p className="mb-0">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order won’t be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-black btn-lg py-3 btn-block"
                    //   onClick="window.location='thankyou.html'"
                    >
                      <div onClick={billHandle}style={{ color: "white" }}>
                        Place Order
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
