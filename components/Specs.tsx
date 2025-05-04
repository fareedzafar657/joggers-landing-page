import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

const Specs = () => {
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <>
      {/* <div className="absolute inset-0 z-0 rounded-xl" /> */}
      {/* <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Performance Joggers"
              width={600}
              height={800}
              className="object-contain h-full w-full z-10 relative"
              style={{
                transform: `translateY(-${scrollY * 0.05}px) scale(${1 + scrollY * 0.0005})`,
              }}
              priority
            /> */}

      {/* Size selector */}
      <div className="w-full flex justify-end">
        <Select value={selectedSize} onValueChange={(e) => setSelectedSize(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Size" />
          </SelectTrigger>
          <SelectContent>
            {["S", "M", "L", "XL"].map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price and CTA */}
      <div className="flex items-center justify-end space-x-8 pt-4">
        <Button className="px-8 py-3  rounded-full bg-white hover:bg-white border-[0.5px] border-white hover:border-black  text-black shadow-xl text-base">
          Add to Cart
        </Button>
        <div>
          <span className="text-3xl font-bold">$89</span>
          <span className="text-sm text-slate-500 ml-2 line-through">$119</span>
        </div>
      </div>
    </>
  );
};

export default Specs;
