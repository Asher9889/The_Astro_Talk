import ShiningBorder from "../Shining-Border/ShiningBorder";

const ConsultationForm = () => {
    return (
        <div className="text-white flex items-center justify-center p-4 min-h-screen">
            <div className="relative rounded-xl bg-neutral-900 p-6 w-full max-w-md shadow-xl">
                {/* Shining border */}
                <ShiningBorder
                    borderWidth={1}
                    duration={8}
                    shineColor={["#00FFFF", "#FF00FF", "#FFFF00", "#00FF00"]}
                />

                {/* Astrology Consultation Form */}
                <form className="space-y-4 z-10 relative">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label htmlFor="dob" className="block text-sm font-medium">
                            Date of Birth
                        </label>
                        <input
                            id="dob"
                            type="date"
                            className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>

                    {/* Time of Birth */}
                    <div>
                        <label htmlFor="tob" className="block text-sm font-medium">
                            Time of Birth
                        </label>
                        <input
                            id="tob"
                            type="time"
                            className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>

                    {/* Place of Birth */}
                    <div>
                        <label htmlFor="pob" className="block text-sm font-medium">
                            Place of Birth
                        </label>
                        <input
                            id="pob"
                            type="text"
                            placeholder="City, Country"
                            className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Gender
                        </label>
                        <div className="flex items-center gap-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    className="form-radio text-cyan-500"
                                    required
                                />
                                <span className="ml-2">Male</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    className="form-radio text-cyan-500"
                                />
                                <span className="ml-2">Female</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    className="form-radio text-cyan-500"
                                />
                                <span className="ml-2">Other / Prefer not to say</span>
                            </label>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-md bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 font-semibold text-white shadow-lg transition hover:brightness-110"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ConsultationForm;
