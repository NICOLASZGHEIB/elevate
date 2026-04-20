"use client";
import { useState, cloneElement } from "react";

const countries = [
    { code: "AF", name: "Afghanistan" }, { code: "AX", name: "Åland Islands" }, { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" }, { code: "AS", name: "American Samoa" }, { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" }, { code: "AI", name: "Anguilla" }, { code: "AQ", name: "Antarctica" },
    { code: "AG", name: "Antigua and Barbuda" }, { code: "AR", name: "Argentina" }, { code: "AM", name: "Armenia" },
    { code: "AW", name: "Aruba" }, { code: "AU", name: "Australia" }, { code: "AT", name: "Austria" },
    { code: "AZ", name: "Azerbaijan" }, { code: "BS", name: "Bahamas" }, { code: "BH", name: "Bahrain" },
    { code: "BD", name: "Bangladesh" }, { code: "BB", name: "Barbados" }, { code: "BY", name: "Belarus" },
    { code: "BE", name: "Belgium" }, { code: "BZ", name: "Belize" }, { code: "BJ", name: "Benin" },
    { code: "BM", name: "Bermuda" }, { code: "BT", name: "Bhutan" }, { code: "BO", name: "Bolivia (Plurinational State of)" },
    { code: "BA", name: "Bosnia and Herzegovina" }, { code: "BW", name: "Botswana" }, { code: "BV", name: "Bouvet Island" },
    { code: "BR", name: "Brazil" }, { code: "IO", name: "British Indian Ocean Territory" }, { code: "BN", name: "Brunei Darussalam" },
    { code: "BG", name: "Bulgaria" }, { code: "BF", name: "Burkina Faso" }, { code: "BI", name: "Burundi" },
    { code: "CV", name: "Cabo Verde" }, { code: "KH", name: "Cambodia" }, { code: "CM", name: "Cameroon" },
    { code: "CA", name: "Canada" }, { code: "KY", name: "Cayman Islands" }, { code: "CF", name: "Central African Republic" },
    { code: "TD", name: "Chad" }, { code: "CL", name: "Chile" }, { code: "CN", name: "China" }, { code: "CO", name: "Colombia" },
    { code: "KM", name: "Comoros" }, { code: "CG", name: "Congo" }, { code: "CD", name: "Congo, Democratic Republic of the" },
    { code: "CR", name: "Costa Rica" }, { code: "HR", name: "Croatia" }, { code: "CU", name: "Cuba" }, { code: "CY", name: "Cyprus" },
    { code: "CZ", name: "Czech Republic" }, { code: "DK", name: "Denmark" }, { code: "DJ", name: "Djibouti" }, { code: "DM", name: "Dominica" },
    { code: "DO", name: "Dominican Republic" }, { code: "EC", name: "Ecuador" }, { code: "EG", name: "Egypt" }, { code: "SV", name: "El Salvador" },
    { code: "EE", name: "Estonia" }, { code: "ET", name: "Ethiopia" }, { code: "FI", name: "Finland" }, { code: "FR", name: "France" },
    { code: "DE", name: "Germany" }, { code: "GR", name: "Greece" }, { code: "HK", name: "Hong Kong" }, { code: "HU", name: "Hungary" },
    { code: "IS", name: "Iceland" }, { code: "IN", name: "India" }, { code: "ID", name: "Indonesia" }, { code: "IR", name: "Iran" },
    { code: "IQ", name: "Iraq" }, { code: "IE", name: "Ireland" }, { code: "IL", name: "Israel" }, { code: "IT", name: "Italy" },
    { code: "JM", name: "Jamaica" }, { code: "JP", name: "Japan" }, { code: "JO", name: "Jordan" }, { code: "KE", name: "Kenya" },
    { code: "KR", name: "Korea, South" }, { code: "KW", name: "Kuwait" }, { code: "LA", name: "Lao People's Democratic Republic" },
    { code: "LV", name: "Latvia" }, { code: "LB", name: "Lebanon" }, { code: "LR", name: "Liberia" }, { code: "LY", name: "Libya" },
    { code: "LT", name: "Lithuania" }, { code: "LU", name: "Luxembourg" }, { code: "MO", name: "Macao" }, { code: "MY", name: "Malaysia" },
    { code: "MV", name: "Maldives" }, { code: "ML", name: "Mali" }, { code: "MT", name: "Malta" }, { code: "MX", name: "Mexico" },
    { code: "MD", name: "Moldova" }, { code: "MC", name: "Monaco" }, { code: "MN", name: "Mongolia" }, { code: "ME", name: "Montenegro" },
    { code: "MA", name: "Morocco" }, { code: "MZ", name: "Mozambique" }, { code: "MM", name: "Myanmar (Burma)" },
    { code: "NA", name: "Namibia" }, { code: "NP", name: "Nepal" }, { code: "NL", name: "Netherlands" }, { code: "NZ", name: "New Zealand" },
    { code: "NI", name: "Nicaragua" }, { code: "NE", name: "Niger" }, { code: "NG", name: "Nigeria" }, { code: "NO", name: "Norway" },
    { code: "OM", name: "Oman" }, { code: "PK", name: "Pakistan" }, { code: "PA", name: "Panama" }, { code: "PG", name: "Papua New Guinea" },
    { code: "PY", name: "Paraguay" }, { code: "PE", name: "Peru" }, { code: "PH", name: "Philippines" }, { code: "PL", name: "Poland" },
    { code: "PT", name: "Portugal" }, { code: "PR", name: "Puerto Rico" }, { code: "QA", name: "Qatar" }, { code: "RO", name: "Romania" },
    { code: "RU", name: "Russian Federation" }, { code: "SA", name: "Saudi Arabia" }, { code: "SN", name: "Senegal" },
    { code: "RS", name: "Serbia" }, { code: "SG", name: "Singapore" }, { code: "SK", name: "Slovakia" }, { code: "SI", name: "Slovenia" },
    { code: "ZA", name: "South Africa" }, { code: "ES", name: "Spain" }, { code: "LK", name: "Sri Lanka" },
    { code: "SE", name: "Sweden" }, { code: "CH", name: "Switzerland" }, { code: "TH", name: "Thailand" },
    { code: "TR", name: "Turkey (Türkiye)" }, { code: "UA", name: "Ukraine" }, { code: "AE", name: "United Arab Emirates" },
    { code: "GB", name: "United Kingdom" }, { code: "US", name: "United States" }, { code: "UY", name: "Uruguay" },
    { code: "UZ", name: "Uzbekistan" }, { code: "VN", name: "Vietnam" }, { code: "ZM", name: "Zambia" }, { code: "ZW", name: "Zimbabwe" }
];

