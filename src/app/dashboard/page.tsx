"use client";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const DashboardPage = () => {
    const { user } = useUser();

    console.log(user);
    return (
        <section>
            <div className="max-h-12 fixed top-0 left-0 right-0  bg-white text-gray-900 flex justify-between py-2 px-4 items-center">
                <h1 className="text-2xl font-medium leading-none ">
                    <span className="text-indigo-600 font-semibold">Dash</span>
                    board
                </h1>
                <UserButton afterSignOutUrl="/sign-in" />
            </div>

            <section className="min-h-screen flex items-center justify-center">
                <p className="text-lg font-normal px-6">Hello, {user?.fullName}</p>
            </section>
        </section>
    );
};
export default DashboardPage;
