import {atom} from "recoil";

export const isDarkMode = atom({
    key:"isDarkMode",
    default:false,
});

export const isLoginPage = atom({
    key:"isLoginPage",
    default:false,
})

export const isLogined = atom({
    key:"isLogined",
    default:false,
})

export const userData = atom<{gender:string, age:number}>({
    key:"userData"
})

export const inputFoods = atom<{value:string, code:string, much:string}[]>({
    key:"inputFoods",
    default: [],
})