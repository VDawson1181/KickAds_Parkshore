"use client";
export default function ButtonElement({buttonInfo}) {
    return <button onClick={() => alert("Hello")}>{buttonInfo.copy}</button>
}