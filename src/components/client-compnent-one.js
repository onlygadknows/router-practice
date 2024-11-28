"use client";

import { useState } from "react";

export const ClientComponentOne = () => {
  const [name, setName] = useState("batman");
  return <h1>Client component one</h1>;
};
