import Image from "next/image";
import Link from "next/link";
import headphones from "@/public/headphones.jpg";
import laptop from "@/public/laptop.jpg";
import phonec from "@/public/phonec.jpeg";
import tele from "@/public/tele.webp";

export function CategoriesSelection2() {
    return (
        <div className="py-5 sm:py-5">

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">

                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                    <Image
                        src={tele}
                        alt="Television"
                        className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"/>
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/televisions">
                            <h3 className="text-white font-semibold">Televisions</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                    <Image
                        src={phonec}
                        alt="Phone cases"
                        className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"/>
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/phoneCases">
                            <h3 className="text-white font-semibold">Phone Cases</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                    <Image
                        src={laptop}
                        alt="Cameras"
                        className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"/>
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/cameras">
                            <h3 className="text-white font-semibold">Cameras</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                    <Image
                        src={laptop}
                        alt="Laptops and accessories"
                        className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"/>
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/laptops">
                            <h3 className="text-white font-semibold">Laptops & Accessories</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
