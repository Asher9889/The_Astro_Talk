import ShiningBorder from "../Shining-Border/ShiningBorder"

const ConsultationForm = () => {
    return (
        <div className=" text-white flex items-center justify-center p-4">
            <div className="relative rounded-xl bg-neutral-900 p-6 w-full max-w-md shadow-xl">
                {/* Shining border */}
                <ShiningBorder
                    borderWidth={1}
                    duration={8}
                    shineColor={["#00FFFF", "#FF00FF", "#FFFF00", "#00FF00"]}
                />

                {/* Form */}
                <form className="space-y-4 z-10 relative">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 font-semibold text-white shadow-lg transition hover:brightness-110"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ConsultationForm;