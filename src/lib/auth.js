import { jwtVerify } from "jose";
import { connectDB } from "@/config/dbConfig";
import User from "@/models/userModel";

connectDB();
export const validateJWT = async (jwt) => {
    const { payload } = await jwtVerify(
        jwt,
        new TextEncoder().encode(process.env.jwt_secret)
    );
    return payload;
};

// Getting the JWT from cookies:
export const getUserFromCookie = async (cookies) => {
    const jwt = cookies.get("token");
    if (!jwt) return null
    const { _id } = await validateJWT(jwt.value);

    const user = await User.findOne({ _id: _id });

    return user;
};
