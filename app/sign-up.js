import { SignUp } from "@clerk/nextjs";
import AuthLayout from "@/layouts/AuthLayout";

const SignUpPage = () => {
    return (
        <AuthLayout title="Sign Up">
            <SignUp path="/sign-up" />
        </AuthLayout>
    );
};

export default SignUpPage;
