import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser, registerUser } from "@/services/auth.service";

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (formData: FormData) => {
        setIsLoading(true);
        setError("");

        try {
            const data = await loginUser(formData);
            localStorage.setItem("solarlink_token", data.token);
            localStorage.setItem("solarlink_user", JSON.stringify(data));
            router.push("/dashboard");
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = async (formData: FormData, role: string) => {
        setIsLoading(true);
        setError("");

        try {
            const data = await registerUser(formData, role);
            localStorage.setItem("solarlink_user", JSON.stringify(data));
            router.push("/dashboard");
        } catch (err) {
            setError("Something went wrong during registration.");
        } finally {
            setIsLoading(false);
        }
    };

    return { handleLogin, handleRegister, isLoading, error };
};