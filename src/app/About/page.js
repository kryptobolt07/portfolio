import About from "../components/About";
import Profile from "../components/Profile";

export const metadata = {
    title: "About",
    description: "About me",
};

export default function Page() {
    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <Profile />
            <About />
        </div>
    );
}


