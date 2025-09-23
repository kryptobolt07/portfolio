import Profile from "./components/Profile";
import About from "./components/About";

export default function Home() {
    return (
        <>
            <div>
                <main className="mt-5 p-4">
                    <Profile />
                    <About />
                </main>
            </div>
        </>
    );
}
