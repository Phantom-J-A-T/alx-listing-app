import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Welcome to ALX Listing App</h1>

        <Card
          title="Cozy Apartment"
          description="A nice cozy apartment in the city center."
          imageUrl="/assets/house.jpg"
        />

        <div className="mt-4">
          <Button label="Book Now" onClick={() => alert("Booking...")} />
        </div>
      </main>
    </div>
  );
}