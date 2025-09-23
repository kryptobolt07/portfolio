import Experience from "../components/Experience";
import Profile from "../components/Profile";

export const metadata = {
    title: "Experience",
    description: "Work experience",
};

export default function Page() {
    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <Profile />
            <Experience />
        </div>
    );
}


