"use server"
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

export const loginAdmin = async (adminData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adminData)
        });

        const result = await res.json()

        const storeCookies = await cookies();
        if (result?.success) {
            storeCookies.set("accessToken", result?.data?.token)
        }

        return result;

    } catch (error: any) {
        return Error(error)
    }
}

export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value;
    let decodedData = null;

    if (accessToken) {
        decodedData = await jwtDecode(accessToken);
        return decodedData;
    } else {
        return null;
    }
};

export const logoutFromCookie = async () => {
    (await cookies()).delete("accessToken");
};