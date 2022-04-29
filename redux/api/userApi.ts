import axios, {AxiosResponse} from 'axios'
// import { Z_UNKNOWN } from 'zlib';

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export interface UserType {
    userid: string;
    password: string;
    email: string;
    name: string;
    phone: string;
    birth: string;
    address: string;
}
export const joinApi = async (payload : {
    userid: string,
    password: string,
    email: string,
    name: string,
    phone: string,
    birth: string,
    address: string
}) => {
    try {
        alert('진행 4 : API 진입 ')
        const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/user/join`,
            payload,
            {headers}
        )
        alert('진행 6 : 응답성공 ' + JSON.stringify(response.data))
        return response.data
    } catch (err) {
        return err;
    }
}
export const loginApi = async (payload : {
    userid: string,
    password: string
}) => {
    alert('진행 4 : API 진입 ')

    try {
        const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/user/login`,
            payload,
            {headers}
        )
        alert('hi')
        const loginUser = JSON.stringify(response.data)        
        localStorage.setItem("loginUser", loginUser)
        alert('진행 6 : 응답성공 ' + JSON.stringify(response.data))
        return response.data
    } catch (err) {
        return err;
    }
}
export const logoutApi = async () => {
    try {
        const response: AxiosResponse<unknown, UserType[]> = await axios.get(
            `${SERVER}/user/logout`,
            {headers}
        )
    } catch (err) {
        return err;
    }
}
export const delUserApi = async (payload : {
    userid: string,
    password: string
}) => {
    alert('진행 4 : API 진입 ')
    console.log(payload);
    console.log('hi');
    alert('hi');

    try {
    const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/user/delUser`,
            payload,
            {headers}
        )
        const loginUser = JSON.stringify(response.data)        
        return response.data
    } catch (err) {
        return err;
    }
}
export const editUserApi = async (payload : UserType) => {
    alert('진행 4 : editUser API 진입 ')
    console.log(payload);
    try {
    const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/user/editUser`,
            payload,
            {headers}
        )
        console.log('hello1')
        return response.data
    } catch (err) {
        console.log(err)
        return err;
    }
}
export const getUsersApi = async () => {
    try {
        const response: AxiosResponse<unknown, UserType[]> = await axios.get(
            `${SERVER}/user/getUsers`,
            {headers}
        )
        return response.data
    } catch (err) {
        return err;
    }
}