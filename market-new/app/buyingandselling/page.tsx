import BackButton from "@/components/BackButton";

const BuyingandSelling = () => {
  return (
    <div className="w-full p-6 text-white">
      <BackButton />

      <h2 className="mt-6 text-center text-3xl font-bold bg-linear-to-r from-[#7a9cc6] via-[#d9a0b8] to-[#a0626f] bg-clip-text text-transparent">
        Buying &amp; Selling on SquareHub
      </h2>

      <p className="mt-4 text-center text-sm text-gray-300 leading-relaxed">
        Buying and selling has never been easier!
        <br />
        Our <strong className="text-white">secure</strong> platform makes it
        easy for buyers and sellers to trade with strong
        security measures in place.
      </p>

      <p className="mt-6 text-sm text-gray-300 leading-relaxed">
        Whether you are clearing out your closet, looking for a rare find, or
        running a small shop from home, SquareHub gives you one simple place
        to list, discover, chat, and close the deal. No complicated setup,
        no hidden fees, just a clean marketplace built for real people.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-white">How it works</h3>
      <p className="mt-2 text-sm text-gray-300 leading-relaxed">
        List an item in under a minute. Add photos, set your price, and your
        listing is live for buyers nearby and across the country. Buyers can
        browse, save items they love, and message you directly to ask
        questions or make an offer. When you both agree, you choose how to
        complete the sale - meet up safely, or ship with tracking.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-white">For buyers</h3>
      <p className="mt-2 text-sm text-gray-300 leading-relaxed">
        Discover new and pre-loved items from people you can actually talk to.
        Filter by category, price, location, and condition. See clear photos,
        honest descriptions, and seller ratings before you buy. Save your
        favourites, follow sellers you trust, and get notified the moment
        something you want is listed.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-white">For sellers</h3>
      <p className="mt-2 text-sm text-gray-300 leading-relaxed">
        Turn what you no longer need into something someone else will love.
        Manage all your listings in one place, track views and messages, and
        update prices in seconds. You stay in control of who you sell to,
        when you meet, and how you get paid. SquareHub handles the busywork
        so you can focus on selling.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-white">Built with security in mind</h3>
      <p className="mt-2 text-sm text-gray-300 leading-relaxed">
        Every account is verified, every message stays inside SquareHub,
        Report anything
        that feels off, block unwanted contact, and trade with confidence
        knowing our team reviews reports quickly. Your personal details stay
        private - buyers and sellers only see what you choose to share.
      </p>

      <p className="mt-8 text-center text-sm text-gray-400 leading-relaxed">
        Ready to get started? Browse the marketplace, list your first item,
        and join thousands of buyers and sellers already trading on SquareHub.
      </p>
    </div>
  );
};

export default BuyingandSelling;