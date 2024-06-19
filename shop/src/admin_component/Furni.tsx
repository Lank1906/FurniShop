import { useEffect, useState } from "react";
import { getHandle, addHandle, updateHandle, deleteHandle } from "../fetch";
export default function Furni() {
  const [list, setList] = useState<any>(null); //product
  const [list2, setList2] = useState<any>(null); //Category

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [cateid, setCateId] = useState(1);
  const [room, setRoom] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [shortdes, setShortDes] = useState("");
  const [detaildes, setDetailDes] = useState<any>([]);
  const [size, setSize] = useState<any>([]);
  const [types, setTypes] = useState<any>([]);

  useEffect(() => {
    getHandle("categories", (data: any) => setList2(data));
  }, []);

  useEffect(() => {
    getHandle("products", (data: any) => setList(data));
  });

  const addDetailDes = (event: any) => {
    event.preventDefault();
    const attr = (document.getElementById("attrdes") as HTMLInputElement).value;
    const val = (document.getElementById("valdes") as HTMLInputElement).value;
    if (attr == "" || val == "") {
      return;
    }
    setDetailDes([...detaildes, { attribute: attr, value: val }]);
  };

  const addSize = (event: any) => {
    event.preventDefault();
    const attr = (document.getElementById("attrsize") as HTMLInputElement)
      .value;
    const val = (document.getElementById("valsize") as HTMLInputElement).value;
    if (attr == "" || val == "") {
      return;
    }
    setSize([...size, { attribute: attr, value: val }]);
  };

  const addType = (event: any) => {
    event.preventDefault();
    const color = (document.getElementById("coltype") as HTMLInputElement)
      .value;
    const file = (document.getElementById("fitype") as HTMLInputElement)
      .files?.[0];
    const value = (document.getElementById("valtype") as HTMLInputElement)
      .value;
    if (color == "" || !file || value == "") {
      return;
    }
    setTypes([...types, { color: color, value: value, image: file.name }]);
  };

  const textUpdate = (item: any) => {
    setId(item.product_id);
    setName(item.product_name);
    setCateId(item.category_id);
    setRoom(item.room_id);
    setShortDes(item.description);
    setPrice(item.price);
    setImage(item.image_url);
    let colors = item.color.split("*");
    let images = item.image_urls.split("*");
    let stocks = item.stock.split("*");
    let details = item.detail_description.split("*");
    let sizes = item.size.split("*");
    for (let i = 0; i < details.length; i++) {
      details[i] = {
        attribute: details[i].split(":")[0],
        value: details[i].split(":")[1],
      };
    }
    for (let i = 0; i < sizes.length; i++) {
      sizes[i] = {
        attribute: sizes[i].split(":")[0],
        value: sizes[i].split(":")[1],
      };
    }
    for (let i = 0; i < colors.length; i++) {
      colors[i] = { color: colors[i], value: stocks[i], image: images[i] };
    }
    setDetailDes(details);
    setSize(sizes);
    setTypes(colors);
  };

  return (
    <>
      <form className="form2" style={{ flex: 0.3 }}>
        <label>Name:</label>
        <input
          type="text"
          className="inputcustom"
          required
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="supplier_id">Category:</label>
        <br />
        <select
          name="supplier_id"
          className="inputcustom"
          required
          value={cateid}
          onChange={(e: any) => setCateId(e.target.value)}
        >
          {list2
            ? list2.map((item: any) => (
                <option value={item.category_id} key={item.category_id}>
                  {item.name}
                </option>
              ))
            : ""}
        </select>
        <br />
        <label>Room:</label>
        <br />
        <select
          className="inputcustom"
          required
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option value="Living room">Living Room</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Dining room">Dining room</option>
          <option value="Bathroom">Bathroom</option>
          <option value="Guest room">Guest room</option>
          <option value="Family room">Family room</option>
          <option value="Game room">Game room</option>
          <option value="Home Office">Home Office</option>
          <option value="Sun room"></option>
        </select>
        <label>Price:</label>
        <input
          type="number"
          className="inputcustom"
          min={1}
          value={price}
          onChange={(e: any) => setPrice(e.target.value)}
        />
        <br />
        <label>Image:</label>
        <br />
        <input
          type="file"
          className="inputcustom"
          required
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              const fileName = e.target.files[0].name;
              setImage(fileName);
            }
          }}
        />
        <br />
        <label>Short Description:</label>
        <br />
        <textarea
          rows={4}
          className="inputcustom"
          required
          value={shortdes}
          onChange={(e: any) => setShortDes(e.target.value)}
        />
        <br />
        <label>Detail Description:</label>
        <br />
        <div className="lankbox">
          {detaildes.map((item: any) => (
            <p key={item.attribute}>
              {item.attribute} : {item.value}{" "}
              <span
                className="lankbutton"
                onClick={() => {
                  setDetailDes(
                    detaildes.filter(
                      (itemz: any) => itemz.attribute !== item.attribute
                    )
                  );
                }}
              >
                x
              </span>
            </p>
          ))}

          <input type="text" id="attrdes" className="inputcustom" />
          <input type="number" id="valdes" className="inputcustom" />
          <button
            className="lankbutton"
            onClick={(event: any) => addDetailDes(event)}
          >
            ADD
          </button>
        </div>
        <br />
        <label>Size:</label>
        <br />
        <div className="lankbox">
          {size.map((item: any) => (
            <p key={item.attribute}>
              {item.attribute} : {item.value}{" "}
              <span
                className="lankbutton"
                onClick={() => {
                  setSize(
                    size.filter(
                      (itemz: any) => itemz.attribute !== item.attribute
                    )
                  );
                }}
              >
                x
              </span>
            </p>
          ))}
          <input type="text" id="attrsize" className="inputcustom" />
          <input type="number" id="valsize" className="inputcustom" />
          <button
            className="lankbutton"
            onClick={(event: any) => addSize(event)}
          >
            ADD
          </button>
        </div>
        <br />
        <label>Types of Product:</label>
        <br />
        <div className="lankbox">
          {types.map((item: any, index: number) => (
            <p key={item.color}>
              {item.color} : {item.value} : {item.image}
              <span className="lankbutton">x</span>
            </p>
          ))}
          <input type="color" id="coltype" className="inputcustom" />
          <input type="number" id="valtype" className="inputcustom" />
          <input type="file" id="fitype" className="inputcustom" />
          <button className="lankbutton" onClick={(e: any) => addType(e)}>
            ADD
          </button>
        </div>
        <br />
        <button
          className="lankbutton"
          onClick={() => {
            let sizestring = size
              .map((item: any) => item.attribute + ":" + item.value)
              .join("*");

            let destring = detaildes
              .map((item: any) => item.attribute + ":" + item.value)
              .join("*");
            let colorstring = types.map((item: any) => item.color).join("*");
            let imagestring = types.map((item: any) => item.image).join("*");
            let valuestring = types.map((item: any) => item.value).join("*");
            addHandle(
              {
                product_name: name,
                category_id: cateid,
                room_id: room,
                description: shortdes,
                price: price,
                image_url: image,
                size: sizestring,
                image_urls: imagestring,
                color: colorstring,
                stock: valuestring,
                detail_description: destring,
              },
              "products",
              "product_id",
              (data: any) => setList([...list, data])
            );
          }}
        >
          Submit
        </button>
        <button
          className="lankbutton"
          onClick={() => {
            let sizestring = size
              .map((item: any) => item.attribute + ":" + item.value)
              .join("*");

            let destring = detaildes
              .map((item: any) => item.attribute + ":" + item.value)
              .join("*");
            let colorstring = types.map((item: any) => item.color).join("*");
            let imagestring = types.map((item: any) => item.image).join("*");
            let valuestring = types.map((item: any) => item.value).join("*");
            updateHandle(
              id,
              {
                product_name: name,
                category_id: cateid,
                room_id: room,
                description: shortdes,
                price: price,
                image_url: image,
                size: sizestring,
                image_urls: imagestring,
                color: colorstring,
                stock: valuestring,
                detail_description: destring,
              },
              "products",
              (data: any) => {
                let tam = [...list].map((item: any) => {
                  if (item.product_id == id) {
                    item = data;
                  }
                  return item;
                });
                setList(tam);
              }
            );
          }}
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
                <th>Product Name</th>
                <th>Category Name</th>
                <th>Room</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stocks</th>
                <th>Image</th>
                <th>Image_urls</th>
                <th>Size</th>
                <th>Detail Description</th>
                <th>Colors</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {list
                ? list.map((item: any) => (
                    <tr key={item.product_id}>
                      <td>{item.product_name}</td>
                      <td>{item.name}</td>
                      <td>{item.room_id}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>{item.stock}</td>
                      <td>
                        <img src={"/images/" + item.image_url} />
                      </td>
                      <td>{item.image_urls}</td>
                      <td>{item.size.substring(0, 15) + "..."}</td>
                      <td>
                        {item.detail_description.substring(0, 15) + "..."}
                      </td>
                      <td>{item.color.substring(0, 15) + "..."}</td>
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
                              item.product_id,
                              "products",
                              setList(
                                list.filter(
                                  (itemz: any) =>
                                    itemz.product_id !== item.product_id
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
