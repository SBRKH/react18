import axios from "axios";

export async function fetchUser(id) {
    console.info("fetch user id " + id);

    let { data } = await axios.get(`http://localhost:8080/user/${id}`);
    console.log("data==", data);
    await new Promise((r) => setTimeout(r, 1000));
    return data;
}

export async function fetchUsers() {
    console.info("fetch users");

    let { data } = await axios.get(`http://localhost:8080/user`);
    await new Promise((r) => setTimeout(r, 1000));
    return data;
}

export async function fetchUsers2() {
    console.info("fetch users 2");

    let { data } = await axios.get(`http://localhost:8080/users`);
    await new Promise((r) => setTimeout(r, 1000));
    return data;
}