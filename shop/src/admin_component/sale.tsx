import { useEffect, useState } from "react";
import { getHandle, addHandle, updateHandle, deleteHandle } from "../fetch";

export default function Sale() {
  const [list, setList] = useState<any>(null);
  const [list2, setList2] = useState<any>(null); //product_sale
  const [list3, setList3] = useState<any>(null); //product
  const [product, setProduct] = useState(0);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [discount, setDiscount] = useState(0);
  const [date_begin, setDate_begin] = useState("");
  const [date_end, setDate_end] = useState("");

  useEffect(() => {
    getHandle("sales", (data: any) => setList(data));
  }, []);

  useEffect(() => {
    getHandle("product_sales/by/" + id, (data: any) => setList2(data));
  }, [id]);

  useEffect(() => {
    getHandle("products", (data: any) => setList3(data));
  }, []);

  const textUpdate = (item: any) => {
    setId(item.sale_id);
    setTitle(item.title);
    setDiscount(item.discount);
    setDate_begin(item.date_begin);
    setDate_end(item.date_end);
  };

  return (
    <>
      <form className="form2" style={{ flex: 0.3 }}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          name="title"
          className="inputcustom"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <label htmlFor="discount">Discount:</label>
        <br />
        <input
          type="number"
          name="image"
          className="inputcustom"
          value={discount}
          onChange={(e: any) => setDiscount(e.target.value)}
          max={100}
          min={0}
          required
        />
        <br />
        <label htmlFor="date_begin">Begin:</label>
        <br />
        <input
          type="date"
          name="date_begin"
          className="inputcustom"
          value={date_begin}
          onChange={(e) => setDate_begin(e.target.value)}
          required
        />
        <br />
        <label htmlFor="date_end">End:</label>
        <br />
        <input
          type="date"
          name="date_end"
          className="inputcustom"
          value={date_end}
          onChange={(e) => setDate_end(e.target.value)}
          required
        />
        <br />
        <button
          className="lankbutton"
          onClick={() =>
            addHandle(
              {
                title: title,
                discount: discount,
                date_begin: date_begin,
                date_end: date_end,
              },
              "sales",
              "sale_id",
              (data: any) => {
                setList([...list, data]);
              }
            )
          }
        >
          Submit
        </button>
        <button
          className="lankbutton"
          onClick={() =>
            updateHandle(
              id,
              {
                title: title,
                discount: discount,
                date_begin: date_begin,
                date_end: date_end,
              },
              "sales",
              (data: any) => {
                let tam = [...list].map((item: any) => {
                  if (item.sale_id == id) {
                    item = data;
                  }
                  return item;
                });
                setList(tam);
              }
            )
          }
        >
          Update
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
                <th>title</th>
                <th>discount</th>
                <th>date_begin</th>
                <th>date_end</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {list
                ? list.map((item: any) => (
                    <tr key={item.sale_id}>
                      <td>{item.title}</td>
                      <td>{item.discount} %</td>
                      <td>{item.date_begin}</td>
                      <td>{item.date_end}</td>
                      <td>
                        <button
                          className="lankbutton"
                          onClick={() => textUpdate(item)}
                        >
                          Update
                        </button>
                        <button
                          className="lankbutton"
                          onClick={() =>
                            deleteHandle(
                              item.sale_id,
                              "sales",
                              setList(
                                list.filter(
                                  (itemz: any) => itemz.sale_id !== item.sale_id
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
              <th>Action</th>
            </thead>
            <tbody>
              {list2
                ? list2.map((item: any) => (
                    <tr key={item.product_sale_id}>
                      <td>{item.product_name}</td>
                      <td>
                        <button
                          className="lankbutton"
                          onClick={() =>
                            deleteHandle(
                              item.product_sale_id,
                              "product_sales",
                              setList2(
                                list2.filter(
                                  (itemz: any) =>
                                    itemz.product_sale_id !==
                                    item.product_sale_id
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
                  <button
                    className="lankbutton"
                    onClick={() =>
                      addHandle(
                        { sale_id: id, product_id: product },
                        "product_sales",
                        "product_sale_id",
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
