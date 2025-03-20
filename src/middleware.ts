import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./app/services/Auth";

export const authRoutes = ["/login"]

export const middleware = async (request: NextRequest) => {

    const { pathname } = request.nextUrl
    const userInfo = await getCurrentUser();

    if (!userInfo) {
        if (authRoutes.includes(pathname)) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(
                // new URL(`http://localhost:3000/login`, request.url)
                new URL(`https://portfolio-dashboard-eta-six.vercel.app/login`, request.url)
            )
        }
    }
}

export const config = {
    matcher: [
        "/",
        "/projects",
        "/projects/:page",
        "/projects/add-project",
        "/projects/update-project",
        "/skills",
        "/skills/add-skill",
        "/skills/update-skill",
        "/blogs",
        "/blogs/:page",
        "/blogs/add-project",
        "/blogs/update-project",
        "/contacts",
        "/contacts/:page",
    ]
}