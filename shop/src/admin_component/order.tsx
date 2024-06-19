import { useEffect, useState } from "react";
import { getHandle, addHandle, updateHandle, deleteHandle } from "../fetch";
export default function Order() {
  const [list, setList] = useState<any>(null);
  const [list2, setList2] = useState<any>(null); //order_details
  const [list3, setList3] = useState<any>(null); //product
  const [product, setProduct] = useState(0);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    getHandle("orders", (data: any) => setList(data));
  }, []);

  useEffect(() => {
    getHandle("order_details/by/" + id, (data: any) => setList2(data));
  }, [id]);

  useEffect(() => {
    getHandle("products", (data: any) => setList3(data));
  }, []);

  const textUpdate = (item: any) => {
    setId(item.order_id);
    setName(item.customer_name);
    setTotal(item.total);
  };

  const dateformat=(str:string)=>{
    let tam=str.slice(0,10)
    let tamarr=tam.split('-')
    return tamarr[2]+'-'+tamarr[1]+'-'+tamarr[0]
  }

  return (
    <>
      <form className="form2" style={{ flex: 0.3 }}>
        <label htmlFor="user_id">UserName:</label>
        <input
          type="text"
          id="user_id"
          name="user_id"
          className="inputcustom"
          value={name}
          readOnly={true}
        />
        <br />
        <label htmlFor="total">Total:</label>
        <input
          type="text"
          id="total"
          name="total"
          className="inputcustom"
          value={total}
          readOnly={true}
        />
        <br />
        {/* <label htmlFor="status">status:</label>
        <input type="text" id="status" name="status" className="inputcustom" />
        <br /> */}
      </form>
      <div className="table-data" style={{ flex: 0.5 }}>
        <div className="order">
          <div className="head">
            <i className="bx bx-search" />
            <i className="bx bx-filter" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Total</th>
                <th>Created_at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list
                ? list.map((item: any) => (
                    <tr key={item.order_id}>
                      <td>{item.customer_name}</td>
                      <td>{item.total} </td>
                      <td>{dateformat(item.order_date)}</td>
                      <td>
                        <button
                          className="lankbutton"
                          onClick={() => textUpdate(item)}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))
                : "Cannot get data"}
            </tbody>
          </table>
        </div>
      </div>
      <div className="table-data" style={{ flex: 0.2 }}>
        <div className="order">
          <table>
            <thead>
              <th>Product</th>
              <th>Quantity</th>
              <th>Action</th>
            </thead>
            <tbody>
              {list2
                ? list2.map((item: any) => (
                    <tr key={item.order_detail_id}>
                      <td>{item.product_name}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <button
                          className="lankbutton"
                          onClick={() =>
                            deleteHandle(
                              item.order_detail_id,
                              "order_details",
                              setList2(
                                list2.filter(
                                  (itemz: any) =>
                                    itemz.order_detail_id !==
                                    item.order_detail_id
                                )
                              )
                            )
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : ""}
              <tr>
                <td>
                  <select
                    name=""
                    id=""
                    value={product}
                    onChange={(e: any) => setProduct(e.target.value)}
                    className="inputcustom"
                  >
                    {list3
                      ? list3.map((item: any) => (
                          <option value={item.product_id} key={item.product_id}>
                            {item.product_name}
                          </option>
                        ))
                      : ""}
                  </select>
                </td>
                <td>
                  <input type="number" className="inputcustom" />
                </td>
                <td>
                  <button
                    className="lankbutton"
                    onClick={() =>
                      addHandle(
                        { order_id: id, product_id: product },
                        "order_details",
                        "order_detail_id",
                        (data: any) => setList2([...list2, data])
                      )
                    }
                  >
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
