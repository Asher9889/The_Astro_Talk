import ContentWrapper from "../content-wrapper/ContentWrapper";
import ShiningBorder from "../Shining-Border/ShiningBorder";

const ConsultationForm = () => {
    return (
        <ContentWrapper className="text-white  p-4 my-26 bg-(--color-header-background) rounded-t-4xl border-1 border-yellow-300">
            <h1 className="text-3xl text-yellow-300 font-bold flex flex-row justify-center my-6">Talk to our Experts</h1>
            <div className="relative flex flex-row gap-40 rounded-xl p-6 w-full  shadow-xl">
                {/* Shining border */}
                <ShiningBorder
                    borderWidth={1}
                    duration={8}
                    shineColor={["#00FFFF", "#FF00FF", "#FFFF00", "#00FF00"]}
                />

                {/* Astrology Consultation Form */}
                <form className="flex-1 space-y-4 z-10 relative">
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

                <div className="flex-1">
                    <img className="w-96" src="https://images.unsplash.com/photo-1727366292772-786f176beb04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhpbmR1JTIwc2FkaHZpfGVufDB8fDB8fHww" alt="" />
                </div>
            </div>
        </ContentWrapper>



        // <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
        //     <h2 className="text-2xl font-semibold mb-4 text-center">Astrology Consultation Form</h2>

        //     <form className="space-y-4">
        //         <input type="text" placeholder="Full Name" className="w-full border rounded p-2" />

        //         <div className="flex gap-4">
        //             <input type="date" className="w-1/2 border rounded p-2" />
        //             <input type="time" className="w-1/2 border rounded p-2" />
        //         </div>

        //         <input type="text" placeholder="Place of Birth" className="w-full border rounded p-2" />

        //         <input type="email" placeholder="Email" className="w-full border rounded p-2" />
        //         <input type="tel" placeholder="Phone Number" className="w-full border rounded p-2" />

        //         <select className="w-full border rounded p-2">
        //             <option>Select Consultation Type</option>
        //             <option>Career</option>
        //             <option>Love & Relationships</option>
        //             <option>Health</option>
        //             <option>Finance</option>
        //             <option>Marriage</option>
        //             <option>Spiritual Guidance</option>
        //         </select>

        //         <div className="space-y-2">
        //             <label className="block">Preferred Mode:</label>
        //             <div className="flex gap-4">
        //                 <label><input type="radio" name="mode" /> Chat</label>
        //                 <label><input type="radio" name="mode" /> Phone</label>
        //                 <label><input type="radio" name="mode" /> Video</label>
        //             </div>
        //         </div>

        //         <textarea placeholder="Describe your concern..." rows="4" className="w-full border rounded p-2"></textarea>

        //         <input type="file" className="w-full border rounded p-2" />

        //         <label className="block">
        //             <input type="checkbox" /> I agree to the terms and privacy policy
        //         </label>

        //         <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
        //             Book Consultation
        //         </button>
        //     </form>
        // </div>


    );
};

export default ConsultationForm;
