"use client";
import { useState } from "react";
import { toast } from "react-toastify";

const FooterNewsletter = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isChecked) {
            setShowError(true);
            return;
        }

        setShowError(false);
        const form = event.target as HTMLFormElement;
        form.reset();
        toast.success("Subscribed Successfully!");
    };

    return (
        <>
            <div className="f-item newsletter">
                <form onSubmit={handleForm}>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control"
                        name="email"
                        autoComplete="off"
                        required
                    />
                    <button type="submit">
                        <i className="fas fa-long-arrow-right" />
                    </button>
                </form>
            </div>
            <fieldset>
                <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={isChecked}
                    onChange={(e) => {
                        setIsChecked(e.target.checked);
                        setShowError(false); // Hide error when checked
                    }}
                />
                <label htmlFor="privacy">I agree to the Privacy Policy</label>
            </fieldset>
            {showError && <p style={{ color: "red", fontSize: "14px" }}>You must check this to submit.</p>}
        </>
    );
};

export default FooterNewsletter;
