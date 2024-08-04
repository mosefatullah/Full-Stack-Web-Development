"use client";

export default function Button() {
    return (
        <button className="mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
            console.log("hi!");
        }}>
            Click here
        </button>
    )
}