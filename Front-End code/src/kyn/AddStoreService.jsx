import axios from "axios";

const Add_Api_url = "http://localhost:8080/kyn/stores"

export default function addNewStore(storeinfo) {
    console.log("Adding Student");
    return axios.post(Add_Api_url, storeinfo)
}