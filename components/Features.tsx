import React from "react";

const Features = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
        </div>
        <div>
          <h3 className="font-medium">DryTech™ Fabric</h3>
          <p className="text-sm text-slate-500">
            Moisture-wicking material keeps you dry
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
        </div>
        <div>
          <h3 className="font-medium">4-Way Stretch</h3>
          <p className="text-sm text-slate-500">
            Maximum flexibility for every movement
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
          <div className="h-2 w-2 rounded-full bg-amber-500" />
        </div>
        <div>
          <h3 className="font-medium">Zippered Pockets</h3>
          <p className="text-sm text-slate-500">
            Secure storage for your essentials
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
