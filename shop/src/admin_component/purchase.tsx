import { useEffect, useState } from "react";
import { getHandle, addHandle, updateHandle, deleteHandle } from "../fetch";
export default function Purchase() {
  const [list, setList] = useState<any>(null);
  const [list2, setList2] = useState<any>(null); //purchase_details
  const [list3, setList3] = useState<any>(null); //product
  const [list4, setList4] = useState<any>(null); //supplier
  const [product, setProduct] = useState(0);
  const [id, setId] = useState(0);
  const [supplier_id, setSupplier_id] = useState("");
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    getHandle("purchases", (data: any) => setList(data));
  }, []);
  useEffect(() => {
    getHandle("purchase_details/by/" + id, (data: any) => setList2(data));
  }, [id]);

  useEffect(() => {
    getHandle("products", (data: any) => setList3(data));
  }, []);

  useEffect(() => {
    getHandle("suppliers", (data: any) => setList4(data));
  }, []);

  const textUpdate = (item: any) => {
    setId(item.purchase_id);
    setSupplier_id(item.supplier_id);
    setTotal(item.total);
  };

  return (
    <>
      <form className="form2" style={{ flex: 0.3 }}>
        <label htmlFor="supplier_id">supplier:</label>
        <br />
        <select
          name="supplier_id"
          className="inputcustom"
          value={supplier_id}
          onChange={(e) => setSupplier_id(e.target.value)}
        >
          {list4
            ? list4.map((item: any) => (
                <option value={item.supplier_id} key={item.supplier_id}>
                  {item.supplier_name}
                </option>
              ))
            : ""}
        </select>
        <br />
        <label htmlFor="total">total:</label>
        <br />
        <input
          type="number"
          id="total"
          name="total"
          className="inputcustom"
          value={total}
          readOnly={true}
        />
        <br />
        {/* <label htmlFor="status">status:</label><br/>
        <select name="status" id="">
          <option value="pending">pending</option>
          <option value="processing">processing</option>
          <option value="received">received</option>
          <option value="cancelled">cancelled</option>
        </select> 
        <br />*/}
        <button
          className="lankbutton"
          onClick={() =>
            addHandle(
              {
                supplier_id: supplier_id,
                total: 0,
              },
              "purchases",
              "purchase_id",
              (data: any) => {
                setList([...list, data]);
              }
            )
          }
        >
          Submit
        </button>
      </form>
      <div className="table-data" style={{ flex: 0.5 }}>
        <div className="order">
          <div className="head">
            <h3
              style={{
                border: "1px solid black",
                borderRadius: 12,
                padding: 4,
                cursor: "pointer",
              }}
            ></h3>
            <i className="bx bx-search" />
            <i className="bx bx-filter" />
          </div>
          <table>
            <thead>
              <tr>
                <th>supplier</th>
                <th>total</th>
                <th>created_at</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {list
                ? list.map((item: any) => (
                    <tr key={item.purchase_id}>
                      <td>{item.supplier_name}</td>
                      <td>{item.total}</td>
                      <td>{item.purchase_date}</td>
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
                : "cannot load data"}
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
                    <tr key={item.purchase_detail_id}>
                      <td>{item.product_name}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <button
                          className="lankbutton"
                          onClick={() =>
                            deleteHandle(
                              item.purchase_detail_id,
                              "purchase_details",
                              setList2(
                                list2.filter(
                                  (itemz: any) =>
                                    itemz.purchase_detail_id !==
                                    item.purchase_detail_id
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
                        { purchase_id: id, product_id: product },
                        "purchase_details",
                        "purchase_detail_id",
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
