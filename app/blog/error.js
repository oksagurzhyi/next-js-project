"use client";

export default function ErrorWrapper({ error }) {
  return <h1> Ops! Something went wrong! {error.message}</h1>;
}
