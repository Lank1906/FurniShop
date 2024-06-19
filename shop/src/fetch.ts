import axios from "axios";

const urlCus = "http://localhost:5000/";
// const urlCus="https://ho-ng-b-i-1.paiza-user-free.cloud:5000/"
function addHandle(data: any, type: string, key: string, handle: any) {
  axios
    .post(urlCus + type, data)
    .then((response) => {
      if (response.data != 0) {
        console.log(response.data);
        data[key] = response.data;
        handle(data);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
function updateHandle(id: number, data: any, type: string, handle: any) {
  axios
    .put(urlCus + type + "/" + id, data)
    .then((response) => {
      if (response.data == "") {
        handle(data);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
function deleteHandle(id: number, type: string, handle: any) {
  axios
    .delete(urlCus + type + "/" + id)
    .then((response) => {
      if (response.data == "undefined") {
        handle();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
function getHandle(type: string, handle: any) {
  axios
    .get(urlCus + type)
    .then((response) => {
      handle(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
function oneHandle(id: number, type: string, handle: any) {
  axios
    .get(urlCus + type + "/" + id)
    .then((response) => {
      if (response.data) {
        handle(response.data);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
function firstHandle(id: string, type: string, handle: any) {
  axios
    .get(urlCus + type + "/getfirst/" + id)
    .then((response) => {
      if (response.data) {
        handle(response.data);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
export {
  addHandle,
  updateHandle,
  deleteHandle,
  getHandle,
  oneHandle,
  firstHandle,
  urlCus,
};
