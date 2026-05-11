const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// /auth/login is a dummy json endpoint that allows you to login
export const loginUser = async (formData: FormData) => {
    const username = formData.get("username")?.toString().toLowerCase().replace(/\s/g, "");
    const password = formData.get("password");

    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error("Invalid credentials");
    const data = await response.json();
    console.log(data);
    return data;
};


// /users/add is a dummy json endpoint that allows you to add a new user
export const registerUser = async (formData: FormData, role: string) => {
    const payload = {
        username: formData.get("username")?.toString().toLowerCase().replace(/\s/g, ""),
        email: formData.get("email"),
        password: formData.get("password"),
        role,
    };

    const response = await fetch(`${BASE_URL}/users/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Registration failed");
    const data = await response.json();
    console.log(data);
    return data;
};