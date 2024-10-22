import { BookingForm } from "@/components/booking-form";

export default function Page() {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-8">Book Your Bali Photoshoot</h1>
      <BookingForm />
    </div>
  );
}
