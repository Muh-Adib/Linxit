import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const count = () => {
        
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                        <main className="mt-6">
                            <div className="grid lg:grid-cols-2 lg:gap-8 justify-items-center">
                            
                                
                                    <Link href="/" class="relative flex h-20 w-auto justify-items-center">
                                        <ApplicationLogo className="absolute inline-flex h-20 w-auto fill-[#5ae56e] text-gray-800 dark:text-gray-200" />
                                        <ApplicationLogo className="relative inline-flex h-20 w-auto fill-[#5ae56e] text-gray-800 dark:text-gray-200 motion-safe:animate-ping opacity-25" />
                                    </Link>
                                
                           
                               <h3 className="p-6 text-center text-gray-900 dark:text-gray-100 text-9xl font-black">Preparing Step For Your Future</h3>
                               <h1 className="p-6 text-center text-gray-900 dark:text-gray-100 text-xl font-light motion-safe:animate-bounce">Coming Soon</h1>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                           Linxit.id &copy; 2024
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
