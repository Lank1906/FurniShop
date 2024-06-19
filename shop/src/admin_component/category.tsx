import { useEffect, useState } from "react";
import { getHandle, updateHandle, deleteHandle, addHandle } from "../fetch";

export default function Category() {
  const [list, setList] = useState<any>(null);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getHandle("categories", (data: any) => setList(data));
  }, []);

  const textUpdate = (id: number, name: string, image: string) => {
    setId(id);
    setName(name);
    setImage(image);
  };
  return (
    <>
      <form className="form2">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          className="inputcustom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="image">Image:</label>
        <br />
        <input
          type="file"
          name="image"
          className="inputcustom"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              const fileName = e.target.files[0].name;
              setImage(fileName);
            }
          }}
          required
        />
        <br />
        <button
          className="lankbutton"
          onClick={() =>
            addHandle(
              { name: name, image: image },
              "categories",
              "category_id",
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
              { name: name, image: image },
              "categories",
              (data: any) => {
                let tam = [...list].map((item: any) => {
                  if (item.product_id == id) {
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
                <th>name</th>
                <th>image</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {list
                ? list.map((item: any) => (
                    <tr key={item.category_id}>
                      <td>{item.name}</td>
                      <td>
                        <img src={"/images/" + item.image} />
                      </td>
                      <td>
                        <button
                          className="lankbutton"
                          onClick={() =>
                            textUpdate(item.category_id, item.name, item.image)
                          }
                        >
                          Update
                        </button>
                        <button
                          className="lankbutton"
                          onClick={() =>
                            deleteHandle(
                              item.id,
                              "categories",
                              setList(
                                list.filter(
                                  (itemz: any) =>
                                    itemz.category_id !== item.category_id
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
    </>
  );
}
