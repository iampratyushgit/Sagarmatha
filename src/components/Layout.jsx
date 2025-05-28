import Navbar from "./ui/Navbar";

export default function Layout({ children }) {
    return (
        <div className="min-h-auto flex flex-col">
            <Navbar />
            <main className="flex-grow container h-auto">
                {children}
            </main>
            <footer className="border-t-2 bg-black text-white py-3 w-screen">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2025 Sagarmatha. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}