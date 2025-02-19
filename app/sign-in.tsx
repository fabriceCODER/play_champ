import { SignIn } from "@clerk/nextjs";
import AuthLayout from "./layouts/AuthLayout";

const SignInPage = () => {
    return (
        <AuthLayout title="Sign In">
            <SignIn path="/sign-in" />
        </AuthLayout>
    );
};

export default SignInPage;
