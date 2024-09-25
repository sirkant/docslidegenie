import React from 'react';
import UrlSubmissionForm from '../components/UrlSubmissionForm';
import ResultDisplay from '../components/ResultDisplay';
import AuthWrapper from '../components/AuthWrapper';
import { UserButton } from "@clerk/clerk-react";

const Index = () => {
  const [result, setResult] = React.useState(null);

  const handleSubmit = async (url) => {
    // TODO: Implement the actual API call to process the document and generate slides
    // For now, we'll just simulate a response after a short delay
    setTimeout(() => {
      setResult('https://docs.google.com/presentation/d/example-slides-id');
    }, 2000);
  };

  return (
    <AuthWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">FromDocToDeck</h1>
            <UserButton />
          </div>
          <UrlSubmissionForm onSubmit={handleSubmit} />
          {result && <ResultDisplay result={result} />}
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Index;
