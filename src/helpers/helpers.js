import { validateJWT } from "@/lib/auth";

function getImagePath(imageName) {
    return `/images/${imageName}`
}

const getUserIdFromCookie = async (cookies) => {
    const jwt = cookies.get("token");
    if (!jwt) return null
    const { _id } = await validateJWT(jwt.value);
    return _id;
};

const getFormattedDate = (date) => {
    const dateObject = new Date(date);
    const formattedDate = `${(dateObject.getMonth() + 1).toString().padStart(2, '0')}/${dateObject.getDate().toString().padStart(2, '0')}/${dateObject.getFullYear()} ${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}`;
    return formattedDate
}
export {
    getImagePath,
    getUserIdFromCookie,
    getFormattedDate
}