export default function ConnectPopup({ children }) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [trainingType, setTrainingType] = useState("");
    const [country, setCountry] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!valid) {
            setEmailError(true);
            return;
        }
        setEmailError(false);

        if (!trainingType) {
            setError("Please select a training type.");
            return;
        }

        try {
            setSubmitting(true);
            const formData = new FormData(e.currentTarget);
            formData.set("trainingType", trainingType);
            formData.set("country", country);

            const res = await fetch("https://formspree.io/f/xpwowade", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setSent(true);
            } else {
                const data = await res.json().catch(() => ({}));
                setError(data?.error || "Something went wrong. Please try again.");
            }
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const trigger = children
        ? cloneElement(children, { onClick: () => setOpen(true) })
        : (
            <button
                onClick={() => setOpen(true)}
                className="rounded-full bg-[#8B8F67] text-white px-5 py-2 text-sm font-medium hover:bg-[#7a8551] transition"
            >
                Connect
            </button>
        );

    return (
        <>
            {trigger}

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 sm:p-6">
                    <div className="bg-white rounded-3xl w-full max-w-xl overflow-y-auto max-h-[90vh] p-8 relative shadow-lg">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-lg"
                        >
                            ✕
                        </button>

                        {!sent ? (
                            <>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">Connect with us</h2>

                                {error && (
                                    <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <input name="company" type="text" placeholder="Company Name" required className="w-full border-b border-gray-300 p-3 text-gray-800 outline-none focus:border-[#8B8F67]" />
                                    <input name="industry" type="text" placeholder="Industries" required className="w-full border-b border-gray-300 p-3 text-gray-800 outline-none focus:border-[#8B8F67]" />
                                    <input name="employees" type="text" placeholder="Employee Numbers" required className="w-full border-b border-gray-300 p-3 text-gray-800 outline-none focus:border-[#8B8F67]" />

                                    <select
                                        name="country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        required
                                        className="w-full border-b border-gray-300 p-3 text-gray-700 outline-none focus:border-[#8B8F67]"
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map((c) => (
                                            <option key={c.code} value={c.name}>{c.name}</option>
                                        ))}
                                    </select>

                                    <input name="contactName" type="text" placeholder="Contact name" required className="w-full border-b border-gray-300 p-3 text-gray-800 outline-none focus:border-[#8B8F67]" />
                                    <input name="position" type="text" placeholder="Position" required className="w-full border-b border-gray-300 p-3 text-gray-800 outline-none focus:border-[#8B8F67]" />
                                    <input name="phone" type="text" placeholder="Contact Phone" required className="w-full border-b border-gray-300 p-3 text-gray-800 outline-none focus:border-[#8B8F67]" />

                                    <div>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={`w-full border-b p-3 text-gray-800 outline-none focus:border-[#8B8F67] ${emailError ? 'border-red-400' : 'border-gray-300'}`}
                                            required
                                        />
                                        {emailError && <p className="text-red-500 text-xs mt-1">Please, enter valid email address</p>}
                                    </div>

                                    <div>
                                        <label className="block text-gray-500 text-base mb-2">Type of Training *</label>
                                        <input type="hidden" name="trainingType" value={trainingType} required />
                                        <div className="flex flex-wrap gap-3">
                                            {['Productivity', 'Sales', 'Leadership', 'I Have Not decided yet'].map((t) => (
                                                <button
                                                    type="button"
                                                    key={t}
                                                    onClick={() => setTrainingType(t)}
                                                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${trainingType === t ? 'bg-[#8B8F67] text-white border-[#8B8F67]' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
                                                    aria-pressed={trainingType === t}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <textarea
                                        name="message"
                                        placeholder="Let's talk about your Training"
                                        required
                                        className="w-full border border-gray-300 rounded-xl p-4 text-gray-800 focus:border-[#8B8F67] text-sm"
                                        rows="3"
                                    />

                                    <input type="hidden" name="_subject" value="New Connect inquiry from website" />

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full bg-[#8B8F67] text-white rounded-md py-3 font-semibold mt-2 hover:bg-[#7A8551] tracking-wide text-base disabled:opacity-60"
                                    >
                                        {submitting ? "Submitting..." : "SUBMIT"}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="py-12 text-center">
                                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-[#8B8F67]/10 flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 7L9 18L4 13" stroke="#8B8F67" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Thanks! Your message has been sent.</h3>
                                <p className="mt-2 text-gray-600">We'll get back to you shortly.</p>
                                <button onClick={() => { setSent(false); setOpen(false); }} className="mt-6 rounded-full border border-[#8B8F67] px-4 py-2 text-sm font-medium text-[#2D4245] hover:bg-[#F5F5F0]">Close</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
