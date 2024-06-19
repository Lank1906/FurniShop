import { useEffect, useState } from "react";
import { getHandle, addHandle, updateHandle, deleteHandle } from "../fetch";

export default function Supplier() {
  const [list, setList] = useState<any>(null);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getHandle("suppliers", (data: any) => setList(data));
  });

  const textUpdate = (item: any) => {
    setId(item.supplier_id);
    setName(item.supplier_name);
    setPhone(item.phone);
    setEmail(item.email);
  };

  return (
    <>
      <form className="form2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="inputcustom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="contact_email">Email:</label>
        <input
          type="text"
          id="contact_email"
          name="contact_email"
          className="inputcustom"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="contact_phone">contact_phone:</label>
        <input
          type="text"
          id="contact_phone"
          name="contact_phone"
          className="inputcustom"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <button
          className="lankbutton"
          onClick={() =>
            addHandle(
              {
                supplier_name: name,
                email: email,
                phone: phone,
              },
              "suppliers",
              "supplier_id",
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
                supplier_name: name,
                email: email,
                phone: phone,
              },
              "suppliers",
              (data: any) => {
                let tam = [...list].map((item: any) => {
                  if (item.supplier_id == id) {
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
      <div className="table-data">
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
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {list
                ? list.map((item: any) => (
                    <tr key={item.supplier_id}>
                      <td>{item.supplier_name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
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
                              item.supplier_id,
                              "suppliers",
                              setList(
                                list.filter(
                                  (itemz: any) =>
                                    itemz.supplier_id !== item.supplier_id
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
                : "cannot load data"}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
