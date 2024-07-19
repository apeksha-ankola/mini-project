import { sign } from "jsonwebtoken";
import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender})
        if(!success) return;

        setLoading(true);
        try {
            const res = await fetch("https://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            })

            const data = await res.json();
            console.log(data);

        } catch(err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, signup};

}

export default useSignup;

function handleInputErrors({fullName, username, password, confirmPassword, gender}) {
    if(!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please enter valid details");
        return false;
    }

    if(password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    return true;
}