import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define routes that require authentication
const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/profile(.*)",
    "/settings(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    const authObject = await auth(); // Await the auth() function to get userId

    // If the route is protected and user is not authenticated, block access
    if (isProtectedRoute(req) && !authObject.userId) {
        return new Response("Unauthorized", { status: 401 });
    }
});

// Middleware configuration to match all routes except static assets
export const config = {
    matcher: "/((?!_next|.*\\..*|favicon.ico).*)",
};
