import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { motion } from 'framer-motion';
import Testimonials from '@/Components/Testimonials';


export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const testimonials = [
        {
          author: 'Ayu, Content Creator Kuliner',
          quote: 'Linxit.id tuh keren banget! Aku bisa bikin halaman bio yang keren, gampang banget buat ngatur konten, dan yang paling penting, aku bisa jual produk kulinerku langsung dari halaman bio. Makasih Linxit.id, sekarang aku bisa lebih fokus ngembangin bisnis kulinerku!',
          image: 'https://via.placeholder.com/150' // Ganti dengan URL gambar profil Ayu
        },
        {
          author: 'Budi, Pemilik Toko Online',
          quote: 'Sejak pakai Linxit.id, aku jadi lebih gampang ngatur konten dan promo toko onlineku di Instagram. Customer juga jadi lebih gampang nge-klik link yang aku share di bio. Aku bisa ngelacak semua data pengunjung dan klik, jadi aku bisa lebih fokus ngembangin strategi marketing!',
          image: 'https://via.placeholder.com/150' // Ganti dengan URL gambar profil Budi
        },
        {
          author: 'Citra, Influencer Fashion',
          quote: 'Dulu aku bingung mau ngatur link semua kontenku. Sekarang, pake Linxit.id aku bisa bikin halaman bio yang kece dan semua link tertata rapih. Aku juga bisa kolaborasi bareng kreator lain buat bikin konten yang lebih keren! Linxit.id, love banget deh!',
          image: 'https://via.placeholder.com/150' // Ganti dengan URL gambar profil Citra
        }
      ];

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-gray-100 dark:bg-gray-900 py-20"
            >
                <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-green-500 dark:text-white mb-4">
                    Tingkatkan Brand & Bisnis Anda dengan Linxit.id!
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    Solusi lengkap untuk membangun brand, mengelola konten, dan menjual produk digital secara mudah dan efektif.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                >
                    Mulailah Gratis
                </motion.button>
                </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="py-20"
            >
                <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-green-500 dark:text-white mb-8">
                    Keunggulan Linxit.id
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-white rounded-lg shadow-md p-6"
                    >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Editor Drag-and-Drop
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Buat halaman bio dengan mudah menggunakan editor drag-and-drop yang intuitif.
                    </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="bg-white rounded-lg shadow-md p-6"
                    >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Kolaborasi yang Kuat
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Bekerja sama dengan kreator lain untuk membangun halaman bio yang menarik dan efektif.
                    </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="bg-white rounded-lg shadow-md p-6"
                    >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Pembayaran Aman dan Cepat
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Terima pembayaran dengan mudah dan aman melalui integrasi Midtrans.
                    </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="bg-white rounded-lg shadow-md p-6"
                    >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Analitik yang Komprehensif
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Lacak kinerja halaman Anda dan optimalkan strategi dengan analitik yang komprehensif.
                    </p>
                    </motion.div>
                </div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <Testimonials testimonials={testimonials} />

            {/* Call to Action Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="bg-gray-200 dark:bg-gray-800 py-16"
            >
                <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-green-500 dark:text-white mb-4">
                    Mulailah Perjalanan Anda dengan Linxit.id
                </h2>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                >
                    Mulailah Gratis
                </motion.button>
                </div>
            </motion.section>

            {/* Footer Section */}
            <motion.footer
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="bg-gray-100 dark:bg-gray-900 py-8 text-center"
            >
                <div className="container mx-auto px-4">
                <p className="text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Linxit.id. All rights reserved.
                </p>
                <ul className="mt-4">
                    <li className="inline-block mx-2">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-500">
                        Kebijakan Privasi
                    </a>
                    </li>
                    <li className="inline-block mx-2">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-500">
                        Persyaratan Layanan
                    </a>
                    </li>
                    <li className="inline-block mx-2">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-500">
                        Tentang Kami
                    </a>
                    </li>
                </ul>
                </div>
            </motion.footer>
            </div>
        </>
    );
}
