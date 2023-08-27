import Link from "next/link";

const Homepage = () => {
    return (
        <div className="flex  flex-col items-center justify-center min-h-screen">
            <h1>Homepage</h1>

            <Link href={"/dashboard"} className="text-black bg-white py-2 px-4 rounded-lg ">
                Dashboard
            </Link>
        </div>
    );
};
export default Homepage;
