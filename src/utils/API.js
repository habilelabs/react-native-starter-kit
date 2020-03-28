import {getConnection} from "./connection";

async function post(url, data) {
    const connection = await getConnection();
    return connection.post(url, data);
}

async function get(url) {
    const connection = await getConnection();
    return  connection.get(url);
}


export default {
    post,
    get
}