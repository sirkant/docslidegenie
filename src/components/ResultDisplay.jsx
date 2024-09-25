import React from 'react';
import { Button } from "@/components/ui/button"

const ResultDisplay = ({ result }) => {
  return (
    <div className="mt-6 text-center">
      <h2 className="text-xl font-semibold mb-2">Slides Generated!</h2>
      <p className="mb-4">Your presentation is ready. Click the button below to view it.</p>
      <Button
        as="a"
        href={result}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        View Slides
      </Button>
    </div>
  );
};

export default ResultDisplay;