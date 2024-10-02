"use client";

import Error from "next/error";
import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error; 
}

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={500} title="An error occurred" /> {/* Use appropriate props */}
      </body>
    </html>
  );
}
