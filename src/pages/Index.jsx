import React, { useState } from 'react';
import UrlSubmissionForm from '../components/UrlSubmissionForm';
import LlmResponse from '../components/LlmResponse';

const Index = () => {
  const [llmResponse, setLlmResponse] = useState(null);

  const handleSubmit = async (content) => {
    // TODO: Implement the actual API call to process the document content with an LLM
    // For now, we'll just simulate a response after a short delay
    setTimeout(() => {
      setLlmResponse(`Simulated LLM response for content: ${content.substring(0, 100)}...`);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Convert Your Docs to Slides</h1>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <UrlSubmissionForm onSubmit={handleSubmit} />
        {llmResponse && <LlmResponse response={llmResponse} />}
      </div>
    </div>
  );
};

export default Index;
