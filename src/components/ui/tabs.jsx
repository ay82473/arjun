import React from "react";

export function Tabs({ children }) {
  return <div>{children}</div>;
}

export function TabsList({ children }) {
  return <div className="flex gap-2 justify-center flex-wrap mt-4">{children}</div>;
}

export function TabsTrigger({ value, activeTab, setActiveTab, children }) {
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 rounded font-medium ${
        value === activeTab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, activeTab, children }) {
  return value === activeTab ? <div className="mt-6">{children}</div> : null;
}
