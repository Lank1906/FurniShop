import { useEffect, useState } from "react";
import { getHandle, addHandle, updateHandle, deleteHandle } from "../fetch";
export default function User() {
  const [list, setList] = useState<any>(null);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    getHandle("customers", (data: any) => setList(data));
  });
  const textUpdate = (item: any) => {
    setId(item.customer_id);
    setName(item.customer_name);
    setPhone(item.phone);
    setEmail(item.email);
    setAddress(item.address);
    setPass(item.password);
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
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          className="inputcustom"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          className="inputcustom"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="inputcustom"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          className="inputcustom"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <button
          className="lankbutton"
          onClick={() =>
            addHandle(
              {
                customer_name: name,
                password: pass,
                address: address,
                email: email,
                phone: phone,
              },
              "customers",
              "customer_id",
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
                customer_name: name,
                password: pass,
                address: address,
                email: email,
                phone: phone,
              },
              "customers",
              (data: any) => {
                let tam = [...list].map((item: any) => {
                  if (item.customer_id == id) {
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
                <th>Address</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {list
                ? list.map((item: any) => (
                    <tr>
                      <td>{item.customer_name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
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
                              item.customer_id,
                              "customers",
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
