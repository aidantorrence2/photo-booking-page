import Link from 'next/link';
import { BookingForm } from "@/components/booking-form";
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-white py-8 px-4 max-w-md mx-auto">
      <div className="flex items-center">
        <Link href="/bali" className="text-gray-500 hover:text-gray-700 mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold text-green-800 flex-grow">Book Your Bali Photoshoot</h1>
      </div>
      <BookingForm />
    </div>
  );
}
