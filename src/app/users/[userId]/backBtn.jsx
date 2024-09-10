"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const BackBtn = () => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.back()}>Back</Button>
    </>
  );
};

export default BackBtn;
