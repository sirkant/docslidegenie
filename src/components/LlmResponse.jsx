import React from 'react';

const LlmResponse = ({ response }) => {
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">LLM Response:</h2>
      <pre className="whitespace-pre-wrap">{response}</pre>
    </div>
  );
};

export default LlmResponse;